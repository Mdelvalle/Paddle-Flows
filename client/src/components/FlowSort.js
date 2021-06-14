import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';


const FlowSort = ({ sortFlows }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentSort, setCurrentSort] = useState('');

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }

  return (
    <div className="container">
      <div className={ isActive ? "dropdown mb-5 is-active" : "dropdown mb-5"} onClick={ toggleDropdown }>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Sort By</span>
            <span className="icon is-small">
              <RiArrowDropDownLine aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu dropdown-menu-width" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div
              className={ currentSort === 'flow' ? "dropdown-item dropdown-item-selected" : "dropdown-item"}
              onClick={() => {
                setCurrentSort('flow');
                sortFlows('flow');
              }}
            >
              Flow Rate
            </div>
            <hr className="dropdown-divider" />
            <div
              className={ currentSort === 'depth' ? "dropdown-item dropdown-item-selected" : "dropdown-item"}
              onClick={() => {
                setCurrentSort('depth');
                sortFlows('depth')
              }}
            >
              Depth
            </div>
            <hr className="dropdown-divider" />
            <div
              className={ currentSort === 'temp' ? "dropdown-item dropdown-item-selected" : "dropdown-item"}
              onClick={() => {
                setCurrentSort('temp');
                sortFlows('temp')
              }}
            >
              Temperature
            </div>
            <hr className="dropdown-divider" />
            <div
              className={ currentSort === 'wind' ? "dropdown-item dropdown-item-selected" : "dropdown-item"}
              onClick={() => {
                setCurrentSort('wind');
                sortFlows('wind')
              }}
            >
              Wind Speed
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowSort

import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';

const FlowSort = ({ sortFlows }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }

  return (
    <div className={ isActive ? "dropdown mb-5 is-active" : "dropdown mb-5"} onClick={ toggleDropdown }>
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Sort By</span>
          <span className="icon is-small">
            <RiArrowDropDownLine aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a className="dropdown-item" onClick={() => { sortFlows('flow') }}>
            Flow rate
          </a>
          <hr className="dropdown-divider" /> 
          <a className="dropdown-item" onClick={() => {  sortFlows('depth') }}>
            Depth
          </a>
          <hr className="dropdown-divider" />
          <a className="dropdown-item" onClick={() => {  sortFlows('temp') }}>
            Temperature
          </a>
          <hr className="dropdown-divider" />
          <a className="dropdown-item" onClick={() => {  sortFlows('wind') }}>
            Wind Speed
          </a>
        </div>
      </div>
    </div>
  )
}

export default FlowSort

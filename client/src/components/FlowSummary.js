import { BiWater } from 'react-icons/bi';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';
import FlowTempIcon from './FlowTempIcon';


const FlowSummary = ({
  name,
  streamFlowVal,
  gageHeightVal,
  temp,
  wind,
  icon,
  type
}) => {

  return (
    <li className="box flow-summary">
      <p className="flow-summary-name">{ name }</p>
      <div className="flow-summary-data">
        <div className="flow-summary-info">
          <BiWater className="flow-summary-icons mr-2" />
          <p>{ streamFlowVal } ft&sup3;/s</p>
        </div>
        <div className="flow-summary-info">
          <AiOutlineColumnHeight className="flow-summary-icons mr-2" />
          <p>{ gageHeightVal } ft</p>
        </div>
      </div>
      <div className="flow-summary-data">
        <div className="flow-summary-info">
          <FlowTempIcon
            type={ type }
            iconNum={ icon.slice(0, 2) }
            dayOrNight={ icon.slice(2) }
          />
          <p className="flow-summary-">{ Math.round(temp) }&deg;F</p>
        </div>
        <div className="flow-summary-info">
          <FiWind className="flow-summary-icons mr-2" />
          <p>{ wind } mph</p>
        </div>
      </div>
    </li>
  )
}

export default FlowSummary

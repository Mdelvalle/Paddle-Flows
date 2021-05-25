import { BiWater } from 'react-icons/bi';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';
import { FaThermometerHalf } from 'react-icons/fa';
import {
  WiStormShowers,
  WiSprinkle,
  WiDayShowers,
  WiNightAltShowers,
  WiSnow,
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy
} from 'react-icons/wi';


const FlowSummary = ({
  name,
  streamFlowVal,
  gageHeightVal,
  temp,
  wind,
  type,
  time
}) => {
  // Display icon type according to the weather at this particular flow site
  const getWeatherIcon = (type, time) => {
    switch (type) {
      case 'Thunderstorm':
        return <WiStormShowers className="flow-summary-weather-icon mr-2" />;
      case 'Drizzle':
        return <WiSprinkle className="flow-summary-weather-icon mr-2" />;
      case 'Rain':
        return time == 'd'
          ? <WiDayShowers className="flow-summary-weather-icon mr-2" />
          : <WiNightAltShowers className="flow-summary-weather-icon mr-2" />
      case 'Snow':
        return <WiSnow className="flow-summary-weather-icon mr-2" />;
      case 'Clear':
        return time == 'd'
        ? <WiDaySunny className="flow-summary-weather-icon mr-2" />
        : <WiNightClear className="flow-summary-weather-icon mr-2" />
      case 'Clouds':
        return time == 'd'
        ? <WiDayCloudy className="flow-summary-weather-icon mr-2" />
        : <WiNightCloudy className="flow-summary-weather-icon mr-2" />
      default:
        return <FaThermometerHalf className="flow-summary-weather-icon mr-2" />
    }
  }

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
          { getWeatherIcon(type, time.charAt(time.length - 1)) }
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

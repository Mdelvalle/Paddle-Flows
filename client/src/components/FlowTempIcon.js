import {
  WiStormShowers,
  WiSprinkle,
  WiShowers,
  WiDayShowers,
  WiNightAltShowers,
  WiSnow,
  WiWindy,
  WiDaySunny,
  WiMoonAltFull,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiThermometer
} from 'react-icons/wi';


const FlowTempIcon = ({ type, iconNum, dayOrNight }) => {
  // Display icon type according to the weather at this particular flow site
  switch (true) {
    case type >= 200 && type < 300: // Thunderstorm
      return <WiStormShowers className="flow-summary-weather-icon mr-2" />;
    case type >= 300 && type < 400: // Drizzle
      return <WiSprinkle className="flow-summary-weather-icon mr-2" />;
    case type >= 500 && type < 600: // Rain
      if (iconNum === '09') {
        return <WiShowers className="flow-summary-weather-icon mr-2" />;
      }

      if (dayOrNight === 'd') {
        return <WiDayShowers className="flow-summary-weather-icon mr-2" />
      }

      return <WiNightAltShowers className="flow-summary-weather-icon mr-2" />
    case type >= 600 && type < 700: // Snow
      return <WiSnow className="flow-summary-weather-icon mr-2" />;
    case type >= 700 && type < 800: // Atmosphere
      return <WiWindy className="flow-summary-weather-icon mr-2" />
    case type === 800: // Clear
      if (dayOrNight === 'd') {
        return <WiDaySunny className="flow-summary-weather-icon mr-2" />
      }

      return <WiMoonAltFull className="flow-summary-weather-icon mr-2" />
    case type >= 801 && type < 900: // Clouds
      if (iconNum === '02') {
          if (dayOrNight === 'd') {
            return <WiDayCloudy className="flow-summary-weather-icon mr-2" />
          }

          return <WiNightCloudy className="flow-summary-weather-icon mr-2" />
        }

        if (iconNum === '03') {
          return <WiCloud className="flow-summary-weather-icon mr-2" />
        }

        return <WiCloudy className="flow-summary-weather-icon mr-2" />
    default:
      return <WiThermometer className="flow-summary-weather-icon mr-2" />
  }
}

export default FlowTempIcon

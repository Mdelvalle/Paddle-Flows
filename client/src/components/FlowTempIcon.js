import {
  WiStormShowers,
  WiSprinkle,
  WiShowers,
  WiDayShowers,
  WiNightAltShowers,
  WiSnow,
  WiDaySunny,
  WiMoonAltFull,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy
} from 'react-icons/wi';


const FlowTempIcon = ({ type, iconNum, dayOrNight }) => {
  // Display icon type according to the weather at this particular flow site
  const getWeatherIcon =  {
    'Thunderstorm': () => {
        return <WiStormShowers className="flow-summary-weather-icon mr-2" />;
      },
    'Drizzle': () => {
      return <WiSprinkle className="flow-summary-weather-icon mr-2" />;
    },
    'Rain': (iconNum, dayOrNight) => {
      if (iconNum === '09') {
        return <WiShowers className="flow-summary-weather-icon mr-2" />;
      }

      if (dayOrNight === 'd') {
        return <WiDayShowers className="flow-summary-weather-icon mr-2" />
      }

      return <WiNightAltShowers className="flow-summary-weather-icon mr-2" />
    },
    'Snow': () => {
      return <WiSnow className="flow-summary-weather-icon mr-2" />;
    },
    'Clear': (_, dayOrNight) => {
      if (dayOrNight === 'd') {
        return <WiDaySunny className="flow-summary-weather-icon mr-2" />
      }

      return <WiMoonAltFull className="flow-summary-weather-icon mr-2" />
    },
    'Clouds': (iconNum, dayOrNight) => {
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
    }
  }

  return (
    getWeatherIcon[type](iconNum, dayOrNight)
  )
}

export default FlowTempIcon

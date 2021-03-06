// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import FlowList from './components/FlowList.js';
import usgsData from './utils/usgsData';
import weather from './utils/weatherData';
import FlowSort from './components/FlowSort';
import Contact from './components/Contact';


const siteSearchInfo = [
  '08155240', // barton creek @ lost creek
  '08155400', // barton creek @ barton springs
  '08158000', // colorado @ austin
  '08159200', // colorado @ bastrop
  '08167500', // guadalupe @ spring branch
  '08169000', // comal @ new braunfels
  '08170500', // san marcos @ san marcos
  '08153500', // pedernales @ johnson city
  '08195000', // frio @ concan
  '08178880', // medina @ bandera
].join(',');

const App = () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getSiteData = () => {
    // Parse usgs data into a list of unique sites
    usgsData(siteSearchInfo).then(usgsSites => {
      // Fetch weather data and merge with usgs sites
      Promise.all(usgsSites.map(site => {
        return weather(site.coordinates).then(weatherRes => {
          return {
            ...site,
            temp: weatherRes.temp,
            icon: weatherRes.icon,
            type: weatherRes.type,
            wind: weatherRes.wind
          }
        });
      })).then(res => {
        // Update results when both usgs and weather data has been retrieved
        setResults((res));

        // No errors, so we clear the previous message if any
        setErrorMessage('');
      }).catch(error => {
        setErrorMessage('Something went wrong - please try again later.', error);
      });
    }).catch(error => {
      setErrorMessage('Something went wrong - please try again later.', error);
    });
  }

  useEffect(() => {
    getSiteData()
  }, []);

  // Sort sites by flow rate, depth, temperature, or wind speed
  const sortFlows = sortBy => {
    const sorted = [...results].sort((curr, next) => {
      switch (sortBy) {
        case 'flow':
          return next.streamFlow.value - curr.streamFlow.value;
        case 'depth':
          return next.gageHeight.value - curr.gageHeight.value;
        case 'temp':
          return next.temp - curr.temp;
        case 'wind':
          return curr.wind - next.wind;
        default:
          return results;
      }
    });

    setResults(sorted);
  }

  return (
    <div>
      <div className="container app">
        <h1 className="title is-1">Paddle Flows</h1>
        { (results && !errorMessage ) ? <FlowSort sortFlows={ sortFlows } /> : null }
        { (!results && !errorMessage) ? <p>Loading...</p> : null }
        { results && (!errorMessage) ? <FlowList flows={ results } len={ results.length } /> : null }
        { errorMessage ? <p>{ errorMessage }</p> : null }
        <Contact />
      </div>
    </div>
  )
}

export default App;

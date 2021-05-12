import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import FlowList from './components/FlowList.js';
import usgs from './api/usgs';
import usgsData from './utils/usgsData';


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
].join(',');

const App = () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await usgs.get('/iv', {
        params: {
          format: 'json',
          sites: siteSearchInfo,
          siteStatus: 'active'
        }
      });

      setResults(usgsData(response));
      setErrorMessage('');
    } catch (err) {
      console.log('err', err);
      setErrorMessage('Something went wrong - please try again.');
    }
  }

  useEffect(() => {
    searchApi()
  }, [])

  return (
    <div>
      <FlowList flows={ results }/>
      { errorMessage ? <p>{ errorMessage }</p> : null }
      <p>We have found { results.length } results</p>
    </div>
  )
}

export default App;

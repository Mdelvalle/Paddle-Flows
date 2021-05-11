import axios from 'axios';

export default axios.create({
  baseURL: 'https://waterservices.usgs.gov/nwis'
});
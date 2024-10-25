// Helpers/AxiosInstance.js
import axios from 'axios';
import { Base_Url } from './BaseUrl';

const AxiosInstanceForHomePageData = axios.create({ 
  baseURL: Base_Url
});
 
export default AxiosInstanceForHomePageData;

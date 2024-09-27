import AxiosInstanceForHomePageData from '../Helpers/AxiosInstance';
import { Api_Key } from '../Helpers/ApiKey';

async function QueryDataFetch(Query) {
  try {
    const response = await AxiosInstanceForHomePageData.get('search', {
      params: {
        key: Api_Key,
        part: 'snippet',
        type: 'video',
        q: Query, 
        maxResults: 500,
        
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return null; // Return null in case of an error
  }
}

export default QueryDataFetch;

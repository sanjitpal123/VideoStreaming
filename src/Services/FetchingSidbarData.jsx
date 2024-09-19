import AxiosInstanceForHomePageData from '../Helpers/AxiosInstance';
import { Api_Key } from '../Helpers/ApiKey';

async function FetchingSideBarClickedData(Query) {
    try {
        const response = await AxiosInstanceForHomePageData.get('search', {
            params: {
                key: Api_Key,
                part: 'snippet',
                type: 'video',
                q: `${Query}`, 
                maxResults: 50 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching sports-related videos:', error);
    }
}

export default FetchingSideBarClickedData;

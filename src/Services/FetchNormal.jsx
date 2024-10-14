
import AxiosInstanceForHomePageData from '../Helpers/AxiosInstance';
import { Api_Key } from '../Helpers/ApiKey';

async function FetchHomePageDataNormal() {
    try {
 
        const endpoint = 'videos'; 

   
        const response = await AxiosInstanceForHomePageData.get(endpoint, {
            params: {
                key: Api_Key, 
               
                part: 'snippet,statistics', 
                chart: 'mostPopular',
                maxResults:500,
                

            }
        });

        console.log(response.data); 
        return response.data.items;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default FetchHomePageDataNormal;

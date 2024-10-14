import AxiosInstanceForHomePageData from "../Helpers/AxiosInstance";
import { Api_Key } from "../Helpers/ApiKey";
async function FetchChannelDeatils(ChannelId)
{
    try{
      const data=await AxiosInstanceForHomePageData.get(`channels?part=snippet,contentDetails,statistics&id=${ChannelId}&key=${Api_Key}`);
      console.log('dataof channel',data);
      return data.data.items;
    }catch(error){
        throw error;
    }

}

export default FetchChannelDeatils;
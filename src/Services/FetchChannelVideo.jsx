import { Api_Key } from "../Helpers/ApiKey"; // Make sure this exports your API key
import AxiosInstanceForHomePageData from "../Helpers/AxiosInstance";

async function ChannelVideo(channelId) {
    try {
        // Construct the API URL to fetch videos from the channel
        const API_URL = `search?key=${Api_Key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
        
        // Make the GET request using Axios
        const response = await AxiosInstanceForHomePageData.get(API_URL);
        
        // Return the video data from the response
        console.log("channel data",response)
        return response.data.items;
    } catch (error) {
        console.error('Error fetching channel videos:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

export default ChannelVideo;

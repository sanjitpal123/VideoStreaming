import axios from "axios";
import { Api_Key } from "../Helpers/ApiKey";
import AxiosInstanceForHomePageData from "../Helpers/AxiosInstance";

async function FetchShorts() {
    try {
        const response = await AxiosInstanceForHomePageData.get(
            `search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${Api_Key}`
        );
        console.log(response.data.items); // Process the fetched shorts videos here
        return response.data.items;
    } catch (error) {
        console.error("Error fetching Shorts: ", error);
        throw error;
    }
}
export default FetchShorts;
  
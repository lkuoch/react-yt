import axios from "axios";

const KEY = "AIzaSyCk3tMSEhdkf7WT2p44L2iBEndAeNDxzCQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

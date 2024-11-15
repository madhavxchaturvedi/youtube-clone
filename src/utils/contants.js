export const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;

export const LIVE_CHAT_COUNT = 20;

export const YOUTUBE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  AUTH_KEY;

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${AUTH_KEY}&id=`;

export const YOUTUBE_SEARCH_API =
  "https://youtube-search-suggestion.onrender.com/?q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";

export const YOUTUBE_CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=";

export function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings",
  params: {
    // Move API key to .env
    apikey: import.meta.env.VITE_API_KEY,
  },
  timeout: 10000,
});

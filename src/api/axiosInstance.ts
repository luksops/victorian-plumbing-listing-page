import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings",
  params: {
    // Move API key to .env
    apikey: "yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
  },
  timeout: 10000,
});

// configuration
import config from 'configs/config';

// API base url
const baseUrl = config.API_BASE_URL;

// fetch prices from API
export const fetchPrices = async () => {
  const priceDataResponse = await fetch(`${baseUrl}/prices`);
  if (!priceDataResponse.ok) throw new Error(priceDataResponse.statusText);
  const priceData = await priceDataResponse.json();
  return priceData;
};

export default {
  fetchPrices,
};

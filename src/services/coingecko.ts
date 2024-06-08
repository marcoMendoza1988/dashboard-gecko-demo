import axios from 'axios';
import errorHandler from '../utils/errorHandler';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCryptocurrencies = async (category = '') => {
  try {
    const params: any = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    }

    if(category){
      params.category = category
    }
    const response = await api.get('/coins/markets', {
      params,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching cryptocurrencies:', error);
    errorHandler(error);
    return [];
  }
};

export const getCandleData = async (id: string, days: string) => {
  try {
    const response = await api.get(`/coins/${id}/ohlc`, {
      params: {
        vs_currency: 'usd',
        days,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching candle data:', error);
    errorHandler(error);
    return [];
  }
};

export const getTrending = async () => {
    try {
        const response = await api.get(`/global`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching candle data:', error);
        errorHandler(error);
        return [];
    }
}

export const getCategoryCoins = async () => {
    try {
        const response = await api.get(`/coins/categories`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching candle data:', error);
        errorHandler(error);
        return [];
    }
}

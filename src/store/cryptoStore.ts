import create from 'zustand';
import { getCategoryCoins, getCryptocurrencies, getTrending } from '../services/coingecko';

interface CryptoState {
  cryptocurrencies: any[];
  trending: any[];
  coinsCategory: any[];
  filteredCryptoCoins: any[];
  fetchCryptocurrencies: (category: string | undefined) => Promise<void>;
  fetchTrending: () => Promise<void>;
  fetchCoinsCategory: () => Promise<void>;
  searchText: string;
  setSearchText: (text: string) => void;
  filterCryptocoins: () => void;
}

export const useCryptoStore = create<CryptoState>((set, get) => ({
  cryptocurrencies: [],
  trending: [],
  coinsCategory: [],
  searchText: '',
  filteredCryptoCoins: [],
  fetchCryptocurrencies: async (category) => {
    const data = await getCryptocurrencies(category);
    set({ cryptocurrencies: data, filteredCryptoCoins: data });
  },
  fetchTrending: async () => {
    const data = await getTrending();
    set({ trending: data });
  },
  fetchCoinsCategory: async () => {
    const data = await getCategoryCoins();
    set({ coinsCategory: data });
  },
  setSearchText: (text) => {
    set({ searchText: text });
    get().filterCryptocoins();
  },
  filterCryptocoins: () => {
    const { cryptocurrencies, searchText } = get();
    const filtered = cryptocurrencies.filter((coin) =>
      coin.name.toLowerCase().includes(searchText.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchText.toLowerCase())
    );
    set({ filteredCryptoCoins: filtered });
  },
}));

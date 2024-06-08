import React from 'react';
import { useCryptoStore } from '../../../store/cryptoStore';

const SearchBar: React.FC = () => {
  const { searchText, setSearchText } = useCryptoStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search crypto in gecko"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;

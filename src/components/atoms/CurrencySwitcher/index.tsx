import React, { useState } from 'react';

const CurrencySwitcher: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('USD');

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'USD' ? 'MXN' : 'USD'));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={toggleCurrency}
        className={`px-4 py-2 font-semibold ${
          currency === 'USD' ? 'text-blue-500' : 'text-gray-500'
        }`}
      >
        USD
      </button>
      <span className="mx-2 text-gray-500">-</span>
      <button
        onClick={toggleCurrency}
        className={`px-4 py-2 font-semibold ${
          currency === 'MXN' ? 'text-blue-500' : 'text-gray-500'
        }`}
      >
        MXN
      </button>
    </div>
  );
};

export default CurrencySwitcher;

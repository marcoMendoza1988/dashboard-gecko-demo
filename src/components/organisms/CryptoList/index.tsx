import React, { useState, useEffect } from 'react';
import { useCryptoStore } from '../../../store/cryptoStore';
import CryptoModal from '../CryptoModal';
import { formatPrice } from '../../../utils/formatPrice';

const CryptoList: React.FC = () => {
  const { cryptocurrencies, fetchCryptocurrencies } = useCryptoStore();
  const [selectedCrypto, setSelectedCrypto] = useState<{ id: string, name: string } | null>(null);

  useEffect(() => {
    fetchCryptocurrencies('');
  }, [fetchCryptocurrencies]);

  const openModal = (id: string, name: string) => {
    setSelectedCrypto({ id, name });
  };

  const closeModal = () => {
    setSelectedCrypto(null);
  };

  return (
    <div className="container-lg mx-auto pt-4">
      <ul>
        {cryptocurrencies.map((crypto) => (
          <li
            key={crypto.id}
            className="border p-4 mb-2 rounded shadow cursor-pointer"
            onClick={() => openModal(crypto.id, crypto.name)}
          >
            <div className="flex items-center">
              <img src={crypto.image} alt={crypto.name} className="w-10 h-10 mr-4" />
              <div>
                <h2 className="text-lg font-bold">{crypto.name}</h2>
                <p>${formatPrice(crypto.current_price)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {selectedCrypto && (
          <CryptoModal
            isOpen={true}
            onClose={closeModal}
            cryptoId={selectedCrypto.id}
            cryptoName={selectedCrypto.name}
          />
        )}
      </div>
    );
  };
  
  export default CryptoList;
  
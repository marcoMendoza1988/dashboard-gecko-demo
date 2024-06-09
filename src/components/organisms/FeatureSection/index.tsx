import React from 'react';
import CurrencySwitcher from '../../atoms/CurrencySwitcher';
import CryptoNewsBlog from '../../atoms/CryptoNews';

const FeatureSection: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Características Destacadas</h2>

      {/* Ejemplo 1 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Componente de Cambio de Moneda</h3>
        <p className="text-gray-600 mb-4">
          Este componente permite alternar entre las monedas USD y MXN, mostrando el equivalente de la cantidad ingresada en la otra moneda.
        </p>
        <CurrencySwitcher />
      </div>

      {/* Ejemplo 2 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Componente de Noticias de Criptomonedas</h3>
        <p className="text-gray-600 mb-4">
          Este componente muestra las últimas noticias de criptomonedas en un diseño de blog, incluyendo título, descripción, fecha de publicación y enlace para leer más.
        </p>
        <CryptoNewsBlog
          news={[
            {
              title: 'Bitcoin alcanza un nuevo máximo histórico',
              description: 'El precio de Bitcoin superó los $60,000 por primera vez en la historia.',
              imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1480/https://s3.cointelegraph.com/uploads/2024-06/ee1721f6-c87e-40d5-abe2-23a67d4aa5ae.jpg',
              sourceName: 'CryptoNews.com',
              publishedAt: '2024-06-01',
              url: 'https://example.com/news/bitcoin-hits-new-all-time-high',
            },
            {
              title: 'Ethereum lanza su actualización London',
              description: 'Ethereum implementa EIP-1559 como parte de su última actualización.',
              imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1480/https://s3.cointelegraph.com/uploads/2024-06/d8f76e48-341e-4573-98da-fa518a16d3c3.jpg',
              sourceName: 'CoinDesk',
              publishedAt: '2024-05-28',
              url: 'https://example.com/news/ethereum-london-upgrade',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FeatureSection;

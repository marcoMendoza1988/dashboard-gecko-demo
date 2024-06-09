import React from 'react';

interface CryptoNews {
  title: string;
  description: string;
  imageUrl: string;
  sourceName: string;
  publishedAt: string;
  url: string;
}

interface CryptoNewsProps {
  news: CryptoNews[];
}

const CryptoNewsBlog: React.FC<CryptoNewsProps> = ({ news }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Últimas noticias de criptomonedas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md p-6">
            <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-xs">{article.publishedAt}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Leer más</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CryptoNewsBlog;

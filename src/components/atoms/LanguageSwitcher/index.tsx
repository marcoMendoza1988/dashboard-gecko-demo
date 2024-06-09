import React, { useState } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow-md">
        <p className="mb-4 text-lg">
          {language === 'es' ? 'Hola, Mundo!' : 'Hello, World!'}
        </p>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          {language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

# Proyecto de Ejemplo con React, Vite, TypeScript, Zustand y Tailwind CSS

Este proyecto demuestra cómo configurar y desarrollar una aplicación web utilizando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **Zustand**: Biblioteca para manejar el estado global.
- **Tailwind CSS**: Framework de CSS utilitario para estilizar la aplicación.

## Índice

1. [Instalación y Configuración Inicial](#instalación-y-configuración-inicial)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Configuración de Tailwind CSS](#configuración-de-tailwind-css)
4. [Manejo del Estado con Zustand](#manejo-del-estado-con-zustand)
5. [Componentes de Ejemplo](#componentes-de-ejemplo)
6. [Manejo de Errores con React-Toastify](#manejo-de-errores-con-react-toastify)
7. [Configuración del Sidebar](#configuración-del-sidebar)
8. [Integración con la API de CoinGecko](#integración-con-la-api-de-coingecko)
9. [Componentes de Gráficos con D3.js](#componentes-de-gráficos-con-d3js)
10. [Paginación Responsiva](#paginación-responsiva)

---

## Instalación y Configuración Inicial

1. **Crear el Proyecto con Vite y React**:
    ```bash
    npm create vite@latest my-project --template react-ts
    cd my-project
    ```

2. **Instalar Dependencias Necesarias**:
    ```bash
    npm install zustand tailwindcss postcss autoprefixer d3 react-icons react-toastify axios react-router-dom
    ```

3. **Inicializar Tailwind CSS**:
    ```bash
    npx tailwindcss init -p
    ```

## Estructura del Proyecto

La estructura básica del proyecto será la siguiente:

dashboard-gecko-demo/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── store/
│ ├── styles/
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
│ └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts


### Configuración de Tailwind CSS

Modificar el archivo `tailwind.config.js` para añadir las rutas a nuestros componentes:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### En el archivo index.css:

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Manejo del Estado con Zustand
 
```jsx
 import create from 'zustand';

interface CryptoState {
  filteredCryptoCoins: any[];
  setFilteredCryptoCoins: (coins: any[]) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
  filteredCryptoCoins: [],
  setFilteredCryptoCoins: (coins) => set({ filteredCryptoCoins: coins }),
}));
```

## Componentes de Ejemplo

1. **WrapperCard: Componente que organiza los cards en una cuadrícula**.

```jsx
import React from 'react';

interface WrapperCardProps {
  children: React.ReactNode;
  columns: number;
  ignoreColumnsOnMobile?: boolean;
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children, columns, ignoreColumnsOnMobile = false }) => {
  const gridClasses = `grid gap-4 ${
    ignoreColumnsOnMobile ? 'grid-cols-1 md:grid-cols-' + columns : `grid-cols-1 sm:grid-cols-${columns}`
  }`;

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default WrapperCard;
```
2. **Sidebar: Componente de barra lateral con iconos y capacidad para esconderse en dispositivos móviles**.

## Manejo de Errores con React-Toastify

### Instalar y configurar react-toastify para manejar errores y notificaciones:

```jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const notify = () => toast("Error!");

  return (
    <div>
      <button onClick={notify}>Show Error</button>
      <ToastContainer />
    </div>
  );
};

export default App;
```

## Integración con la API de CoinGecko

1. **Obtener los datos de CoinGecko y almacenarlos en el estado global con Zustand**:
```jsx
import axios from 'axios';
import { useCryptoStore } from './store/cryptoStore';

const fetchCryptoData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        category: 'memecoin',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });
    useCryptoStore.getState().setFilteredCryptoCoins(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

fetchCryptoData();
```

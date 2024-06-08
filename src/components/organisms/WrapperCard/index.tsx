import React, { useEffect, useState } from 'react';

interface WrapperCardProps {
  children: React.ReactNode;
  columns: number;
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children, columns }) => {
    /**
     *  Al usar tailwind de forma dinamica para cambiar las clases esta se omite en tiempo de renderizacion,
     * asi que en este caso usamos el tamaño de la pantalla para usar mediaquery y validar el dispositivo y 
     * hacer la parte responsiva con el grid, tambien podemos usar css para que los cambios sean solo en este archivo
     *  */  
    const mediaMatch = window.matchMedia('(min-width: 500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e: any) => setMatches(e.matches);
        mediaMatch.addListener(handler as any);
        return () => mediaMatch.removeListener(handler as any);
    });

    return (
        <div style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: `repeat(${!matches ? '1' : columns}, minmax(0, 1fr))`
        }}>
            {children}
        </div>
    );
};

export default WrapperCard;

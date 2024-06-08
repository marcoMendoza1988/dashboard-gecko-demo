/**
     *  Al usar tailwind de forma dinamica para cambiar las clases esta se omite en tiempo de renderizacion,
     * asi que en este caso usamos el tamaño de la pantalla para usar mediaquery y validar el dispositivo y 
     * hacer la parte responsiva con el grid, tambien podemos usar css para que los cambios sean solo en este archivo
     *  */  
export const mediaMatch = window.matchMedia('(min-width: 500px)');
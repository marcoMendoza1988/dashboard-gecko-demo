import { toast } from 'react-toastify';

const errorHandler = (error: Error) => {
  toast.error(error?.message ? `${error?.message}: El limite de llamadas al endpoint se ha sobrepasado, espera 1 min` : 'Network Error: El limite de llamadas al endpoint se ha sobrepasado, espera 1 min', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default errorHandler;

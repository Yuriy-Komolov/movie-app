import axios from 'axios';

export const getMovie = async (film: string): Promise<Object> => {
  const resp = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}&t=${film}&plot=full&type=movie`
  );

  return resp.data;
};

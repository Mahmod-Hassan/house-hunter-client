import axios from 'axios';
import { useState } from 'react';

const useApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method, body) => {
    setLoading(true);
    try {
      const response = await axios({
        method: method,
        url: url,
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      setLoading(false);
      return data;
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
};

export default useApiRequest;

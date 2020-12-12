import {useState, useEffect} from 'react';

const useApi = (apiCall, initialValue = {}) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async function() {
    try {
      setHasError(false);
      setLoading(true);
      const result = await apiCall();
      if (result) {
        setData(result);
      }
    } catch (error) {
      setHasError(true);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiCall]);
  return {loading, data, retry: fetchData, hasError};
};

export default useApi;

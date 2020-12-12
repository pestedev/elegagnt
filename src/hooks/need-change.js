/* this needs to handle 3 kind of request : empty - with data - with a data (eg: data) in get url */

import {useState, useEffect} from 'react';

const useApi = ({api: apiCall, initialValue = {}, value = null}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async function() {
      try {
        setError(false);
        setLoading(true);

        const result = await apiCall(value);

        if (result) {
          setData(result);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    console.log(apiCall, value);
    fetchData();
  }, [apiCall, value]);

  return {loading, data, error};
};

export default useApi;

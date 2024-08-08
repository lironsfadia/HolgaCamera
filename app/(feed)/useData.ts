import axios from 'axios';
import { useEffect, useState } from 'react';

interface Person {
  name: string;
  // Add other properties as needed
}

const useData = () => {
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setData(response.data.results);
      } catch (err) {
        setError('An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useData;

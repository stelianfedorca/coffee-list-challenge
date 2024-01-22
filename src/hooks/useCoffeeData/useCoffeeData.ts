import { useEffect, useState } from 'react';

type CoffeeDataProps = {
  type: string;
};

const coffeeDataApi =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

// custom hook
export function useCoffeeData<T>() {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(coffeeDataApi)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
}

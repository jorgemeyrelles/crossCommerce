import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';

// import { Container } from './styles';

function NotFound() {
  const [data, setData] = useState([]);
  const URL = 'http://localhost:3000/random';
  const path = window.location.pathname.split('/');

  useEffect(() => {
    const receivingData = async () => {
      const numbers = await getData(`${URL}/${path[2]}`);
      if (numbers.length === 0) return setData(['[]']);
      setData(numbers);
      return numbers;
    };
    receivingData();
    // setIsLoading(true);
    console.log(data);
  }, []);
  return (
    <di>{data}</di>
  );
}

export default NotFound;
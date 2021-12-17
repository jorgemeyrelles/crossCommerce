import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getData } from '../services/api';

function NotFound() {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const URL = 'http://localhost:3000/random';
  const path = window.location.pathname.split('/');
  
  useEffect(() => {
    const receivingData = async () => {
      const numbers = await getData(`${URL}/${path[2]}`);
      if (numbers.length === 0) return setData(['[]']);
      setData(numbers);
      console.log(numbers);
      return numbers;
    };
    receivingData();
    // setIsLoading(true);
  }, []);

  return (
    <>
      <di>Not Found</di>
      <div>404</div>
      <button type='button' onClick={ () => navigate('/') }>Go back Home</button>
    </>
  );
}

export default NotFound;
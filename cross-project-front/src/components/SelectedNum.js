import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
// import { Container } from './styles';

function Numbers() {
  const [data, setData] = useState([]);
  const URL = 'http://localhost:3000/selected';
  const path = window.location.pathname.split('/');
  
  useEffect(() => {
    const receivingData = async () => {
      const numbers = await getData(`${URL}/${path[2]}`);
      console.log(numbers);
      if (numbers.length === 0) return setData(['[]']);
      setData(numbers);
      return numbers;
    };
    receivingData();
  }, []);
  return (
    <div style={ { textAlign: '-webkit-center', marginTop: '75px', marginBottom: '80px' } }>
      <table>
        <tr>
          <th>Index</th>
          <th>Code number</th>
        </tr>
        { data.map((e, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{e}</td>
            </tr>
          )
        }) }
      </table>
    </div>
  );
}

export default Numbers;
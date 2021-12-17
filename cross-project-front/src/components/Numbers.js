import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
import './Numbers.css';

function Numbers() {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
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
  }, []);

  // const loading = () => {
  //   return (
  //     <div style={ {
  //       position: 'fixed',
  //       left: '0',
  //       top: '0',
  //       right: '0',
  //       bottom: '0',
  //       zIndex: '99',
  //       backgroundColor: '#000',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center'
  //     } }>
  //       <img src="https://i.gifer.com/8Etj.gif" alt="loading" />
  //     </div>
  //   );
  // };

  // const numberScreen = () => {
  //   return ()
  // };

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
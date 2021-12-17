import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';

function Numbers() {
  const [data, setData] = useState(false);
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

  const loading = () => {
    return (
      <div style={ {
        position: 'relative',
        marginTop: '150px',
        zIndex: '99',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } }>
        <img src="https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-4.gif" alt="loading" />
      </div>
    );
  };

  const numberScreen = () => {
    return (
      <table>
        <thead>
          <th>Index</th>
          <th>Code number</th>
        </thead>
        <tbody>
          { data.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e}</td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    )
  };

  return (
    <div style={ { textAlign: '-webkit-center', marginTop: '75px', marginBottom: '80px' } }>
      { !data ? loading() : numberScreen() }
    </div>
  );
}

export default Numbers;

// poderia criar um componente que recebe como props ou state global a url e o id
// assim, poderia economizar arquivos e codigo

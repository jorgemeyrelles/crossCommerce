import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
// import './Tables.css';

function Numbers() {
  const [data, setData] = useState(false);
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
          <tr>
            <th>Index</th>
            <th>Code number</th>
          </tr>
        </thead>
        <tbody>
          { data.map((e, i) => {
            return (
              <tr key={i}>
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

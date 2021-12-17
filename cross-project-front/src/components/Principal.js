import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function Principal() {
  const [login, setLogin] = useState(['random', 0]);
  const navigate = useNavigate();

  useEffect(() => {
    const randomNum = () => {
      const min = 1;
      const max = 10010;
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    setLogin(['random', randomNum()]);
  }, []);

  function handleChange(e) {
    console.log(e.target.value);
    setLogin([e.target.name, e.target.value]);
  };

  function submitBtn() {
    if (login[0] === 'select') return navigate(`/selected/${login[1]}`);
    if (login[0] === 'random') return navigate(`/random/${login[1]}`);
  }

  return (
    <main style={ { position: 'fixed', height: '100%', width: '100%', textAlign: '-webkit-center', zIndex: '99' } }>
      <form style={ { position: 'relative', top: '30%' } }>
        <h3>Choose a Specific Code Page</h3>
        <div>
          <input type="number" placeholder="Write a number" name="select" onChange={ handleChange } />
          <button type="submit" onClick={ () => submitBtn() }>Go</button>
        </div>
        <h3>Receive a code randomly</h3>
        <button type="button" onClick={ () => submitBtn() }>Random Code Page</button>
      </form>
    </main>
  );
}

export default Principal;
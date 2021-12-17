import React from 'react';

// import { Container } from './styles';

function Footer() {
  return (
    <footer style={ { position: 'fixed', bottom: '0', width: '100%', padding: '10px 0', textAlign: '-webkit-center', background: '#c1c1c1', boxShadow: 'inset 0 0 1em white, 0 0 1em black' } }>
      <div>Copyright©2021 - All rights reserved</div>
      <div>It was a tech test of the Cross Commerce</div>
      <div>By Jorge Meyrelles Jr.</div>
    </footer>
  );
}

export default Footer;
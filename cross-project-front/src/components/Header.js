import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const path = window.location.pathname.split('/');
  
  return (
    <nav>
      <div className='container-header'>
        <div
          style={ { cursor: 'pointer' } }
          role="button"
          onKeyPress={ () => navigate('/') }
          onClick={ () => navigate('/') }
          tabIndex="0"
        >
          <img src="https://icongr.am/simple/adobephonegap.svg?size=60&color=currentColor&colored=false" alt="icon page" />
        </div>
        { (path[1] === 'random') && <h2 style={ { position: 'relative', left: '10%'} }>Code Page { path[2] }</h2> }
        { (path[1] === 'selected') && <h2 style={ { position: 'relative', left: '10%'} }>Code Page { path[2] }</h2> }
        <div className='lateral-text'>Cross Commerce Project</div>
      </div>
    </nav>
  );
}

export default Header;
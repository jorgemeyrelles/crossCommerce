import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const path = window.location.pathname.split('/');
  
  return (
    <nav style={ { background: '#c1c1c1', position: 'fixed', top: '0', width: '100%', boxShadow: 'inset 0 0 1em white, 0 0 1em black' } }>
      <div style={ { display: 'flex', justifyContent: 'space-between', height: '70px', alignItems: 'center', margin: '0 30px' } }>
        <div
          style={ { cursor: 'pointer' } }
          role="button"
          onKeyPress={ () => navigate('/') }
          onClick={ () => navigate('/') }
          tabIndex="0"
        >
          <img src="https://icongr.am/simple/adobephonegap.svg?size=60&color=currentColor&colored=false" alt="icon page" />
        </div>
        { (path[1] === 'random') && <h2> Randomly From Code Page { path[2] }</h2> }
        { (path[1] === 'selected') && <h2> It's Choosed From Code Page { path[2] }</h2> }
        <div>Cross Commerce Project</div>
      </div>
    </nav>
  );
}

export default Header;
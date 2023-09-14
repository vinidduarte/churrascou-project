import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (<header className="only-header">
      <div className="header-items">
        <img
          className="logo-image"
          src="https://img.freepik.com/
    vetores-premium/vetor-de-design-de-logotipo-de-cabeca-de-vaca_179537-74.jpg?w=826"
          alt="logo"
        />
        <h2>CHURRASCOU</h2>
      </div>
            </header>);
  }
}

export default Header;
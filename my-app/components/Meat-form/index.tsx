import React from 'react';
import './meat-form.css';



class Meatform extends React.Component {
  render() {
    const { meatInfo: { name, image } } = this.props;
    return (
      <div className="meat-form">
        <form>
          <div className="meat-box">
            <h3>{name}</h3>
            <img className= "meat-image"src={image} alt="imagem-de-produto" />
            <input className='input-checkbox' type="checkbox" />
          </div>
        </form>
      </div>
    );
  }
}



export default Meatform;

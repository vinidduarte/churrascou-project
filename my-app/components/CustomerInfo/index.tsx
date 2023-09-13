import React from 'react';
import './CustomerInfo.css';
import Header from '../Header/index.tsx';

class CustomerInfo extends React.Component {
  render() {
    return (<>
      <Header />
      <div className="background-forms">
        <div className="question-form">
          <div className="background-img" />
          <div className="headliner"><h2>Para isso precisamos de algumas informações:</h2></div>
          <form>
            <div className="box">
              <h3 className="question">1.Quantos homens tem nesse churrasco?</h3>
              <input type="text" name="Homens" placeholder="Apenas números" />

            </div>
            <div className="box">
              <h3 className="question">2.Quantas Mulheres tem nesse churrasco?</h3>
              <input type="text" name="Mulheres" placeholder="Apenas números" />

            </div>
            <div className="box">
              <h3 className="question">3.Quantas Crianças tem nesse Churrasco?</h3>
              <input type="text" name="Crianças" placeholder="Apenas números" />

            </div>
          </form>

        </div>
        <div className="meat-form">
          <form>
            <h2 className="headliner">QUAIS CARNES VOCÊ VAI QUERER?</h2>
            <div className="meat-box">
              <h3>Picanha</h3>
              <img className="meat-images" src="https://receitasdolar.com/wp-content/uploads/2022/06/Picanha-1024x683.png" alt="picanha" />
              <input className="meat-checkbox" type="checkbox" />
            </div>
            <div className="meat-box" />
            <div className="meat-box" />
            <div className="meat-box" />
            <div className="meat-box" />
          </form>
        </div>
      </div>
    </>);
  }
}

export default CustomerInfo;

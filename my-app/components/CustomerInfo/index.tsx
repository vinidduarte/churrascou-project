import React from 'react';
import './CustomerInfo.css';
import Header from '../Header';
import items from './data';
import MeatformList from '../Meat-formList';

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
        <MeatformList data = { items } />
      </div>
    </>);
  }
}

export default CustomerInfo;

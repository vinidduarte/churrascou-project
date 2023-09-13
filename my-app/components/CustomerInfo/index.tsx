import React from 'react';
import './CustomerInfo.css';
import Header from '../Header/index.tsx';

class CustomerInfo extends React.Component {
  render() {
    return (<>
      <Header />
      <div className="calculator-image"><h2 className="text-image">ENTÃO BORA COMEÇAR OS TRABALHOS!!</h2></div>
      <div className="background-forms">
        <div className="question-form">
          <h2>Para isso precisamos de algumas informações:</h2>
          <form>
            <div className="box">
              <input type="text" name="Homens" />
              <label>Homens</label>
            </div>
            <div className="box">
              <input type="text" name="Mulheres" />
              <label>Mulheres</label>
            </div>
            <div className="box">
              <input type="text" name="Crianças" />
              <label>Crianças</label>
            </div>
            <div className="box">
              <input type="text" name="Comilões" />
              <label>Comilões</label>
            </div>

          </form>
        </div>
      </div>
    </>);
  }
}

export default CustomerInfo;

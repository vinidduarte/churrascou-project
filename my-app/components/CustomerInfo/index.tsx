import React, { useState } from 'react';
import './CustomerInfo.css';
import Header from '../Header';
import items from './data';
import MeatformList from '../Meat-formList';
import Footer from '../Footer';

type CheckboxState = Record<string, boolean>;

type Resultado = {
  totalCarneBovina: number;
  totalPicanhaSuina: number;
  totalLinguiça: number;
  totalAsinhaCoxinha: number;
  totalCoração: number;
  totalPaoDeAlho: number;
  totalFarofa: number;
  totalVinagrete: number;
  totalArroz: number;
  totalRefri: number;
  totalCerveja: number;
};

const comidaPorHomem: Record<string, number> = {
  'Carne-bovina': 360,
  'Picanha-suina': 180,
  Linguiça: 180,
  'Asinha-coxinha': 90,
  Coração: 90,
};

const comidaPorMulher: Record<string, number> = {
  'Carne-bovina': 280,
  'Picanha-suina': 140,
  Linguiça: 140,
  'Asinha-coxinha': 70,
  Coração: 70,
};

const comidaPorCrianca: Record<string, number> = {
  'Carne-bovina': 200,
  'Picanha-suina': 100,
  Linguiça: 100,
  'Asinha-coxinha': 50,
  Coração: 50,
};

const acompanhamentosPorHomem: Record<string, number> = {
  'Pão-de-alho': 2,
  Farofa: 100,
  Vinagrete: 70,
  Arroz: 100,
  Refri: 1000,
  Cerveja: 2000,
};

const acompanhamentosPorMulher: Record<string, number> = {
  'Pão-de-alho': 2,
  Farofa: 100,
  Vinagrete: 70,
  Arroz: 100,
  Refri: 800,
  Cerveja: 1000,
};

const acompanhamentosPorCrianca: Record<string, number> = {
  'Pão-de-alho': 2,
  Farofa: 100,
  Vinagrete: 70,
  Arroz: 100,
  Refri: 800,
  Cerveja: 0,
};

function CustomerInfo() {
  const [homensValue, setHomensValue] = useState<string>('');
  const [mulheresValue, setMulheresValue] = useState<string>('');
  const [criancasValue, setCriancasValue] = useState<string>('');
  const [checkboxState, setCheckboxState] = useState<CheckboxState>(
    Object.fromEntries(items.map((item) => [item.name, false])),
  );
  const [resultado, setResultado] = useState<Resultado>({
    totalCarneBovina: 0,
    totalPicanhaSuina: 0,
    totalLinguiça: 0,
    totalAsinhaCoxinha: 0,
    totalCoração: 0,
    totalPaoDeAlho: 0,
    totalFarofa: 0,
    totalVinagrete: 0,
    totalArroz: 0,
    totalRefri: 0,
    totalCerveja: 0,
  });

  const handleHomensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHomensValue(e.target.value);
  };

  const handleMulheresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMulheresValue(e.target.value);
  };

  const handleCriancasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriancasValue(e.target.value);
  };

  const handleCheckboxChange = (name: string) => {
    setCheckboxState({ ...checkboxState, [name]: !checkboxState[name] });
  };

  const calcularComida = () => {
    let totalCarneBovina = 0;
    let totalPicanhaSuina = 0;
    let totalLinguiça = 0;
    let totalAsinhaCoxinha = 0;
    let totalCoração = 0;
    let totalPaoDeAlho = 0;
    let totalFarofa = 0;
    let totalVinagrete = 0;
    let totalArroz = 0;
    let totalRefri = 0;
    let totalCerveja = 0;

    if (homensValue) {
      totalCarneBovina
        += parseInt(homensValue) * comidaPorHomem['Carne-bovina'] * (checkboxState['Carne-bovina'] ? 1 : 0);
      totalPicanhaSuina
        += parseInt(homensValue) * comidaPorHomem['Picanha-suina'] * (checkboxState['Picanha-suina'] ? 1 : 0);
      totalLinguiça
        += parseInt(homensValue) * comidaPorHomem['Linguiça'] * (checkboxState['Linguiça'] ? 1 : 0);
      totalAsinhaCoxinha
        += parseInt(homensValue) * comidaPorHomem['Asinha-coxinha'] * (checkboxState['Asinha-coxinha'] ? 1 : 0);
      totalCoração
        += parseInt(homensValue) * comidaPorHomem['Coração'] * (checkboxState['Coração'] ? 1 : 0);
      totalPaoDeAlho
        += parseInt(homensValue) * acompanhamentosPorHomem['Pão-de-alho'] * (checkboxState['Pão-de-alho'] ? 1 : 0);
      totalFarofa
        += parseInt(homensValue) * acompanhamentosPorHomem.Farofa * (checkboxState.Farofa ? 1 : 0);
      totalVinagrete
        += parseInt(homensValue) * acompanhamentosPorHomem.Vinagrete * (checkboxState.Vinagrete ? 1 : 0);
      totalArroz
        += parseInt(homensValue) * acompanhamentosPorHomem.Arroz * (checkboxState.Arroz ? 1 : 0);
      totalRefri
        += parseInt(homensValue) * acompanhamentosPorHomem.Refri * (checkboxState.Refri ? 1 : 0);
      totalCerveja
        += parseInt(homensValue) * acompanhamentosPorHomem.Cerveja * (checkboxState.Cerveja ? 1 : 0);
    }

    if (mulheresValue) {
      totalCarneBovina
        += parseInt(mulheresValue) * comidaPorMulher['Carne-bovina'] * (checkboxState['Carne-bovina'] ? 1 : 0);
      totalPicanhaSuina
        += parseInt(mulheresValue) * comidaPorMulher['Picanha-suina'] * (checkboxState['Picanha-suina'] ? 1 : 0);
      totalLinguiça
        += parseInt(mulheresValue) * comidaPorMulher['Linguiça'] * (checkboxState['Linguiça'] ? 1 : 0);
      totalAsinhaCoxinha
        += parseInt(mulheresValue) * comidaPorMulher['Asinha-coxinha'] * (checkboxState['Asinha-coxinha'] ? 1 : 0);
      totalCoração
        += parseInt(mulheresValue) * comidaPorMulher['Coração'] * (checkboxState['Coração'] ? 1 : 0);
      totalPaoDeAlho
        += parseInt(mulheresValue) * acompanhamentosPorMulher['Pão-de-alho'] * (checkboxState['Pão-de-alho'] ? 1 : 0);
      totalFarofa
        += parseInt(mulheresValue) * acompanhamentosPorMulher.Farofa * (checkboxState.Farofa ? 1 : 0);
      totalVinagrete
        += parseInt(mulheresValue) * acompanhamentosPorMulher.Vinagrete * (checkboxState.Vinagrete ? 1 : 0);
      totalArroz
        += parseInt(mulheresValue) * acompanhamentosPorMulher.Arroz * (checkboxState.Arroz ? 1 : 0);
      totalRefri
        += parseInt(mulheresValue) * acompanhamentosPorMulher.Refri * (checkboxState.Refri ? 1 : 0);
      totalCerveja
        += parseInt(mulheresValue) * acompanhamentosPorMulher.Cerveja * (checkboxState.Cerveja ? 1 : 0);
    }

    if (criancasValue) {
      totalCarneBovina
        += parseInt(criancasValue) * comidaPorCrianca['Carne-bovina'] * (checkboxState['Carne-bovina'] ? 1 : 0);
      totalPicanhaSuina
        += parseInt(criancasValue) * comidaPorCrianca['Picanha-suina'] * (checkboxState['Picanha-suina'] ? 1 : 0);
      totalLinguiça
        += parseInt(criancasValue) * comidaPorCrianca['Linguiça'] * (checkboxState['Linguiça'] ? 1 : 0);
      totalAsinhaCoxinha
        += parseInt(criancasValue) * comidaPorCrianca['Asinha-coxinha'] * (checkboxState['Asinha-coxinha'] ? 1 : 0);
      totalCoração
        += parseInt(criancasValue) * comidaPorCrianca['Coração'] * (checkboxState['Coração'] ? 1 : 0);
      totalPaoDeAlho
        += parseInt(criancasValue) * acompanhamentosPorCrianca['Pão-de-alho'] * (checkboxState['Pão-de-alho'] ? 1 : 0);
      totalFarofa
        += parseInt(criancasValue) * acompanhamentosPorCrianca.Farofa * (checkboxState.Farofa ? 1 : 0);
      totalVinagrete
        += parseInt(criancasValue) * acompanhamentosPorCrianca.Vinagrete * (checkboxState.Vinagrete ? 1 : 0);
      totalArroz
        += parseInt(criancasValue) * acompanhamentosPorCrianca.Arroz * (checkboxState.Arroz ? 1 : 0);
      totalRefri
        += parseInt(criancasValue) * acompanhamentosPorCrianca.Refri * (checkboxState.Refri ? 1 : 0);
      totalCerveja
        += parseInt(criancasValue) * acompanhamentosPorCrianca.Cerveja * (checkboxState.Cerveja ? 1 : 0);
    }

    setResultado({
      totalCarneBovina,
      totalPicanhaSuina,
      totalLinguiça,
      totalAsinhaCoxinha,
      totalCoração,
      totalPaoDeAlho,
      totalFarofa,
      totalVinagrete,
      totalArroz,
      totalRefri,
      totalCerveja,
    });
  };

  return (
    <>
      <Header />
      <div className="background-forms">
        <div className="question-form">
          <div className="background-img" />
          <div className="headliner">
            <h2>Para isso precisamos de algumas informações:</h2>
          </div>
          <form>
            <div className="box">
              <h3 className="question">1. Quantos homens têm nesse churrasco?</h3>
              <input
                type="text"
                value={ homensValue }
                onChange={ handleHomensChange }
                placeholder="Apenas números"
              />
            </div>
            <div className="box">
              <h3 className="question">2. Quantas mulheres têm nesse churrasco?</h3>
              <input
                type="text"
                value={ mulheresValue }
                onChange={ handleMulheresChange }
                placeholder="Apenas números"
              />
            </div>
            <div className="box">
              <h3 className="question">3. Quantas crianças têm nesse churrasco?</h3>
              <input
                type="text"
                value={ criancasValue }
                onChange={ handleCriancasChange }
                placeholder="Apenas números"
              />
            </div>
          </form>
        </div>
        <form action="">
          <div className="box">
            <MeatformList data={ items } checkboxState={ checkboxState } onCheckboxChange={ handleCheckboxChange } />
          </div>
        </form>
        <button className="button" onClick={ calcularComida }>Calcular</button>
        <div className="result-container">
          <h2>Resultado:</h2>
          <div className="result">
            <li>
              Total de Carne Bovina:
              {resultado.totalCarneBovina}
              g
            </li>
            <li>
              Total de Picanha Suína:
              {resultado.totalPicanhaSuina}
              g
            </li>
            <li>
              Total de Linguiça:
              {resultado.totalLinguiça}
              g
            </li>
            <li>
              Total de Asinha Coxinha:
              {resultado.totalAsinhaCoxinha}
              g
            </li>
            <li>
              Total de Coração:
              {resultado.totalCoração}
              g
            </li>
            <li>
              Total de Pão de Alho:
              {resultado.totalPaoDeAlho}
              g
            </li>
            <li>
              Total de Farofa:
              {resultado.totalFarofa}
              g
            </li>
            <li>
              Total de Vinagrete:
              {resultado.totalVinagrete}
              g
            </li>
            <li>
              Total de Arroz:
              {resultado.totalArroz}
              g
            </li>
            <li>
              Total de Refrigerante:
              {resultado.totalRefri}
              ml
            </li>
            <li>
              Total de Cerveja:
              {resultado.totalCerveja}
              ml
            </li>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CustomerInfo;

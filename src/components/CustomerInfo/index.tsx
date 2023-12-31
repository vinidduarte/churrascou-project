import { useState } from 'react';
import './CustomerInfo.css';
import Header from '../Header';
import items from './data';
import MeatformList from '../Meat-formList';
import Footer from '../Footer';

type CheckboxState = Record<string, boolean>;

type Resultado = {
  carnes: Record<string, number>;
  acompanhamentos: Record<string, number>;
  totalRefri: number;
  totalCerveja: number;
};

const prioridadesCarnes: string[] = [
  'Carne-bovina',
  'Picanha-suina',
  'Linguiça',
  'Asinha-coxinha',
  'Coração',
];

const prioridadesAcompanhamentos: string[] = ['Arroz', 'Farofa', 'Pão-de-alho', 'Vinagrete'];

function CustomerInfo() {
  const [homensValue, setHomensValue] = useState<string>('');
  const [mulheresValue, setMulheresValue] = useState<string>('');
  const [criancasValue, setCriancasValue] = useState<string>('');
  const [checkboxStateCarnes, setCheckboxStateCarnes] = useState<CheckboxState>(
    Object.fromEntries(prioridadesCarnes.map((item) => [item, false]))
  );
  const [checkboxStateAcompanhamentos, setCheckboxStateAcompanhamentos] = useState<CheckboxState>(
    Object.fromEntries(prioridadesAcompanhamentos.map((item) => [item, false]))
  );
  const [checkboxStateBebidas, setCheckboxStateBebidas] = useState<CheckboxState>(
    Object.fromEntries(items.filter((item) => item.category === 'Bebida').map((item) => [item.name, false]))
  );

  const [resultado, setResultado] = useState<Resultado>({
    carnes: Object.fromEntries(prioridadesCarnes.map((item) => [item, 0])),
    acompanhamentos: Object.fromEntries(prioridadesAcompanhamentos.map((item) => [item, 0])),
    totalRefri: 0,
    totalCerveja: 0,
  });

  const calcularComida = () => {
    const totalHomens = parseInt(homensValue, 10);
    const totalMulheres = parseInt(mulheresValue, 10);
    const totalCriancas = parseInt(criancasValue, 10);
    const totalPessoas = totalHomens + totalMulheres + totalCriancas;

    const totalCarnePorPessoa = 500;
    const totalCarnePorMulher = 400;
    const totalCarnePorCrianca = 250;

    const totalAcompanhamentosPorPessoa = 300;
    const totalAcompanhamentosPorMulher = 250;
    const totalAcompanhamentosPorCrianca = 250;

    const carnesSelecionadas = prioridadesCarnes.filter((item) => checkboxStateCarnes[item]);
    const acompanhamentosSelecionados = prioridadesAcompanhamentos.filter((item) => checkboxStateAcompanhamentos[item]);
    const totalCarnesSelecionadas = carnesSelecionadas.length;
    const totalAcompanhamentosSelecionados = acompanhamentosSelecionados.length;

    const pontosCarnes: Record<string, number> = {};
    const pontosAcompanhamentos: Record<string, number> = {};
    carnesSelecionadas.forEach((carne, index) => {
      pontosCarnes[carne] = totalCarnesSelecionadas - index;
    });
    acompanhamentosSelecionados.forEach((acompanhamento, index) => {
      pontosAcompanhamentos[acompanhamento] = totalAcompanhamentosSelecionados - index;
    });


    const totalCarneDistribuida = totalCarnePorPessoa * totalHomens
      + totalCarnePorMulher * totalMulheres
      + totalCarnePorCrianca * totalCriancas;
    const carnePorPonto = totalCarneDistribuida / Object.values(pontosCarnes).reduce((a, b) => a + b, 0);


    const totalAcompanhamentosDistribuidos = totalAcompanhamentosPorPessoa * totalHomens
      + totalAcompanhamentosPorMulher * totalMulheres
      + totalAcompanhamentosPorCrianca * totalCriancas;
    const acompanhamentoPorPonto = totalAcompanhamentosDistribuidos / Object.values(pontosAcompanhamentos).reduce((a, b) => a + b, 0);

    for (const carne in pontosCarnes) {
      resultado.carnes[carne] = Math.round(pontosCarnes[carne] * carnePorPonto);
    }

    for (const acompanhamento in pontosAcompanhamentos) {
      if (acompanhamento === 'Pão-de-alho') {
        resultado.acompanhamentos[acompanhamento] = Math.round(acompanhamentoPorPonto / 80);
      } else {
        resultado.acompanhamentos[acompanhamento] = Math.round(
          pontosAcompanhamentos[acompanhamento] * acompanhamentoPorPonto,
        );
      }
    }


    const totalRefrigerantePorPessoa = 700; // mL por pessoa
    const totalCervejaPorPessoa = 700; // mL por pessoa
    const totalRefrigerante = checkboxStateBebidas['Refrigerante'] ? (totalRefrigerantePorPessoa * totalPessoas) : 0;
    const totalCerveja = checkboxStateBebidas['Cerveja'] ? (totalCervejaPorPessoa * (totalHomens + totalMulheres)) : 0;

    setResultado({
      ...resultado,
      totalRefri: totalRefrigerante,
      totalCerveja: totalCerveja,
    });
  };


  const limparDados = () => {
    setHomensValue('');
    setMulheresValue('');
    setCriancasValue('');

    setCheckboxStateCarnes(
      Object.fromEntries(prioridadesCarnes.map((item) => [item, false]))
    );

    setCheckboxStateAcompanhamentos(
      Object.fromEntries(prioridadesAcompanhamentos.map((item) => [item, false]))
    );

    setCheckboxStateBebidas(
      Object.fromEntries(items.filter((item) => item.category === 'Bebida').map((item) => [item.name, false]))
    );

    setResultado({
      carnes: Object.fromEntries(prioridadesCarnes.map((item) => [item, 0])),
      acompanhamentos: Object.fromEntries(prioridadesAcompanhamentos.map((item) => [item, 0])),
      totalRefri: 0,
      totalCerveja: 0,
    });
  };

  return (
    <>
      <Header />
      <div className="background-forms">
        <div className="question-form">
          <h2>Quantas pessoas vão ao churrasco?</h2>
          <div className="input-container">
            <label htmlFor="homens">Homens:</label>
            <input
              type="number"
              id="homens"
              value={homensValue}
              onChange={(e) => setHomensValue(e.target.value)}
              placeholder="Em caso de nenhum, coloque 0"
            />
          </div>
          <div className="input-container">
            <label htmlFor="mulheres">Mulheres:</label>
            <input
              type="number"
              id="mulheres"
              value={mulheresValue}
              onChange={(e) => setMulheresValue(e.target.value)}
              placeholder="Em caso de nenhum, coloque 0"
            />
          </div>
          <div className="input-container">
            <label htmlFor="criancas">Crianças:</label>
            <input
              type="number"
              id="criancas"
              value={criancasValue}
              onChange={(e) => setCriancasValue(e.target.value)}
              placeholder="Em caso de nenhum, coloque 0"
            />
          </div>
        </div>
        <div className="meatform-container">
          <h2 className="headliner">Quais carnes você vai servir?</h2>
          <MeatformList
            data={items.filter((item) => prioridadesCarnes.includes(item.name))}
            checkboxState={checkboxStateCarnes}
            onCheckboxChange={(name) => {
              const newCheckboxState = { ...checkboxStateCarnes };
              newCheckboxState[name] = !newCheckboxState[name];
              setCheckboxStateCarnes(newCheckboxState);
            }}
          />
        </div>
        <div className="meatform-container">
          <h2 className="headliner">Quais acompanhamentos você vai servir?</h2>
          <MeatformList
            data={items.filter((item) => prioridadesAcompanhamentos.includes(item.name))}
            checkboxState={checkboxStateAcompanhamentos}
            onCheckboxChange={(name) => {
              const newCheckboxState = { ...checkboxStateAcompanhamentos };
              newCheckboxState[name] = !newCheckboxState[name];
              setCheckboxStateAcompanhamentos(newCheckboxState);
            }}
          />
        </div>
        <div className="meatform-container">
          <h2 className="headliner">Quais bebidas você vai servir?</h2>
          <MeatformList
            data={items.filter((item) => item.category === 'Bebida')}
            checkboxState={checkboxStateBebidas}
            onCheckboxChange={(name) => {
              const newCheckboxState = { ...checkboxStateBebidas };
              newCheckboxState[name] = !newCheckboxState[name];
              setCheckboxStateBebidas(newCheckboxState);
            }}
          />
        </div>
        <div className="button-container">
          <button className="button" onClick={calcularComida}>
            Calcular
          </button>
          <button className="button" onClick={limparDados}>
            Limpar
          </button>
        </div>
      </div>
      <div className="result">
        <h2 className="headliner">Resultado:</h2>
        <ul>
          {prioridadesCarnes.map((item) => (
            <li key={item}>
              {item}
              : {resultado.carnes[item]} g
            </li>
          ))}
          {prioridadesAcompanhamentos.map((item) => (
            <li key={item}>
              {item}
              : {resultado.acompanhamentos[item]}
              {item === 'Pão-de-alho' ? ' unid' : 'g'}
            </li>
          ))}
          <li>
            Total de Refrigerante: {resultado.totalRefri} ml
          </li>
          <li>
            Total de Cerveja: {resultado.totalCerveja} ml
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default CustomerInfo;

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
  const [resultado, setResultado] = useState<Resultado>({
    carnes: Object.fromEntries(prioridadesCarnes.map((item) => [item, 0])),
    acompanhamentos: Object.fromEntries(prioridadesAcompanhamentos.map((item) => [item, 0])),
    totalRefri: 0,
    totalCerveja: 0,
  });

  const calcularComida = () => {
    const totalHomens = parseInt(homensValue);
    const totalMulheres = parseInt(mulheresValue);
    const totalCriancas = parseInt(criancasValue);
    const totalPessoas = totalHomens + totalMulheres + totalCriancas;

    let totalCarnePorPessoa = 500; // 500g de carne por homem
    let totalCarnePorMulher = 400; // 400g de carne por mulher
    let totalCarnePorCrianca = 250; // 250g de carne por criança

    let totalAcompanhamentosPorPessoa = 300; // 300g de acompanhamentos por pessoa
    let totalAcompanhamentosPorMulher = 250; // 250g de acompanhamentos por mulher
    let totalAcompanhamentosPorCrianca = 250; // 250g de acompanhamentos por criança

    // Calcular a quantidade total de carne e acompanhamentos selecionados
    const carnesSelecionadas = prioridadesCarnes.filter((item) => checkboxStateCarnes[item]);
    const acompanhamentosSelecionados = prioridadesAcompanhamentos.filter((item) => checkboxStateAcompanhamentos[item]);
    const totalCarnesSelecionadas = carnesSelecionadas.length;
    const totalAcompanhamentosSelecionados = acompanhamentosSelecionados.length;

    // Calcular a quantidade total de pontos para as carnes e acompanhamentos selecionados
    const pontosCarnes: Record<string, number> = {};
    const pontosAcompanhamentos: Record<string, number> = {};
    carnesSelecionadas.forEach((carne, index) => {
      pontosCarnes[carne] = totalCarnesSelecionadas - index;
    });
    acompanhamentosSelecionados.forEach((acompanhamento, index) => {
      pontosAcompanhamentos[acompanhamento] = totalAcompanhamentosSelecionados - index;
    });

    // Distribuir a quantidade de carne por pessoa com base nos pontos
    const totalCarneDistribuida = totalCarnePorPessoa * totalHomens;
    const carnePorPonto = totalCarneDistribuida / Object.values(pontosCarnes).reduce((a, b) => a + b, 0);

    // Distribuir a quantidade de carne por mulher com base nos pontos
    const totalCarneMulherDistribuida = totalCarnePorMulher * totalMulheres;
    const carnePorMulherPonto = totalCarneMulherDistribuida / Object.values(pontosCarnes).reduce((a, b) => a + b, 0);

    // Distribuir a quantidade de carne por criança com base nos pontos
    const totalCarneCriancaDistribuida = totalCarnePorCrianca * totalCriancas;
    const carnePorCriancaPonto = totalCarneCriancaDistribuida / Object.values(pontosCarnes).reduce((a, b) => a + b, 0);

    for (const carne in pontosCarnes) {
      resultado.carnes[carne] = Math.round(pontosCarnes[carne] * carnePorPonto);
    }

    // Distribuir a quantidade de acompanhamentos por pessoa com base nos pontos
    const totalAcompanhamentosDistribuidos = totalAcompanhamentosPorPessoa * totalHomens;
    const acompanhamentoPorPonto =
      totalAcompanhamentosDistribuidos / Object.values(pontosAcompanhamentos).reduce((a, b) => a + b, 0);

    // Distribuir a quantidade de acompanhamentos por mulher com base nos pontos
    const totalAcompanhamentosMulherDistribuidos = totalAcompanhamentosPorMulher * totalMulheres;
    const acompanhamentoPorMulherPonto =
      totalAcompanhamentosMulherDistribuidos / Object.values(pontosAcompanhamentos).reduce((a, b) => a + b, 0);

    // Distribuir a quantidade de acompanhamentos por criança com base nos pontos
    const totalAcompanhamentosCriancaDistribuidos = totalAcompanhamentosPorCrianca * totalCriancas;
    const acompanhamentoPorCriancaPonto =
      totalAcompanhamentosCriancaDistribuidos / Object.values(pontosAcompanhamentos).reduce((a, b) => a + b, 0);

    for (const acompanhamento in pontosAcompanhamentos) {
      if (acompanhamento === 'Pão-de-alho') {
        resultado.acompanhamentos[acompanhamento] = Math.round(acompanhamentoPorPonto / 80); // 80g = 1 unidade
      } else {
        resultado.acompanhamentos[acompanhamento] = Math.round(pontosAcompanhamentos[acompanhamento] * acompanhamentoPorPonto);
      }
    }

    // Restante do código permanece igual
    // ...

    setResultado({ ...resultado });
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
            <label>Homens:</label>
            <input type="number" value={homensValue} onChange={(e) => setHomensValue(e.target.value)} />
          </div>
          <div className="input-container">
            <label>Mulheres:</label>
            <input type="number" value={mulheresValue} onChange={(e) => setMulheresValue(e.target.value)} />
          </div>
          <div className="input-container">
            <label>Crianças:</label>
            <input type="number" value={criancasValue} onChange={(e) => setCriancasValue(e.target.value)} />
          </div>
        </div>
        <div className="meatform-container">
          <h2 className='headliner'>Quais carnes você vai servir?</h2>
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
          <h2 className='headliner'>Quais acompanhamentos você vai servir?</h2>
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
        <div className="button-container">
          <button className='button'onClick={calcularComida}>Calcular</button>
          <button className='button'onClick={limparDados}>Limpar</button>
        </div>
      </div>
      <div className="result">
        <h2 className='headliner'>Resultado:</h2>
        <ul>
          {prioridadesCarnes.map((item) => (
            <li key={item}>
              {item}: {resultado.carnes[item]}g
            </li>
          ))}
          {prioridadesAcompanhamentos.map((item) => (
            <li key={item}>
              {item}: {resultado.acompanhamentos[item]}{item === 'Pão-de-alho' ? ' unid' : 'g'}
            </li>
          ))}
          <li>Total de Refrigerante: {resultado.totalRefri}ml</li>
          <li>Total de Cerveja: {resultado.totalCerveja}ml</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default CustomerInfo;


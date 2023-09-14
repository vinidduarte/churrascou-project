import React from 'react';
import Meatform from '../Meat-form';
import './meat-formList.css';


 class MeatformList extends React.Component{
    render()    {
        const { data } = this.props; 

        return (<><div className='meat-container'>
            <h2 className='meat-title'>QUAIS ITENS VÃO TER NO SEU CHURRASCO?</h2>
            <div className='meat-items'>
                {data.map(item => <Meatform meatInfo = {item}/>)}
            </div>
            <button>Calcular</button></div></>
        )
 }}

 export default MeatformList;

import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import Installments from './components/Installments'
import Installment from './components/Installment';
import { formatNumber } from './components/Helpers/FormatHelper'

export default function App() {
  const [montante, setValorMontante] = useState(0);
  const [valorTaxaJuros, setValorTaxaJuros] = useState(0);
  const [periodo, setPeriodo] = useState(1);
  const [listaParcelas, setListaParcelas] = useState([]);
  const [valores, setValores] = useState([]);
  const listaValores = [];

  useEffect(() => {

    const calcularJuros = () => {
      for (let i = 1; i <= valores.periodo; i++) {
        
        let valorPorcentagem = (parseFloat(valores.montante) * parseFloat(valores.valorTaxaJuros)) / 100;
        valores.montante = (parseFloat(valores.montante) + valorPorcentagem);
        let valorAumentoPorMes = (valores.montante - montante);
        let valorCorrespondenteAPorcentagem =  (valorAumentoPorMes * 100) / montante;
        console.log(valorPorcentagem)
        listaValores.push({
          valorInicial: valores.montante.toFixed(2),
          valorResultante: valorAumentoPorMes.toFixed(2),
          taxaJuros: valorCorrespondenteAPorcentagem.toFixed(2),
          periodo: i
        })
      }
    }
  
    setListaParcelas(listaValores);

    calcularJuros();
  }, [montante, valorTaxaJuros, periodo])


  const onChangeValues = (valores) => {
    setValores(valores);
    setValorMontante(valores.montante);
    setValorTaxaJuros(valores.valorTaxaJuros);
    setPeriodo(valores.periodo);
  }

  return (
    <div className="container center">
      <h1>React - Juros Compostos</h1>
      <Forms
        onChangeValues={onChangeValues}
        montante={montante}
        valorTaxaJuros={valorTaxaJuros}
        periodo={periodo}
      />
      <Installments>
        <Installment
          listaParcelas={listaParcelas}
        />
      </Installments>
    </div>
  );

}

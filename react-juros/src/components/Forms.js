import React from 'react'
import css from './forms.module.css'
export default function Forms({ onChangeValues, montante, valorTaxaJuros, periodo }) {

    function handleChangeValorMontante(event) {
        const valores = ({
            montante: event.target.value,
            valorTaxaJuros: valorTaxaJuros,
            periodo: periodo
        });
        onChangeValues(valores);
    }

    function handleChangeTaxaJuros(event) {
        const valores = ({
            montante: montante,
            valorTaxaJuros: event.target.value,
            periodo: periodo
        });
        onChangeValues(valores);
    }

    function handleChangePeriodo(event) {
        const valores = ({
            montante: montante,
            valorTaxaJuros: valorTaxaJuros,
            periodo: event.target.value
        });
        onChangeValues(valores);
    }

    return (
        <div className={css.inputs}>
            <div className={css.input}>
                <label>Montante inicial</label>
                <input type="number" onChange={handleChangeValorMontante} value={montante} />
            </div>
            <div className={css.input}>
                <label>Taxa de Juros Mensal</label>
                <input type="number" onChange={handleChangeTaxaJuros} value={valorTaxaJuros} />
            </div>
            <div className={css.input}>
                <label>Período (meses)</label>
                <input type="number" min="1" max="12" onChange={handleChangePeriodo} value={periodo} />
            </div>
        </div>
    )
}

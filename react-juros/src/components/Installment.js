import React from 'react'
import css from './installments.module.css';

export default function Installment({ listaParcelas }) {

    return (
        <div className={css.flexRow}>
            {
                listaParcelas.map(parcela => {
                    return (
                        <div className={css.card}>
                            <div>
                                <span className={css.font}>{parcela.periodo}</span>
                            </div>
                            <ul>
                                <div className={parcela.valorInicial < 0 || parcela.valorTaxaJuros < 0 ? css.fontRed : css.fontGreen}>
                                    <li> R$ {parcela.valorInicial}</li>
                                    <li> R$ {parcela.valorResultante}</li>
                                </div>
                                <li>{parcela.taxaJuros} %</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

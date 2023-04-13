import React, { useState, useEffect } from "react";

import "./IncomeDisplayer.scss";

/** An element that is responsible in showing some amount of monthly income.
 * @param {Object} properties The properties of the element.
 * @param {Number} properties.incomeAmount The amount of income that'll be displayed in the Income Displayer.
 * @param {Number} properties.profitPercentage The percentage in which a profit will be displayed in the Income Displayer.
 * @returns A Income Displayer element. 
 */
export default function IncomeDisplayer({
    incomeAmount = 0,
    profitPercentage = 0,
}) {
    profitPercentage =
        Number.parseFloat(profitPercentage.toString().slice(undefined, 4));

    return (
        <div className="income-displayer">
            <h1>{`$${incomeAmount.toLocaleString()}`}</h1>

            <section className="observable">
                <div className={`profit-displayer ${profitPercentage >= 0 ? 'positive' : 'negative'}`}>
                    {profitPercentage > 0 && '+'}{`${profitPercentage}%`}
                </div>

                <p>This month</p>
            </section>
        </div>
    );
}
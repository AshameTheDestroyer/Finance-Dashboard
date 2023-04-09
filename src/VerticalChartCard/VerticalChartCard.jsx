import React, { useState, useEffect } from "react";

import "./VerticalChartCard.scss";

/** An element that is responsible in showing statistics throughout a vertical chart card.
 * @param {Object} properties The properties of the element.
 * @param {Array<Number>} properties.data An array of values that'll be displayed in the Vertical Chart Card element.
 * @returns A Vertical Chart Card element. 
 */
export default function VerticalChartCard({
    data = [],
}) {
    const MULTIPLY_TO_ONE_HUNDRED = 10;

    return (
        <div className="bottom-chart-card vertical-chart-card">
            {
                Array(3).fill(null)
                    .map((_, i) =>
                        <div content={i * 5 + "K"} style={{ "--index": i }} key={i} />)
            }

            {
                data.map((datum, i) =>
                    <figure
                        month={new Date(2000, i).
                            toDateString().substring(4, 7)}
                        style={{
                            "--height": datum * MULTIPLY_TO_ONE_HUNDRED + "%"
                        }} key={i} />)
            }
        </div>
    );
}
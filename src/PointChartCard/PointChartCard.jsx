import React, { useState, useEffect } from "react";

import "./PointChartCard.scss";

/** An element that is responsible in showing statistics throughout a point chart card.
 * @param {Object} properties The properties of the element.
 * @param {Array<Number>} properties.data An array of values that'll be displayed in the Point Chart Card element.
 * @returns A Point Chart Card element. 
 */
export default function PointChartCard({
    data = [],
}) {
    let path = data
        .reduce((accumlator, next, i) =>
            accumlator + ` L ${i * 100 / (data.length - 2)} ${next * 10}`, "");

    return (
        <div className="bottom-chart-card point-chart-card observable">
            <svg viewBox="0 0 100 100">
                <path d={`M -100 100 ${path} L 200 100`} />

                <path className="fill-path" d={`M -100 -100 ${path} L 200 -100`} />
                {
                    data.slice(0, data.length - 1)
                        .map((datum, i) =>
                            <circle
                                cx={`${i * 100 / (data.length - 2)}px`}
                                cy={`${datum * 10}px`}
                                r="2.5px" key={i} />)
                }
            </svg>
        </div>
    );
}
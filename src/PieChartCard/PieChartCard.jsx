import React, { useState, useEffect } from "react";

import "./PieChartCard.scss";

/** An element that is responsible in showing statistics throughout a pie chart card.
 * @param {Object} properties The properties of the element.
 * @param {Number} properties.size The size of the Pie Chart in the Pie Chart Card element, (measured in pixels).
 * @param {Number} properties.thickness The thickness of the Pie Chart line in the Pie Chart Card element, (measured in pixels).
 * @param {Array<{
 *      percentage: Number,
 *      colour: String,
 *      title: String,
 * }>} properties.data An array of values that'll be displayed in the Pie Chart Card element.
 * @returns A Pie Chart Card element.
 */
export default function PieChartCard({
    size = 70,
    thickness = 25,
    data = [],
}) {
    return (
        <div className="pie-chart-card">
            <figure className="pie-chart-displayer observable">
                <svg style={{
                    "--width": size * 2 + "px",
                    "--stroke-width": thickness + "px",
                }}>
                    {
                        data.map((_, i) =>
                            <PieChartPiece size={size} data={data} index={i} key={i} />)
                    }
                </svg>

                <div className="focal-percentage-displayer">
                    <p>100%</p>
                    <p>Data Managed</p>
                </div>
            </figure>

            <main>
                {
                    data.map((datum, i) =>
                        <PercentageDisplayer {...datum} key={i} />
                    )
                }
            </main>
        </div>
    );
}

const
    MAXIMUM_ROTATION_DEGREE = 360,
    MAXIMUM_PERCENTAGE = 100,
    BIG_FINANCE_NUMBER = 100000;

/** A pie chart piece to be put in the Pie Chart Card element.
 * @param {Object} properties The properties of the element.
 * @param {Number} properties.size The size of the Pie Chart Piece in the Pie Chart Card element, (measured in pixels)..
 * @param {Array<{
 *      percentage: Number,
 *      colour: String,
 *      title: String,
 * }>} properties.data An array of values that'll be displayed in the Pie Chart Card element.
 * @param {Number} properties.index The index in which the Pie Chart Piece is drawn in the Pie Chart Card element.
 * @returns A Pie Chart Piece element.
 */
function PieChartPiece({
    size,
    data = [],
    index,
}) {
    let offset = data
        .slice(index + 1)
        .reduce((accumlator, next) => accumlator + next.percentage, 0)
        * MAXIMUM_ROTATION_DEGREE / MAXIMUM_PERCENTAGE;

    return (
        <circle cx={size + "px"} cy={size + "px"} r={size + "px"} style={{
            "--percentage": data[index].percentage,
            "--colour": data[index].colour,
            "transform": `rotate(${offset}deg)`,
        }} />
    );
}

/** An element that displays a percentage in the Pie Chart Card element.
 * @param {Object} properties The properties of the element.
 * @param {Number} properties.percentage The percentage of the Percentage Displayer element.
 * @param {String} properties.colour The colour of the Percentage Displayer element.
 * @param {String} properties.title The title of the Percentage Displayer element.
 * @returns A Percentage Displayer element.
 */
function PercentageDisplayer({
    percentage,
    colour,
    title,
}) {
    let percentageFloored =
        Number.parseFloat(percentage.toString().slice(undefined, 4));

    let bigFinanceNumber =
        Number.parseFloat((percentageFloored * BIG_FINANCE_NUMBER / MAXIMUM_PERCENTAGE)
            .toString().slice(undefined, 5));

    return (
        <div className="percentage-displayer" style={{
            "--colour": colour,
        }}>
            <p>{`${title} (${percentageFloored}%)`}</p>
            <h3>{`$${bigFinanceNumber}.000`}</h3>
        </div>
    );
}
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

    const GetMonth = (i = 0) =>
        new Date(2000, i)
            .toDateString().substring(4, 7);

    return (
        <div className="bottom-chart-card vertical-chart-card observable">
            <HeightPeaks />

            {
                data.map((datum, i) =>
                    <figure month={GetMonth(i)} key={i}
                        style={{ "--height": datum * MULTIPLY_TO_ONE_HUNDRED + "%" }} />)
            }
        </div>
    );
}

/** The peaks that refer to heights that the chart is representing.
 * @returns A Height Peaks element.
 */
function HeightPeaks() {
    return (
        <>
            {
                Array(3).fill(null)
                    .map((_, i) =>
                        <div content={i * 5 + "K"} style={{ "--index": i }} key={i} />)
            }
        </>
    );
}
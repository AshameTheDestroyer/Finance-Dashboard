import React, { useState, useEffect } from "react";

import PieChartCard from "../PieChartCard/PieChartCard";
import VerticalChartCard from "../VerticalChartCard/VerticalChartCard";
import PointChartCard from "../PointChartCard/PointChartCard";
import IncomeDisplayer from "../IncomeDisplayer/IncomeDisplayer";

import {
    PIE_CHART_DATA,
    INCOME_VALUES,
    VERTICAL_CHART_DATA,
    POINT_CHART_DATA
} from "../DataGenerator/DataGenerator";

import "./MainSection.scss";

/** The main content of the page.
 * @returns A Main element.
 */
export default function Main() {
    return (
        <main id="main-section">
            <WelcomeSection />
            <CardDisplayer />
        </main>
    );
}

/** The section that welcomes the user in the page.
 * @returns A Welcome Section element.
 */
function WelcomeSection() {
    return (
        <section id="welcome-section">
            <div id="news-displayer">The latest update is coming off soon!</div>

            <h1>With our help managing your finances will be a piece of cake</h1>

            <p>
                Beautiful day to take care of your financial tasks,
                isn't it? why then not checking out all the features
                that we provied to help you out?
            </p>

            <section className="button-displayer">
                <button className="emphasized-button">Get started</button>
                <button>Learn more</button>
            </section>

            <footer>
                <Visualizer title="Downloads" />
                <Visualizer title="Teamups" isThousand={false} />
                <Visualizer title="Users" />
            </footer>
        </section>
    );
}

/** The section that displays the cards of statistics in the page.
 * @returns A Card Displayer element.
 */
function CardDisplayer() {
    return (
        <section id="card-displayer">
            <Card title="Expense Pie Chart">
                <PieChartCard data={PIE_CHART_DATA} />
            </Card>

            <Card title="Income Overview">
                <IncomeDisplayer {...INCOME_VALUES[0]} />
                <VerticalChartCard data={VERTICAL_CHART_DATA} />
            </Card>

            <Card title="Profit Visualizer">
                <IncomeDisplayer {...INCOME_VALUES[1]} />
                <PointChartCard data={POINT_CHART_DATA} />
            </Card>
        </section>
    );
}

/** A displayer of a card element.
 * @param {Object} properties The properties of the element.
 * @param {Object} properties.children The children of the Card element.
 * @param {String} properties.title The title of the Card element.
 * @returns A Card element.
 */
function Card({
    children,
    title,
}) {
    return (
        <div className="card">
            <h4>
                <p>{title}</p>
                <button title="Click for more information.">i</button>
            </h4>
            <main>{children}</main>
        </div>
    );
}

const MAXIMUM_VISUALIZER_VALUE = 1000;

/** An element that visualizes some counter with a title.
 * @param {Object} properties The properties of the element. 
 * @param {String} properties.title The title of the Visualizer.
 * @param {Boolean} properties.isThousand Determines whether or not the number written is in thousands.
 * @returns A Visualizer element.
 */
function Visualizer({
    title,
    isThousand = true,
}) {
    return (
        <div className="visualizer">
            <h2>{~~(Math.max(Math.random(), 0.1) * MAXIMUM_VISUALIZER_VALUE)}{isThousand && "K"}</h2>
            <p>{title}</p>
        </div>
    );
}
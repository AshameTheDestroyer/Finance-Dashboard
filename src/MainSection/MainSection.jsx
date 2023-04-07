import React, { useState, useEffect } from "react";

import "./MainSection.scss";
import PieChartCard from "../PieChartCard/PieChartCard";

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

            <footer className="button-displayer">
                <button className="emphasized-button">Get started</button>
                <button>Learn more</button>
            </footer>
        </section>
    );
}

const PROGRESS_VALUES = GenerateProgressValues([
    { percentage: 0, colour: "#ff3131", title: "Taxes" },
    { percentage: 0, colour: "#00D647", title: "Income" },
    { percentage: 0, colour: "#1c3cf1", title: "Loss" },
    { percentage: 0, colour: "#ff891b", title: "Others" },
]);

/** Generate some random progress values.
 * @param {Array<{
 *      percentage: Number,
 *      colour: String,
 *      title: String,
 * }>} initialProgressValues The initial values that'll be used to generate random ones.
 * @returns 
 */
function GenerateProgressValues(initialProgressValues) {
    let maximumPercentage = 100,
        maximumValue = maximumPercentage / 2,
        currentMaximumPercentage = maximumPercentage;

    currentMaximumPercentage = maximumPercentage;

    initialProgressValues = initialProgressValues.map((progressValue, i) => {
        const GeneratePercentage = () => {
            let percentage = 0;

            do { percentage = Math.random() * currentMaximumPercentage; }
            while (percentage >= maximumValue);

            return percentage;
        };

        let percentage = i == initialProgressValues.length - 1 ?
            currentMaximumPercentage : GeneratePercentage();

        currentMaximumPercentage -= percentage;

        return {
            ...progressValue,
            percentage: percentage,
        };
    });

    return initialProgressValues.sort((_, __) => 0.5 - Math.random());
}

/** The section that displays the cards of statistics in the page.
 * @returns A Card Displayer element.
 */
function CardDisplayer() {
    return (
        <section id="card-displayer">
            <Card title="Expense Category">
                <PieChartCard progressValues={PROGRESS_VALUES} />
            </Card>

            <Card title="Income Analysis"></Card>

            <Card title="Expense Analysis"></Card>
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
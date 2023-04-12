import React, { useState, useEffect } from "react";

import LinkButton from "../LinkButton/LinkButton";

import "./Footer.scss";

/** The footer of the website.
 * @returns A Footer element.
 */
export default function Footer() {
    return (
        <footer>
            <section>
                <h3 className="logo">Finance Dashboard</h3>

                <h4>The best financial website out there</h4>

                <p>
                    @2023 Hashem's website,<br />
                    All rights reserved.
                </p>
            </section>

            <section>
                <h4>Statistics</h4>

                <LinkButton text="News" href="#news-displayer" />
                <LinkButton text="Get started" href="#get-started-button" />
                <LinkButton text="Expense" href="#expense-pie-chart" />
                <LinkButton text="Income" href="#income-overview" />
                <LinkButton text="Profit" href="#profit-visualizer" />
            </section>


            <section>
                <h4>Products</h4>

                <LinkButton text="Free use" href="#free-use-plan-displayer" />
                <LinkButton text="Committed" href="#committed-plan-displayer" />
                <LinkButton text="Dedicated" href="#dedicated-plan-displayer" />
            </section>

            <section>
                <h4>Support</h4>

                <LinkButton text="Support us" href="#support-us-button" />
                <LinkButton text="Individuals" href="#individual-displayer" />
            </section>


            <section>
                <h4>Resources</h4>

                <LinkButton text="Elon's tweet" href="#elon-musk-thanking-section" />
                <LinkButton text="Questions" href="#question-displayer" />
            </section>

            <section id="social-media-link-displayer">
                <h4>Social Media</h4>

                <LinkButton id="github-link-button" target="blank_"
                    text="GitHub" href="https://www.github.com/AshameTheDestroyer">
                    <figure />
                </LinkButton>

                <LinkButton id="linkedin-link-button" target="blank_"
                    text="LinkedIn" href="https://www.linkedin.com/in/ashamethedestroyer/">
                    <figure />
                </LinkButton>

                <LinkButton id="twitter-link-button" target="blank_"
                    text="Twitter" href="https://twitter.com/AshameDestroyer">
                    <figure />
                </LinkButton>

                <LinkButton id="telegram-link-button" target="blank_"
                    text="Telegram" href="https://www.t.me/ashamethedestroyer">
                    <figure />
                </LinkButton>

            </section>
        </footer>
    );
}
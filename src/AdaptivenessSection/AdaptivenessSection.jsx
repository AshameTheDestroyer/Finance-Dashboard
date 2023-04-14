import React, { useState, useEffect } from "react";

import "./AdaptivenessSection.scss";
import LinkButton from "../LinkButton/LinkButton";

/** The fourth content section of the page, an adaptiveness section.
 * @returns An Adaptiveness Section element.
 */
export default function AdaptivenessSection() {
    return (
        <section id="adaptiveness-section">
            <InformationSection />

            <section id="phone-showcase-section" className="observable">
                <figure />
                <figure />
                <figure />
            </section>
        </section>
    );
}


/** A section that contains all the neccessary information.
 * @returns An Information Section element.
 */
function InformationSection() {
    return (
        <main className="observable">
            <div className="label">Adapts to all platforms</div>

            <h1>Pick your preferred platform whilst using our app</h1>

            <p>
                Whether it's a laptop, a mobile, or even a smart TV,
                we're always adaptive to our customer needs for better
                user experience!
            </p>

            <section className="button-displayer">
                <LinkButton text="Share now" id="share-now-button" className="emphasized-button arrowed-button" />
                <LinkButton text="Learn more" />
            </section>
        </main>
    );
}
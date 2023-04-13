import React, { useState, useEffect } from "react";

import { INDIVIDUAL_DATA } from "../DataGenerator/DataGenerator";
import LinkButton from "../LinkButton/LinkButton";

import "./SupportSection.scss";

var IndividualDisplayerElement =
    document.querySelector("#individual-displayer section");

/** The third content section of the page, a support section.
 * @returns A Support Section element.
 */
export default function SupportSection() {
    return (
        <section id="support-section">
            <InformationSection />

            <figure id="world-map-figure" className="observable" />

            <IndividualDisplayer />
        </section>
    );
}

/** A section that contains all the neccessary information.
 * @returns An Information Section element.
 */
function InformationSection() {
    return (
        <main className="observable">
            <div id="support-label">Reach out to us</div>

            <h1>A huge shoutout to all of you!</h1>

            <p>
                We gain support from all around the world, thanks to you
                and all of our community, without you all, we would've
                never reached that far.
            </p>

            <section className="button-displayer">
                <LinkButton text="Support us" id="support-us-button" className="emphasized-button arrowed-button" />
                <LinkButton text="Learn more" />
            </section>
        </main>
    );
}

/** An element that displays all individuals that supports this project.
 * @returns An Individual Displayer element.
 */
function IndividualDisplayer() {
    return (
        <footer id="individual-displayer" className="observable">
            <button id="previous-individual-button"
                onClick={e => IndvidualScrollButtonClick("backwards")}
                onDoubleClick={e => IndvidualScrollButtonDobuleClick("backwards")}
                title="Double click to move to first individual." />

            <section>
                {
                    INDIVIDUAL_DATA
                        .map((individualDatum, i) =>
                            <IndividualButton key={i} {...individualDatum} />
                        )
                }
            </section>

            <button id="next-individual-button"
                onClick={e => IndvidualScrollButtonClick("forwards")}
                onDoubleClick={e => IndvidualScrollButtonDobuleClick("forwards")}
                title="Double click to move to last individual." />
        </footer>
    );
}

const INDIVIDUAL_DISPLAYER_MOVE_DIRECTIONS = {
    Forwards: "forwards",
    Backwards: "backwards",
};

const INDIVIDUAL_DISPLAYER_SCROLL_STEP = 120;

/** Scrolls the Individual Displayer element a step either forwards or backwards.
 * @param {"forwards" | "backwards"} direction The direction that the Individual Displayer will move in.
 */
function IndvidualScrollButtonClick(direction) {
    if (IndividualDisplayerElement == null) {
        IndividualDisplayerElement =
            document.querySelector("#individual-displayer section");
    }

    switch (direction) {
        case INDIVIDUAL_DISPLAYER_MOVE_DIRECTIONS.Forwards:
            IndividualDisplayerElement.scrollBy(INDIVIDUAL_DISPLAYER_SCROLL_STEP, 0);
            break;

        case INDIVIDUAL_DISPLAYER_MOVE_DIRECTIONS.Backwards:
            IndividualDisplayerElement.scrollBy(-INDIVIDUAL_DISPLAYER_SCROLL_STEP, 0);
            break;

        default:
            break;
    }
}

/** Scrolls the Individual Displayer element either to the last or to the first individual.
 * @param {"forwards" | "backwards"} direction The direction that the Individual Displayer will move in.
 */
function IndvidualScrollButtonDobuleClick(direction) {
    if (IndividualDisplayerElement == null) {
        IndividualDisplayerElement =
            document.querySelector("#individual-displayer section");
    }

    switch (direction) {
        case INDIVIDUAL_DISPLAYER_MOVE_DIRECTIONS.Forwards:
            IndividualDisplayerElement
                .querySelector("button:last-child")
                .scrollIntoView({ block: "nearest" });
            break;

        case INDIVIDUAL_DISPLAYER_MOVE_DIRECTIONS.Backwards:
            IndividualDisplayerElement
                .querySelector("button:first-child")
                .scrollIntoView({ block: "nearest" });
            break;


        default:
            break;
    }
}

/** A button that displays an individual that supports this project.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.name The name of the individual in the Individual Button.
 * @param {Number} properties.donationAmount The amount of money the individual has donated to be displayed in the Individual Button.
 * @returns An Individual Button element.
 */
function IndividualButton({
    name,
    donationAmount = 0,
}) {
    return (
        <LinkButton className="individual-button"
            href=""
            text={name ?? "An unspecified name"}
        >
            <figure donation-amount={donationAmount} />
        </LinkButton>
    );
}
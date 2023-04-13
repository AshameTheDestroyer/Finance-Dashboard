import React, { useState, useEffect } from "react";

import { FOLDABLE_QUESTION_DATA } from "../DataGenerator/DataGenerator";
import LinkButton from "../LinkButton/LinkButton";

import "./ResourceSection.scss";

/** The fourth content section of the page, a resources section.
 * @returns A resources Section element.
 */
export default function ResourcesSection() {
    return (
        <section id="resource-section">
            <ElonMuskThankingSection />
            <QuestionDisplayer />
        </section>
    );
}

/** Best joke I've ever added to this website.
 * @returns An Elon Musk Thanking Section element.
 */
function ElonMuskThankingSection() {
    return (
        <section id="elon-musk-thanking-section" className="observable">
            <p>
                I've never seen such a passionate and honest work
                before, <q>
                    <a href="https://www.github.com/AshameTheDestroyer">
                        @AshameTheDestroyer
                    </a> you nailed that one,
                </q> easily one of my favourites if not the best of them all.<br />
                I now know whom I'm gonna hand down Twitter…
            </p>

            <div id="elon-musk-account-displayer">
                <LinkButton>
                    <figure />
                </LinkButton>

                <div>
                    <h4>Elon Musk</h4>
                    <p>@attention-queen</p>
                </div>
            </div>
        </section>
    );
}

/** An element that displays questions and their answers.
 * @returns A Question Displayer element.
 */
function QuestionDisplayer() {
    return (
        <main id="question-displayer" className="observable">
            {
                FOLDABLE_QUESTION_DATA
                    .map((foldableQuestion, i) =>
                        <FoldableQuestion key={i} {...foldableQuestion} />)
            }
        </main>
    );
}

/** A question that can be folded and unfolded, to display its answer.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.question The question of the Foldable Question.
 * @param {String} properties.answer The answer to the Foldable Question.
 * @returns A Foldable Question element.
 */
function FoldableQuestion({
    question,
    answer,
}) {
    const [isFolded, setIsFolded] = useState(false);

    return (
        <div className={`foldable-question ${isFolded ? "folded" : ""}`}>
            <button onClick={e =>
                setIsFolded(!isFolded)}>
                {question}
            </button>

            <p>{answer}</p>
        </div>
    );
}
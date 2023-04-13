import React, { useState, useEffect } from "react";

import LinkButton from "../LinkButton/LinkButton";
import Animate from "../Animator/Animator";

import "./NotFoundPage.scss";

/** A page that appears whenever the user attempts to open an unimplemented section of the website.
 * @returns A Not Found Page element.
 */
export default function NotFoundPage() {
    useEffect(() => Animate(), []);

    return (
        <main id="not-found-page">
            <section className="observable">
                <div id="not-found-label">Something's wrong</div>

                <h1>Wooooops! 404</h1>

                <h3>Guess you're lost, little buddy.</h3>

                <p>
                    If you think anything went wrong unintentionally you
                    may reach out to the tech support, otherwise it's just
                    an unimplemented section of the website.
                </p>

                <LinkButton href="/Finance-Dashboard/" text="Go back"
                    className="emphasized-button arrowed-button" />
            </section>
        </main>
    );
}
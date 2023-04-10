import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../MainSection/MainSection";
import Overview from "../Overview/Overview";

import "./Page.scss";

/** The page of the document.
 * @returns An element that contains everything in the document.
 */
export default function Page() {
    return (
        <>
            <main id="landing-section">
                <Header />
                <Main />
                <Overview />
            </main>
        </>
    );
}
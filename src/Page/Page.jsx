import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import StatisticSection from "../StatisticSection/StatisticSection";
import ProductSection from "../ProductSection/ProductSection";
import SupportSection from "../SupportSection/SupportSection";
import ResourceSection from "../ResourceSection/ResourceSection";
import Footer from "../Footer/Footer";

import "./Page.scss";

/** The page of the document.
 * @returns An element that contains everything in the document.
 */
export default function Page() {
    return (
        <main id="page">
            <Header />
            <StatisticSection />
            <ProductSection />
            <SupportSection />
            <ResourceSection />
            <Footer />
        </main>
    );
}

const MINIMUM_SCROLL_VALUE = 20;
var JumpToTopButton =
    document.querySelector("#jump-to-top-button");

window.onscroll = e => {
    if (JumpToTopButton == null) {
        JumpToTopButton = document.querySelector("#jump-to-top-button");
    }

    JumpToTopButton.style.display =
        window.scrollY >= MINIMUM_SCROLL_VALUE ? "" : "none";
};
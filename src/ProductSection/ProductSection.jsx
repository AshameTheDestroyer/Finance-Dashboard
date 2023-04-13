import React, { useState, useEffect } from "react";

import { PLAN_PRICE_DATA } from "../DataGenerator/DataGenerator";
import LinkButton from "../LinkButton/LinkButton";

import "./ProductSection.scss";

import discount_icon from "../Icons/discount.svg";
import dollar_icon from "../Icons/dollar.svg";
import gold_bars_icon from "../Icons/gold_bars.svg";

/** The second content section of the page, a product section.
 * @returns A Product Section element.
 */
export default function ProductSection() {
    return (
        <section id="product-section" className="observable">
            <div id="product-label">Our best features</div>

            <h1>Select the plan that suits your needs the most</h1>

            <p>
                Help yourself by choosing your cup of tea of our plans,
                so we can grow together!
            </p>

            <PlanDisplayerContainer />

            <LinkButton text="Learn more" />
        </section>
    );
}

/** A container that contains all the plan displayers in the overview section.
 * @returns A Plan Displayer Container.
 */
function PlanDisplayerContainer() {
    return (
        <main>
            <PlanDisplayer id="free-use-plan-displayer" title="Free Use" iconURL={discount_icon}
                price={PLAN_PRICE_DATA[0]} isEmphasized>
                Sign up for this plan for quickest way possible to
                have a taste of our product, then you may decide to
                upgrade to other plans later.
            </PlanDisplayer>

            <PlanDisplayer id="committed-plan-displayer" title="Committed" iconURL={dollar_icon}
                price={PLAN_PRICE_DATA[1]}>
                With this one, you'll get pretty much everything
                expected from a complete product.
            </PlanDisplayer>

            <PlanDisplayer id="dedicated-plan-displayer" title="Dedicated" iconURL={gold_bars_icon}
                price={PLAN_PRICE_DATA[2]}>
                Unlimited byproducts via this plan is something
                different, no ADs, no cooldowns, everything you
                need in one place!
            </PlanDisplayer>
        </main>
    );
}

/** A displayer of a plan for the user to choose.
 * @param {Object} properties The properties of the element.
 * @param {Object} properties.children The children of the element.
 * @param {String} properties.title The title of the Plan Displayer.
 * @param {String} properties.iconURL The url of the icon of the Plan Displayer.
 * @param {String} properties.price The price message of the Plan Displayer.
 * @param {Boolean} properties.isEmphasized Determines whether or not the Plan Displayer is emphasized.
 * @param {String} properties.id The identifier of the Plan Displayer.
 * @returns A Plan Displayer element.
 */
function PlanDisplayer({
    children,
    title,
    iconURL,
    price,
    isEmphasized = false,
    id,
}) {
    return (
        <div id={id} className={`plan-displayer ${isEmphasized ? "emphasized" : ""} observable`}>
            <figure style={{ "--icon-url": `url("${iconURL}")` }} />

            <main>
                <h2>{title}</h2>
                <p>{children}</p>

                <LinkButton text={price != undefined ? `$${price} per month` : "Free"} />
            </main>
        </div>
    );
}
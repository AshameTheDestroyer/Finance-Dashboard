import React, { useState, useEffect } from "react";

import { PLAN_PRICE_DATA } from "../DataGenerator/DataGenerator";

import "./Overview.scss";

import discount_icon from "../Icons/discount.svg";
import dollar_icon from "../Icons/dollar.svg";
import gold_bars_icon from "../Icons/gold_bars.svg";

/** The second content section of the page, an overview.
 * @returns An Overview element.
 */
export default function Overview() {
    return (
        <main id="overview-section">
            <section>
                <div id="overview-label">Our best features</div>

                <h1>Select the plan that suits your needs the most</h1>

                <p>
                    Help yourself by choosing your cup of tea of our plans,
                    so we can grow together!
                </p>

                <PlanDisplayerContainer />
            </section>
        </main>
    );
}

/** A container that contains all the plan displayers in the overview section.
 * @returns A Plan Displayer Container.
 */
function PlanDisplayerContainer() {
    return (
        <main>
            <PlanDisplayer title="Free Use" iconURL={discount_icon}
                price={PLAN_PRICE_DATA[0]} isEmphasized>
                Sign up for this plan for quickest way possible to
                have a tase of our product, then you may decide to
                upgrade to other plans later.
            </PlanDisplayer>

            <PlanDisplayer title="Committed" iconURL={dollar_icon}
                price={PLAN_PRICE_DATA[1]}>
                With this one, you'll get pretty much everything
                expected from a complete product.
            </PlanDisplayer>

            <PlanDisplayer title="Dedicated" iconURL={gold_bars_icon}
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
 * @param {String} properties.price The price message of of the Plan Displayer.
 * @param {Boolean} properties.isEmphasized Determines whether or not the Plan Displayer is emphasized.
 * @returns A Plan Displayer element.
 */
function PlanDisplayer({
    children,
    title,
    iconURL,
    price,
    isEmphasized = false,
}) {
    return (
        <div className={`plan-displayer ${isEmphasized ? "emphasized" : ""}`}>
            <figure style={{ "--icon-url": `url("${iconURL}")` }} />

            <main>
                <h2>{title}</h2>
                <p>{children}</p>

                <button>{price != undefined ? `$${price} per month` : "Free"}</button>
            </main>
        </div>
    );
}
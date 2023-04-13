import React, { useState, useEffect } from "react";

import "./Header.scss";
import LinkButton from "../LinkButton/LinkButton";

/** The header of the website.
 * @returns A Header element.
 */
export default function Header() {
    const [isNavbarClosed, setIsNavbarClosed] = useState(true);

    return (
        <header id="page-top" className={isNavbarClosed ? "navbar-closed" : ""}>
            <h3 className="logo">Finance Dashboard</h3>

            <Navbar navbarStatus={{ isNavbarClosed, setIsNavbarClosed }} />

            <AsideButtons />

            <div id="jump-to-top-button" style={{ display: "none" }}>
                <NavbarButton href="#page-top" />
            </div>
        </header>
    );
}

/** The navigation bar of the header.
 * @param {Object} properties The properties of the element.
 * @param {{
 *      isNavbarClosed: Boolean,
 *      setIsNavbarClosed: (Boolean) => void,
 * }} properties.navbarStatus The status of the navigation bar.
 * @returns A navigation bar element.
 */
function Navbar({
    navbarStatus
}) {
    return (
        <nav>
            <button id="nav-toggling-button"
                onClick={_ => navbarStatus
                    .setIsNavbarClosed(!navbarStatus.isNavbarClosed)} />

            <NavbarButton id="statistic-section-button" href="#statistic-section" text="Statistics" />
            <NavbarButton id="product-section-button" href="#product-section" text="Products" />
            <NavbarButton id="support-section-button" href="#support-section" text="Support" />
            <NavbarButton id="resource-section-button" href="#resource-section" text="Resources" />
        </nav>
    );
}

/** The buttons of that are at the side of the header.
 * @returns An aside element.
 */
function AsideButtons() {
    return (
        <aside className="button-displayer">
            <LinkButton text="Sign up" />
            <LinkButton text="Login" className="emphasized-button" />
        </aside>
    );
}

/** A navigation bar button.
 * @param {Object} proeperties The proeperties of the Element.
 * @param {String} proeperties.id The identifier of icon of the Navbar Button.
 * @param {String} proeperties.href The hypertext reference of the Navbar Button.
 * @param {String} proeperties.text The text of the Navbar Button.
 * @returns A Navbar Button Element.
 */
function NavbarButton({
    id,
    href,
    text,
}) {
    return (
        <LinkButton id={id} className="navbar-button" href={href} text={text}>
            <figure className="observable" title={text} />
        </LinkButton>
    );
}
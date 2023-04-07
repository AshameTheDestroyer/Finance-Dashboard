import React, { useState, useEffect } from "react";

import "./Header.scss";

/** The header of the document.
 * @returns A header element.
 */
export default function Header() {
    const [isNavbarClosed, setIsNavbarClosed] = useState(true);

    return (
        <header className={isNavbarClosed ? "nav-closed" : null}>
            <h3 id="logo">Finance Dashboard</h3>
            <Navbar navbarStatus={{ isNavbarClosed, setIsNavbarClosed }} />
            <AsideButtons />
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
            <button id="nav-toggling-button" onClick={_ => navbarStatus.setIsNavbarClosed(!navbarStatus.isNavbarClosed)} />

            <NavbarButton>Statistics</NavbarButton>
            <NavbarButton>Products</NavbarButton>
            <NavbarButton>Support</NavbarButton>
            <NavbarButton>Resources</NavbarButton>
        </nav>
    );
}

/** The buttons of that are at the side of the header.
 * @returns An aside element.
 */
function AsideButtons() {
    return (
        <aside className="button-displayer">
            <button>Sign up</button>
            <button className="emphasized-button">Login</button>
        </aside>
    );
}

/** A navigation bar button.
 * @param {Object} proeperties The proeperties of the Element.
 * @param {Object} proeperties.children The children of the Navbar Button.
 * @param {String} proeperties.iconURL The URL of icon of the Navbar Button.
 * @param {String} proeperties.href The hypertext reference of the Navbar Button.
 * @returns A Navbar Button Element.
 */
function NavbarButton({
    children,
    iconURL,
    href,
}) {
    return (
        <button className="navbar-button">
            <figure />
            <a href={href}>{children}</a>
        </button>
    );
}
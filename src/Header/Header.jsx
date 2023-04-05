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

            <button><a>Statistics</a></button>
            <button><a>Products</a></button>
            <button><a>Support</a></button>
            <button><a>Resources</a></button>
        </nav>
    );
}

/** The buttons of that are at the side of the header.
 * @returns An aside element.
 */
function AsideButtons() {
    return (
        <aside>
            <button>Sign up</button>
            <button className="intensified-button">Login</button>
        </aside>
    );
}
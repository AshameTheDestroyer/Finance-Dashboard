import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./LinkButton.scss";

/** A button that links to a page or a section.
 * @param {Object} properties The properties of the element.
 * @param {Object} properties.children The children of the Link Button.
 * @param {String} properties.id The identifier of the Link Button.
 * @param {String} properties.className The class name of the Link Button.
 * @param {String} properties.href The link of the Link Button.
 * @param {String} properties.text The text of the Link Button.
 * @param {Boolean} properties.external Determines whether or not the Link Button links to an external section.
 * @returns A Link Button element.
 */
export default function LinkButton({
    children,
    id = "",
    className = "",
    href,
    text,
    external = true,
}) {
    return (
        <button id={id} className={`link-button ${className}`}
            onClick={e => {
                e.currentTarget.querySelector("a").click();
            }}
            style={{
                "--character-count": text?.length ?? 0,
            }}>
            {
                external && href ?
                    <a href={href} tabIndex="-1">{text}</a> :
                    href ?
                        <Link to={href} tabIndex="-1">{text}</Link> :
                        <Link to={"/NotFound"} tabIndex="-1">{text}</Link>
            }
            {children}
        </button>
    );
}
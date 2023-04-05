import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./index.scss";

import Page from "./Page/Page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
            <Route path="/" element={<Page />} />
        </Routes>
    </BrowserRouter>
);
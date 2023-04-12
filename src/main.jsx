import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./index.scss";

import Page from "./Page/Page.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/NotFound" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
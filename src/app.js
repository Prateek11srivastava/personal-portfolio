import React from "react";

import "./app.scss";

import Intro from "./components/intro/";
import Skills from "./components/skills";

const app = () => {
    return (
        <div>
            <Intro />
            <Skills />
        </div>
    );
};

export default app;

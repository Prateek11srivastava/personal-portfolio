import React from "react";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="JS dev"
                />
            </div>
            <div className="navigation"></div>
            <span className="navigation-item">Skills</span>
            <span className="navigation-item">Portfolio</span>
            <span className="navigation-item">Blogs & Article</span>
            <CallToAction text="Contact me" />
        </div>
    );
};

export default navigation;

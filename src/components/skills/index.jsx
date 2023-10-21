import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS, React, HTML,CSS, MongoDB NodeJS"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos distinctio illo maxime error suscipit rerum libero
                        veritatis consequuntur? Ex hic tempore sed nam dolorem,
                        labore placeat suscipit dolor praesentium accusantium!
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;

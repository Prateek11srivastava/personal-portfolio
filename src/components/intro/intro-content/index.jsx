import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="hello">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">I am </span>
                        </span>
                        <span className="big-text">Prateek Srivastava</span>
                    </h1>
                    <p>
                        Highly motivated and dedicated Full Stack Web Developer
                        with a solid foundation in frontend and backend
                        technologies.
                        <br>
                            Recent Bachelor's of technology graduate in Computer
                            science seeking an entry-level position to kickstart
                            a successful career in web development.
                        </br>{" "}
                        Possesses a strong passion for coding and creating
                        intuitive user experiences. Eager to apply knowledge,{" "}
                        <br>
                            learn new technologies, and contribute to the
                            development of cutting-edge web applications. A fast
                            learner with excellent problem-solving and
                            collaboration skills,
                        </br>{" "}
                        ready to make a positive impact on a dynamic team.
                    </p>
                    <CallToAction text="contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="prateek"
                    />

                    <div className="highlight horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Projects</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>10+</span>
                            Live Projects
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;

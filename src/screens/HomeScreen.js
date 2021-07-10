import React from "react";
import { Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const HomeScreen = () => {
    return (
        <div className="heroBlock">
            <Carousel>
                <div className="container-fluid">
                    <Zoom>
                        <div className="content">
                            <h1>
                                HI , I AM{" "}
                                <span style={{ color: "#fda403" }}>
                                    AKSHAT SHAH
                                </span>
                            </h1>
                            <h4>UI/UX DESIGNER | WEB DEVELOPER | PROGRAMMER</h4>
                            <div className="btnHolder">
                                <Button
                                    style={{ backgroundColor: "#fda403" }}
                                    size="large"
                                >
                                    <Link to="/portfolio">VIEW PORTFOLIO</Link>
                                </Button>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </Carousel>
        </div>
    );
};

export default HomeScreen;

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Fade from "react-reveal/Fade";

const HeaderComponent = () => {
    return (
        <div className="container-fluid">
            <div
                className="header"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Fade top>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item className="menuLinks" key="1">
                            <Link to={"/"} exact>
                                HOME
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menuLinks" key="2">
                            <Link to={"/about"} exact>
                                ABOUT
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menuLinks" key="3">
                            <Link to={"/portfolio"} exact>
                                PORTFOLIO
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menuLinks" key="4">
                            <Link to={"/contact"} exact>
                                CONTACT
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Fade>
            </div>
        </div>
    );
};

export default HeaderComponent;

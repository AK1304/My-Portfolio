import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";

const AboutScreen = () => {
    return (
        <div className="block aboutBlock">
            <div className="container fluid">
                <Slide top cascade>
                    <div className="titleHolder">
                        <h2>ABOUT ME</h2>
                        <p>
                            INTERN AT JWILLIAMSON | PURSUING B.E. IN COMPUTER
                            ENGINEERING | WEBDEV LEAD IDE-CLUB
                        </p>
                    </div>
                </Slide>
                <Fade delay={1000} cascade>
                    <div className="contentHolder">
                        <p>
                            Hi, I am Akshat. Nice to meet you. I have been in
                            the field of Web Development from nearly 2 years. I
                            am currently pursueing Bachelor's of engineering in
                            Computer Engineering from Government Engineering
                            College, Gandhinagar. I am currently also working as
                            a Web Developer lead at IDE-CLUB, GEC. I enjoy
                            turning complex problems into simple. I'm quiet
                            confident, naturally curious, and perpetually
                            working on improving my skills one at a time.
                        </p>
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col span={8} key="1">
                            <div className="content">
                                <div className="icon">
                                    <i class="fas fa-code"></i>
                                </div>
                                <h3>Frontend Web Development</h3>
                                <p>
                                    I have worked with Frontend tools such as
                                    HTML5 , CSS3, Bootstrap5, SASS, Javascript,
                                    JQuery, ReactJS and much more.
                                </p>
                            </div>
                        </Col>
                        <Col span={8} key="2">
                            <div className="content">
                                <div className="icon">
                                    <i class="fas fa-server"></i>
                                </div>
                                <h3>Backend Web Development</h3>
                                <p>
                                    I have worked with Backend tools such as
                                    NodeJS , ExpressJS and much more. Also have
                                    worked with Wordpress and Wix website
                                    development.
                                </p>
                            </div>
                        </Col>
                        <Col span={8} key="3">
                            <div className="content">
                                <div className="icon">
                                    <i class="fas fa-database"></i>
                                </div>
                                <h3>Database Administration</h3>
                                <p>
                                    I have worked with Databses such as SQL
                                    databases like MYSQL and NO-SQL databases
                                    like MONGODB with tools like MONGOOSE and
                                    much more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </div>
        </div>
    );
};

export default AboutScreen;

import React from "react";
import image1 from "../images/proshop.jpg";
import image2 from "../images/alpachino builders1.jpg";
import image3 from "../images/restaurant website1.jpg";
import image4 from "../images/movie app1.jpg";
import image5 from "../images/weather app1.jpg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const PortfolioScreen = () => {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <Slide top cascade>
                    <div className="titleHolder">
                        <h2>MY RECENT WORK</h2>
                        <p>
                            Here are a few developement projects I've worked on
                            recently. Want to see more?
                            <br />
                            <Link to="/contact">Email me.</Link>
                        </p>
                    </div>
                </Slide>
                <Fade delay={1000} cascade>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            {" "}
                            <Card
                                hoverable
                                cover={<img alt="example" src={image2} />}
                            >
                                <Meta
                                    title="Alpachino Builders"
                                    description="Alpachino Builders is a builders website made with the wordpress tools and page builder Elementor."
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            {" "}
                            <Card
                                hoverable
                                cover={<img alt="example" src={image4} />}
                            >
                                <Meta
                                    title="Movie App"
                                    description="Movie App is a small project made with ReactJS and using movies API."
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            {" "}
                            <Card
                                hoverable
                                cover={<img alt="example" src={image5} />}
                            >
                                <Meta
                                    title="Weather App"
                                    description="Weather App is a small project made withe ReactJs and using weather API."
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            {" "}
                            <Card
                                hoverable
                                cover={<img alt="example" src={image1} />}
                            >
                                <Meta
                                    title="PROSHOP-Ecommerce website"
                                    description="The PROSHOP is a fully functional small Ecommerce website designed with Frontend as well as Backend."
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            {" "}
                            <Card
                                hoverable
                                cover={<img alt="example" src={image3} />}
                            >
                                <Meta
                                    title="La Restaurante"
                                    description="La Restaurante is a fully functional restaurant website with the Frontend as well as Backend."
                                />
                            </Card>
                        </Col>
                    </Row>
                </Fade>
            </div>
        </div>
    );
};

export default PortfolioScreen;

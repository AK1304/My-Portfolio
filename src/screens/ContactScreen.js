import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;

const ContactScreen = () => {
    return (
        <div className="block contactBlock">
            <div className="container-fluid">
                <Slide top cascade>
                    <div className="titleHolder">
                        <h2>WANNA TEAM UP</h2>
                        <p>Have a question or want to work together?</p>
                    </div>
                </Slide>
                <Fade delay={1000} cascade>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="Fullname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Fullname!",
                                },
                            ]}
                        >
                            <Input placeholder="Fullname" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input type="email" placeholder="Email Address" />
                        </Form.Item>
                        <Form.Item name="Contact Number">
                            <Input placeholder="Contact Number" />
                        </Form.Item>
                        <Form.Item name="Message">
                            <TextArea placeholder="Message" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Fade>
            </div>
        </div>
    );
};

export default ContactScreen;

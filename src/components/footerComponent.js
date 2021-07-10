import React from "react";
import Fade from "react-reveal/Fade";

const FooterComponent = () => {
    return (
        <div className="container-fluid">
            <Fade bottom cascade>
                <div className="footer">
                    <ul className="socials">
                        <li>
                            <a
                                className="footerLinks"
                                href="https://www.facebook.com/"
                            >
                                <i class="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="footerLinks"
                                href="https://www.twitter.com/"
                            >
                                <i class="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="footerLinks"
                                href="https://www.linkedin.com/"
                            >
                                <i class="fab fa-linkedin-in" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="footerLinks"
                                href="https://in.pinterest.com/"
                            >
                                <i class="fab fa-pinterest-p" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="footerLinks"
                                href="https://www.instagram.com/"
                            >
                                <i class="fab fa-instagram" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        Copyright &copy; Akshat Shah
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FooterComponent;

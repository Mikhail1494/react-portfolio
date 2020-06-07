import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://juststickers.in/wp-content/uploads/2017/11/ninja-coder-badge.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Developer </h1>
                            <hr />
                            <p>
                                HTML / CSS | Bootsrap | JavaScript | React |
                                NodeJS | MySQL | MongoDB
                            </p>
                            <div className="social-links">
                                {/* LinkedIns */}
                                <a
                                    href="https://www.linkedin.com/in/mikhail-mednikh-7b2416199/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        class="fa fa-linkedin"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                {/* GitHub */}
                                <a
                                    href="https://github.com/Mikhail1494"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        class="fa fa-github"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;

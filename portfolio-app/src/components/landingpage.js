import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/proxy/R79n411lR3t72qa1bRg-a_IgJoep_0jdbtM-G5acj5I9M2seC9Tl3YzRY-oNde2VXsrQeVJByOeb2_BGiNCTZp4imVgcfUw"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Developer </h1>
                            <hr />
                            <p>
                                HTML/CSS | Bootsrap | JavaScript | React |
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

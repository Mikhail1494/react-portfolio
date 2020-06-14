import React, { Component } from "react";
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemAction,
    ListItemContent,
} from "react-mdl";
import "./AboutMe.css";
import intro from "./intro.png";

class About extends Component {
    render() {
        return (
            <div className="about-me ">
                <h1>About Me</h1>
                <Grid className="">
                    <Cell col={12}>
                        <h2>My name is Mikhail Mednikh</h2>
                        <hr />
                        <img
                            src={intro}
                            alt="intro"
                            style={{ height: "150px" }}
                        />
                        <hr />
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em",
                            }}
                        >
                            My favorite pastime is disassembling, repairing and
                            assembling something from electrical engineering.
                            Also, I found myself in coding. I have something to
                            do with my own hands. In coding, I like part of the
                            design more, but this is not the limit. I would like
                            to learn a lot more. In the future I hope to improve
                            my coding skills and reach new heights.By the way,
                            I'm still a little fond of photoshop and the picture
                            above is made by me personally in Adobe Photoshop
                            2019 CC
                        </p>
                        <hr />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;

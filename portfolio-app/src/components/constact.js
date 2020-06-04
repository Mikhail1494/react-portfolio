import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mikhail Mednikh</h2>
                        <img
                            src="https://i.pinimg.com/originals/ea/81/16/ea811652ed52d2f3035d267f5ee8395b.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em",
                            }}
                        >
                            Hello my name is Mikhail Mednikh. I like coding and
                            in the future I hope to learn a lot in coding and
                            reach the heights in my programming
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;

import React, { Component } from "react";
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemAction,
    ListItemContent,
} from "react-mdl";
import "./Contact.css";
import intro from "./intro.png";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mikhail Mednikh</h2>
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
                            Hello my name is Mikhail Mednikh. I like coding and
                            in the future I hope to learn a lot in coding and
                            reach the heights in my programming
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="container-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "20px",
                                            fontFamily: "Anton",
                                        }}
                                    >
                                        <hr />
                                        <i
                                            className="fa fa-phone-square"
                                            aria-hidden="true"
                                        />
                                        + 1 (347) 000-0000
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "20px",
                                            fontFamily: "Anton",
                                        }}
                                    >
                                        <hr />
                                        <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                        />
                                        Loren.email@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "20px",
                                            fontFamily: "Anton",
                                        }}
                                    >
                                        <hr />
                                        <i
                                            className="fa fa-skype"
                                            aria-hidden="true"
                                        />
                                        MySkypeID#####
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;

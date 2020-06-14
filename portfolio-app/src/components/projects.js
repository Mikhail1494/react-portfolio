import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardActions,
    CardTitle,
    CardMenu,
    IconButton,
    Button,
    CardText,
} from "react-mdl";
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "black",
                            height: "300px",
                            background:
                                "url(https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667) center / cover",
                        }}
                    ></CardTitle>
                    <CardText>First React project</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: "blue" }}>
                        <Link href="https://github.com/Mikhail1494">
                            <IconButton name="share" />
                        </Link>
                    </CardMenu>
                </Card>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "black",
                            height: "300px",
                            background:
                                "url(https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png) center / cover",
                        }}
                    ></CardTitle>
                    <CardText>First Angular project</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: "blue" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "Red",
                            height: "300px",
                            background:
                                "url(https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png) center / cover",
                        }}
                    ></CardTitle>
                    <CardText>First NodeJS project</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: "blue" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "black",
                            height: "300px",
                            background:
                                "url(https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png) center / cover",
                        }}
                    ></CardTitle>
                    <CardText>First MongoDB project</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: "blue" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;

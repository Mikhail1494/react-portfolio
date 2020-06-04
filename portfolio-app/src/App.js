import React from "react";
import "./App.css";
import Main from "./components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header
                    className="header-color"
                    title="My Portfolio"
                    scroll
                ></Header>
                <Drawer title="List">
                    <Navigation>
                        <Link to="/resume">My Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;

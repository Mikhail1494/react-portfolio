import React from "react";
import "./App.css";
import "./resume.css";
import Main from "./components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header
                    className="header-color"
                    title={
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/"
                        >
                            My Portfolio
                        </Link>
                    }
                    scroll
                ></Header>
                <Drawer
                    style={{ background: "#00a8ff" }}
                    title={
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/"
                        >
                            My Portfolio
                        </Link>
                    }
                >
                    <Navigation>
                        <Link style={{ color: "black" }} to="/resume">
                            My Resume
                        </Link>
                        <Link style={{ color: "black" }} to="/aboutme">
                            About Me
                        </Link>
                        <Link style={{ color: "black" }} to="/projects">
                            Projects
                        </Link>
                        <Link style={{ color: "black" }} to="/contact">
                            Contact
                        </Link>
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

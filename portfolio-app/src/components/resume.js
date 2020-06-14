import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Columbia from "./columbia";
import intro from "./intro.png";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div>
                            <img
                                src={intro}
                                alt="intro"
                                style={{ height: "150px" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: "2em" }}> Mikhail Mednikh </h2>
                        <h4 style={{ color: "grey" }}> Programmer </h4>
                        <hr
                            style={{
                                borderTop: "7px dotted purple",
                                width: "50%",
                            }}
                        />
                        <p>
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
                        <hr
                            style={{
                                borderTop: "7px dotted purple",
                                width: "50%",
                            }}
                        />
                        <h5>Address</h5>
                        <p>11-11 No Name st New York NY 11122</p>
                        <h5>Email addres</h5>
                        <p>Myemail@example.com</p>
                        <hr
                            style={{
                                borderTop: "7px dotted purple",
                                width: "50%",
                            }}
                        />
                    </Cell>
                    <Cell className="resume-rigt-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2001}
                            endYear={2010}
                            schoolName="Computer Engineering school #238"
                            schoolDescription="School #238 is based on the construction of computer equipment and computer parts"
                        />
                        <Education
                            startYear={2010}
                            endYear={2013}
                            schoolName="College name:Mirzo Ulugbek vocational college of informatics "
                            schoolDescription="Studied at IT repair and adjustment of office equipment"
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2014}
                            endYear={2018}
                            jobName="AllNations"
                            jobDescription="Setting up and configuring Internet networks, repair and maintenance of copy machine and installing them on the client server"
                        />
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="JFK Sigma company"
                            jobDescription="Maintenance and repair of industrial air conditioners"
                        />
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName="Sapphire ofice solution"
                            jobDescription="Setting up and configuring Internet networks, repair and maintenance of copy machine and installing them on the client server"
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Columbia Engineering</h2>
                        <p>Coding Boot Camp full stack developer</p>
                        <Columbia
                            startDayMonthYear="03/15/2020"
                            endDayMonthYear="06/16/2020"
                            colledgeName="Columbia Engineering Coding Boot Camp full stack developer "
                            coursesDescription="Computer Science applied to JavaScript /
                            Databases (MySQL, MongoDB)
                            Server Side Development (Node.js, Express, MERN Stack) /
                            Browser Based Technologies (HTML, CSS, JavaScript, jQuery, Bootstrap) /
                            Deployment (Heroku, Git) /
                            Java /
                            Quality Assurance (Writing Tests) "
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Skills</h2>
                        <Skills skill="javascript" progress={50} />
                        <Skills skill="HTM/CSS" progress={75} />
                        <Skills skill="Node.js" progress={40} />
                        <Skills skill="MySQL / MongoDB" progress={45} />
                        <Skills skill="Jquery" progress={40} />
                        <Skills skill="React" progress={45} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Columbia from "./columbia";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://i.pinimg.com/originals/ea/81/16/ea811652ed52d2f3035d267f5ee8395b.png"
                                alt="avatar"
                                style={{ height: "200px" }}
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
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
                        <p>Coding Boot Camp</p>
                        <Columbia
                            startDayMonthYear="03/15/2020"
                            endDayMonthYear="06/16/2020"
                            colledgeName="Columbia Engineering Coding Boot Camp"
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

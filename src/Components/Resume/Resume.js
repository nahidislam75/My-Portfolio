import React from 'react';
import { Card } from 'react-bootstrap';

const Resume = () => {
    return (
        <div className="container">
            <div className="m-5">
                <h3>Personal Information</h3>
                <div>
                    <b>Name:</b>Mokadderul Islam
                    <br />
                    <b>Address:</b>Faridpur ,Dhaka ,Bangladesh
                    <br />
                    <b>Email:</b>nahidnahid63@gmail.com
                    <br />
                    <b>LinkedIn:</b><a href="https://www.linkedin.com/in/nahid-nahid-730aaa202/">Here  </a>
                    <b>Github:</b><a href="https://github.com/nahidislam75">Here</a>
                </div>
            </div>
            <div className="m-5">
                <h3>CAREER OBJECTIVE</h3>
                <p>A self-motivated IT professional with huge knowledge and proficiency in JavaScript,
                HTML , react , CSS, firebase authentication , bootstrap and mobile responsive web
                development, as well as strong skills and ability in writing clean and efficient code. I
                want to become a great asset to my work place .</p>
            </div>
            <div>
                <h3>Language and Tools</h3>
                <div className="row m-5">
                    <div className="col-md-4">
                        <Card className="shadow-lg">
                            <Card.Header>Language</Card.Header>
                            <Card.Body>
                                <Card.Title> Languages I know better </Card.Title>
                                <Card.Text>
                                    React , Javascript , ES6 , Node js , Mongodb , React router , Html , Css , React hooks , Bootstrap .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="shadow-lg">
                            <Card.Header>Language</Card.Header>
                            <Card.Body>
                                <Card.Title> Languages I know about </Card.Title>
                                <Card.Text>
                                    C , C++ , Java , Latex , React native , Rudex , Typescript , Data structure , Object oriented programming .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="shadow-lg">
                            <Card.Header>Tool</Card.Header>
                            <Card.Body>
                                <Card.Title> My used tools </Card.Title>
                                <Card.Text>
                                    Visual studio code , Codeblocks , Firebase , Heroku , Github , Netlifay , Postman , Notepad++.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="m-5">
                <h3>Education</h3>
                <p>
                    Bachelor of Science(2nd year)
                    Computer Science
                    Bangabandhu Sheikh Mujibur
                    Rahman Science &technology
                    University
                    2018 - current
                    Gopalgonj,Dhaka,Bangladesh
                </p>
            </div>
            <div className="m-5">
                <h3>SKILLS</h3>
                <p>
                    Problem Solving, 
                    Knowledge, 
                workaholic, 
                Time management, 
                Helpfull, 
                Team worker</p>
            </div>
        </div>
    );
};

export default Resume;
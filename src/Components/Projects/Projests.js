
import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Projests = () => {
    return (
        <div>
            <div className="container">
                <div className="row m-5">
                    <Card className="text-center shadow-lg">
                        <Card.Header>First Project</Card.Header>
                        <Card.Body>
                            <Card.Title>Dream Football Legend</Card.Title>
                            <Card.Text>
                                This website is made with Javascript,React, React Router,Html,Css , Bootstrap,React hooks.There is many card in the home page for teams . If you click in to exploer button you will get that teams details with new route address. You also can find socal link by click in the icons.
                                
                                Git link: <a href="https://github.com/Porgramming-Hero-web-course/react-router-nahidislam75">Here</a> 
                             </Card.Text>
                            <Button variant="primary"> <a href="https://nostalgic-lewin-ca4861.netlify.app">Live link</a></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">1 months ago</Card.Footer>
                    </Card>
                </div>
                <div className="row m-5">
                    <Card className="text-center shadow-lg">
                        <Card.Header>Second Project</Card.Header>
                        <Card.Body>
                            <Card.Title>Hungey Moster</Card.Title>
                            <Card.Text>
                                This website is made with Javascript , Html , Css ,Bootstrap. In the home page you will find a search input place . In that input place you can search for your fevt meal . Then you can  find some card if you click on any card you can find that meal's ingredient . 

                                Git link: <a href="https://github.com/nahidislam75/fifth-assignment"> Here</a>
                             </Card.Text>
                            <Button variant="primary"><a href="https://nahidislam75.github.io/fifth-assignment/">Live link</a></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </div>
                <div className="row m-5">
                    <Card className="text-center shadow-lg">
                        <Card.Header>Third Project</Card.Header>
                        <Card.Body>
                            <Card.Title>Dream Leagues Soccers</Card.Title>
                            <Card.Text>
                                This website is made with Javascript , Html , Css ,Bootstrap. In this site you can creat you own team . You can see some player's card with a button option to buy now by clicking that you can calculate and make your own team.

                                Git link: <a href="https://github.com/Porgramming-Hero-web-course/simple-react-nahidislam75">Here</a>
                            </Card.Text>
                            <Button variant="primary"><a href="https://musing-mcnulty-6b74a2.netlify.app">Live link</a></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </div>
                <div className="row m-5">
                    <Card className="text-center shadow-lg">
                        <Card.Header>Fouth Project</Card.Header>
                        <Card.Body>
                            <Card.Title>Fruit-network</Card.Title>
                            <Card.Text>
                                This website is made with Javascript,React, React Router,Html,Css , Bootstrap,React hooks ,Node js,Mongodb. In this site you can order fruits. As admin you can do curd oparation . You can add fruit and you can delet fruit .

                                Git link: <a href="https://github.com/Porgramming-Hero-web-course/full-stack-client-nahidislam75">Here</a>
                            </Card.Text>
                            <Button variant="primary"><a href="https://friut-network.web.app">Live link</a></Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </div>
                <div className="row m-5">
                    <h5 className="text-center">I have also some C and C++ projects</h5>
                </div>
            </div>
        </div>
    );
};

export default Projests;
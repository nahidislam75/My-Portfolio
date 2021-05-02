import React from 'react';
import img from "../Images/home.jpg"
import "./Home.css"
import myfile from "../Images/resume.pdf"

const Home = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center p-3">
                    <img className="for-img" src={img} alt=""/>
                </div>
                <div className="col-md-8 for-name ">
                    <h1> <b> <span className="text-color" >Mokadderul</span> Islam</b></h1>
                    <h5>A Bangladesh based web developer . Working with Javascript , React , Node js , Html , Css , Mongodb. Focused in life and work . Always want to learn.</h5>
                    <button> <a href={myfile} download="resume.pdf">resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from "react";
import Picture from '../assets/rupesh.jpg';

function HomePage() {
    return (
        <div> 
              
            <div className="container">
            <div className="img">
              <img src= {Picture} className="my_pic" alt="image can't load"/>
            </div>
            <div className="info">
                <h1>Hello! <br/> I am Rupesh Pathak</h1>
                <p>I am Software Developer working in Infosys Bangalore.
                I love coding, playing games and traveling. 
                I have started my carrier as a java Developer from a startup company. 
                Then I have switched to Javascript. Currently I have worked on HTML, CSS,
                Javascript, ReactJS, React-native, Node and several other programming language.<br/><br/>
                I have worked on several project which consist of mobile application 
                as well as web application.
                In mobile application I have worked on anroid, ios and Kaios operating system.  
                I have created ios and android application with help of react-native and Kaios with
                help of reactJs.<br/>
                For web application I use ReactJS as front-end and node with express as backend.<br/><br/>
                Kindly feel free to contact me. My contact information in give in Contact field.
                
                </p> 

            </div>
        </div>
        </div>

    )
}

export default HomePage;
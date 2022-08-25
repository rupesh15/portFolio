import React from "react";
import Facebook from '../assets/facebook.svg';
import Github from '../assets/github.svg';
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.svg";
import { BsPhoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";


function ContactPage(){
    return(
       <div className="contact_container">
        <div className="top_field">
            <h2 className="head_content">You can follow me on Social media</h2>
            <div className="elements">
            <a href="https://www.linkedin.com/in/rupesh-pathak-a3440b11a/" target="_blank" rel="noreferrer">
             <img src = {LinkedIn} className = "icons" alt= "can't load the image"/>
            </a>
            <a href="https://github.com/rupesh15" target="_blank" rel="noreferrer">
             <img src = {Github} className = "icons" alt= "can't load the image"/>
            </a>
            <a href="https://www.instagram.com/rupesh.pathak.7/" target="_blank" rel="noreferrer">
             <img src = {Instagram} className = "icons" alt= "can't load the image"/>
            </a>
            <a href="https://www.facebook.com/rupesh.pathak.7" target="_blank" rel="noreferrer">
             <img src = {Facebook} className = "icons" alt= "can't load the image"/>
            </a>
            </div>
            <div className="bottom_filed">
               <h2>You can reach out to me</h2>
               <div>
                <BsPhoneFill className="logo"/>
                <text>8210166151 / 9916271954</text> 
               </div>
               <div>
                <BsWhatsapp className="logo"/>
                <text>9916271954</text> 
               </div>
               <div>
                <FiMail className="logo"/>
                <text>rupeshpathak15@gmail.com</text> 
               </div>
               <div>
                <h2>For referral in Infosys contact</h2>
                <FiMail className="logo"/>
                <text>rupesh.pathak@infosys.com</text> 
               </div>

            </div>
        </div>
       </div>
    )
}

export default ContactPage;
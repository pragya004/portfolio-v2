import React, {useRef, useEffect} from 'react'
import NavBar from './NavBar';
import Container from "react-bootstrap/Container"
import hoops from "../Images/hoops.svg"
import Rectangle from "../Images/Rectangle.svg"
import profile from "../Images/profile.png"
import Button from "react-bootstrap/Button"
import scrollimg from "../Images/scrollimg.svg"
import "./CoverPageBody.css"
import { gsap } from "gsap"
import reactlogo from "../Images/reactlogo.svg"
import figmalogo from "../Images/figmalogo.svg"
import csslogo from "../Images/csslogo.png"
import htmllogo from "../Images/htmllogo.svg"
import javascriptlogo from "../Images/javascriptlogo.svg"

export default function CoverPageBody() {

    const CoverpageRef = useRef(null);

    useEffect(() => {
        gsap.from(CoverpageRef.current, {
            duration: 1,
            autoAlpha:0,
            ease: "none",
            delay:1
        });
    },[])
    
    function handleScroll(){
        window.scrollBy(0,document.documentElement.clientHeight)
    }

    return (
        <Container ref={CoverpageRef} fluid style={{backgroundColor:"#E5E5E5",height:"100vh",paddingTop:"2%"}} id="home" className="pl-4 ">
            <NavBar />
            <Container fluid className="d-flex align-items-center justify-content-between" style={{paddingTop:"12vh"}}>
                <div style={{fontSize:"7vw",zIndex:4}}>FRONTEND</div>
                <img src={hoops} alt="hoops" style={{width:"20vw",zIndex:1}}/>
                <div style={{fontSize:"7vw",zIndex:4}}>DEVELOPER</div>
                <img src={Rectangle} alt="rectangle" style={{width:"30vw", position:"absolute",right:0,top:"8vh",zIndex:0}}/>
            </Container>
            <Container fluid className="m-0 p-0 d-flex mt-4">
                <Container id="leftContainer" style={{backgroundColor:"#DEDDDD",marginLeft:"10%",minHeight:"40vh"}} className="d-flex flex-column justify-content-center h-100 align-items-center w-25"> 
                    <div className="d-flex align-items-center justify-content-around">
                        <div id="about" style={{width:"25vw",maxHeight:150,fontSize:"14px",position:"relative",left:"-10%"}} className="mb-4">Hi! I am a UI/UX designer and developer who can provide you with innovatiove product development, highend web design and effective branding. I am currently looking for UI/UX designer job so if my porfolio looks interesting to you then do drop a message and let's discuss.</div>
                        <img id="pic" src={profile} alt="profile pic" style={{height:"100px",width:"100px",position:"relative",right:"-0.5vw"}}/>
                    </div> 
                    <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=pragyakumari004@gmail.com" target="_blank" className="btn btn-outline-dark rounded-0 helloButton">say hello</a>
                </Container>
                <Container className="skills">
                    <ul id="ulid" class="list-group list-group-flush" style={{position:"absolute",right:0,fontSize:22}}>
                        <li class="list-group-item" style={{backgroundColor:"transparent",fontWeight:500}}>React</li>
                        <li class="list-group-item" style={{backgroundColor:"transparent",fontWeight:500}}>Javascript</li>
                        <li class="list-group-item" style={{backgroundColor:"transparent",fontWeight:500}}>Figma</li>
                        <li class="list-group-item" style={{backgroundColor:"transparent",fontWeight:500}}>HTML</li>
                        <li class="list-group-item" style={{backgroundColor:"transparent",fontWeight:500}}>CSS</li>
                    </ul>
                </Container>
            </Container>
            <div id="aboutbottom" style={{display:"none",maxHeight:150,fontSize:"13px",textAlign:"center"}}>I am a frontend developer and ui / ux designer. I can provide you with innovatiove product development, highend web design and effective branding. I am currently based in Bangalore, India and is looking for a web developer / designer job.</div>
            <div className="d-flex align-items-center justify-content-center"><img src={scrollimg} onClick={handleScroll} alt="scroll button"className="scrollbutton" id="scrollbutton" style={{height:"10%",width:"10%",position:"absolute",bottom:"5%"}}/></div>
        </Container>
    )
}

// <Button className="mb-4 rounded-0" variant="outline-dark" size="sm" style={{width:"90px"}}>

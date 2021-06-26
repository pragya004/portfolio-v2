import React from 'react'
import Container from 'react-bootstrap/Container'
import githublogo from "../Images/githublogo.svg"
import linkedinlogo from "../Images/linkedinlogo.svg"
import gmaillogo from "../Images/gmaillogo.svg"
import "./Contact.css"


function Contact() {

    return (
            <div style={{backgroundColor:"white"}} id={'contacts'}>
                <Container style={{color:"grey"}} className="w-75 d-flex flex-column justify-content-center footerContainer">
                    <div><h5 className="mt-4">Let's talk</h5>
                    <hr style={{backgroundColor:"grey", width:"80%",float:"left"}} /></div>
                    <br></br>
                    <Container className="d-flex mb-4 justify-content-between footer">
                        <div className="mb-4 mt-4 d-flex flex-row justify-content-center"><img src={githublogo} className="mr-2" style={{height:25,width:25}}/><a className="contactlink" href="https://github.com/pragya004" target="_blank">github</a></div>
                        <div className="mb-4 mt-4 d-flex flex-row justify-content-center"><img src={linkedinlogo} className="mr-2" style={{height:25,width:25}}/><a className="contactlink" href="https://www.linkedin.com/in/pragya-kumari-72979a141" target="_blank">linkedin</a></div>
                        <div  className="mb-4 mt-4 d-flex flex-row justify-content-center"><img src={gmaillogo} className="mr-2" style={{height:25,width:25}}/><a className="contactlink" href="https://mail.google.com/mail/?view=cm&amp;source=mailto&amp;to=pragyakumari004@gmail.com" target="_blank">email</a></div>
                    </Container>
                </Container>
            </div>

    )
}

export default Contact

import React from 'react'
import Container from 'react-bootstrap/Container'
import githublogo from "../Images/githublogo.svg"
import linkedinlogo from "../Images/linkedinlogo.svg"
import gmaillogo from "../Images/gmaillogo.svg"
import "./Contact.css"


function Contact() {

    return (
            <div style={{backgroundColor:"white"}} id={'contacts'}>
                <Container style={{color:"grey"}} fluid className="p-4 d-flex align-items-center flex-column justify-content-center">
                    <div><h5 className="mt-4">Let's talk</h5>
                    <hr style={{backgroundColor:"grey", width:"80%",float:"left"}} /></div>
                    <br></br><br></br>
                    <Container className="d-flex w-75 mb-4 align-items-center justify-content-around">
                        <div className="mb-4 mt-4"><img src={githublogo} className="mr-4" style={{height:25,width:25}}/><a className="contactlink" href="https://github.com/pragya004" target="_blank">github</a></div>
                        <div className="mb-4 mt-4"><img src={linkedinlogo} className="mr-4" style={{height:25,width:25}}/><a className="contactlink" href="https://www.linkedin.com/in/pragya-kumari-72979a141" target="_blank">linkedin</a></div>
                        <div  className="mb-4 mt-4"><img src={gmaillogo} className="mr-4" style={{height:25,width:25}}/><a className="contactlink" href="https://mail.google.com/mail/?view=cm&amp;source=mailto&amp;to=pragyakumari004@gmail.com" target="_blank">email</a></div>
                    </Container>
                </Container>
            </div>

    )
}

export default Contact

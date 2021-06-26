import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

export default function NavBar() {
    return (
        <div>
            <Navbar expand="md" style={{backgroundColor:"#dddddd",color:"#e3e3e3",position:"fixed", top:0,left:0, width:"100%",zIndex:100}}>
                <Navbar id="responsive-navbar-nav">
                        <Nav className="ml-0 mt-1 mb-1" defaultActiveKey="1">
                                <Nav.Link href="#home" eventKey="1" style={{color:"#8f8f8f",fontSize:"15px"}}>HOME</Nav.Link>
                                <Nav.Link href="#projects" eventKey="2" style={{color:"#8f8f8f",fontSize:"15px"}}>PROJECT</Nav.Link>
                                <Nav.Link href="#contacts" eventKey="3" style={{color:"#8f8f8f",fontSize:"15px"}}>CONTACT</Nav.Link>
                                <Nav.Link href="https://drive.google.com/file/d/18BSQiXdTgewEBD7PTIqik5U1Y2pYEUDX/view" eventKey="0" target="_blank" style={{color:"#8f8f8f",fontSize:"15px"}}>RESUME</Nav.Link>
                        </Nav>
                </Navbar>

            </Navbar>
        </div>
    )
}

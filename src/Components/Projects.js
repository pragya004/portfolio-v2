import React, {useRef, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import screen2 from "../Images/screen2.svg"
import openLink from "../Images/openLink.svg"
import Badge from 'react-bootstrap/Badge'
import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import cardsData from "./cardsData"
import "./Projects.css"

gsap.registerPlugin(ScrollTrigger)

function Projects() {

    const cardRevealRefs = useRef([]);
    cardRevealRefs.current = [];

    useEffect(() => {
        cardRevealRefs.current.forEach((e,index) => {
            gsap.fromTo(e, {
                autoAlpha:0
            }, {
                duration:1,
                autoAlpha:1,
                ease:"none",
                scrollTrigger : {
                    id : `section-${index+1}`,
                    trigger: e,
                    start:'top center+=150',
                    toggleActions : 'play none none reverse',
                    makers:true
                }
            })
        })
        
    },[])

    const addToRefs = (e) => {
        if(e && !cardRevealRefs.current.includes(e)){
            cardRevealRefs.current.push(e)
        }
    }

    return (
        
        <Container fluid style={{backgroundImage:`url(${screen2})`,paddingLeft:"5%",paddingRight:"5%",paddingTop:"2%"}} id={'projects'}>
            <Container fluid className="d-flex align-items-center justify-content-center mt-4"><h3>PROJECTS</h3></Container>
            <Container fluid  className="d-flex align-items-start justify-content-around flex-wrap">
                {cardsData.map( (data,index) => (
                    <Card key={data.title}  id={`body${index}`} ref={addToRefs} style={{width:"450px",minHeight:"310px"}} className="m-4">
                        <Card.Header as="h4" className="d-flex justify-content-between align-items-center"><div className="mr-1" class="heading">{data.title}</div><a href={data.site} target="_blank"><img src={openLink} alt="open link"/></a></Card.Header>
                        <Card.Body  id={`cardbody${index}`} className="d-flex justify-content-around flex-column">
                            <Card.Text class="cardtext" style={{fontSize:13,maxWidth:300}} className = "mt-2">{data.content}</Card.Text>
                            <Container fluid className="d-flex flex-wrap pt-2 pl-0 pr-0">
                                {data.badges.map(badge => 
                                    <Badge pill className="border border-dark pl-3 pr-3 pt-2 pb-2 mb-3 mr-2" style={{fontWeight:"lighter"}}>{badge}</Badge>
                                )}
                            </Container>
                        </Card.Body>
                    </Card>
                    )
                )}
            </Container> 
               
        </Container>
    )
}

                
export default Projects

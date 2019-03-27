import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { IGEmbedFrame } from 'grailsoft-modules'

import Work from '../Work'

export default function Home (props) {
  return (
    <Container className='Home'>
      <Row className='d-flex flex-column align-items-center justify-content-center' style={{height: '80vh'}} id='Home'>
        <Col className='d-flex flex-column align-items-center justify-content-center' md='8' style={{textAlign: 'center'}}>
          <h1>GRAILSOFT</h1>
          <h1>TECHNICAL</h1>
          <h1>SOLUTIONS</h1>
        </Col>
      </Row>
      <hr />
      <Row id='frontend'>
        <Col md='6' />
        <Col md='6' style={{textAlign: 'center'}}>
          <h1> Front End </h1>
          <h3>Better Design / Better Experience</h3>
          <p>
            "We take design seriously. Our team of Front End Experts will make sure your project is always looking its best."
          </p>
        </Col>
      </Row>
      <hr />
      <Row id='backend'>
        <Col md='6' style={{textAlign: 'center'}}>
          <h1> Back End </h1>
          <h3>Robust and Reliable</h3>
          <p>
            "It is what goes on behind the curtains that drives the show. We will help you build your project on stress-tested systems that function effortlessly."
          </p>
        </Col>
        <Col md='6' />
      </Row>
      <hr />
      <Row id='cloudend'>
        <Col md='3' />
        <Col md='6' style={{textAlign: 'center'}}>
          <h1> Data Solutions </h1>
          <h3>Scale to Meet Your Size</h3>
          <p>
            "Your data is one of your most valuable assests. We can guide you through a suite of data management solutions to find what is best for you."
          </p>
        </Col>
        <Col md='3' />
      </Row>
      <hr />
      <Row>
        <Col>
          <Work />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <IGEmbedFrame token={process.env.REACT_APP_INSTAGRAM_API} hovercolor='white' squares />
        </Col>
      </Row>
      <hr />
      <Row id='contacts' style={{height: '80vh'}}>
        <Col>
          <h1>Contact Us</h1>
          <h2>You've got a great idea for an app</h2>
          <h2>Maybe it's time to give your online presence an overhaul</h2>
          <h2>Do you have a problem, and feel like a computer should fix it?</h2>
          <h4>Perhaps you just want to say hi</h4>
          <h2>Send us an email!</h2>
          <h2><a href='mailto: info@grailsoft.com'>info@grailsoft.com</a></h2>
        </Col>
      </Row>
    </Container>
  )
}

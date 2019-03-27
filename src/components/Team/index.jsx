import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import kheiferPic from '../../img/kheifer.jpg'
import aimeePic from '../../img/aimee.jpg'
import richPic from '../../img/rich.jpg'
import davidPic from '../../img/david.png'
import amirahPic from '../../img/amirah.jpg'
import nicoPic from '../../img/nico.jpg'

export default function Team (props) {
  return (
    <Container id='Team'>
      <Row className='d-flex justify-content-center' >
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/kheifer/' target='_blank' rel='noreferrer noopener'>
            <img src={kheiferPic} alt='kheifer' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>Kheifer Fuller</h2>
            <h4>Senior Backend Engineer</h4>
            <h4>Director of Sales</h4>
          </a>
        </Col>
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/aimee-loomis-ab989015a/' target='_blank' rel='noreferrer noopener'>
            <img src={aimeePic} alt='aimee' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>Aimee Loomis</h2>
            <h4>Community Outreach</h4>
            <h4>Director of Human Resources</h4>
          </a>
        </Col>
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/richard-garrick/' target='_blank' rel='noreferrer noopener'>
            <img src={richPic} alt='rich' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>Richard Garrick</h2>
            <h4>Developer</h4>
            <h4>Director of Finance</h4>
          </a>
        </Col>
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/davidcuthell/' target='_blank' rel='noreferrer noopener'>
            <img src={davidPic} alt='david' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>David Cuthell III</h2>
            <h3>Developer</h3>
          </a>
        </Col>
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/amirahoxendine/' target='_blank' rel='noreferrer noopener'>
            <img src={amirahPic} alt='amirah' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>Amirah Oxendine</h2>
            <h3>Senior Design Engineer</h3>
          </a>
        </Col>
        <Col md='6' xl='4' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <a href='https://www.linkedin.com/in/nico-raethke/' target='_blank' rel='noreferrer noopener'>
            <img src={nicoPic} alt='nico' id='profilePic' />
            <hr style={{margin: '10px'}} />
            <h2>Nicholas Ræthke</h2>
            <h4>Project Manager</h4>
            <h4>Writer & Developer</h4>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

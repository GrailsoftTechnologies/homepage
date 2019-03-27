import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import examplePic from '../../example.jpg'
import hairlair from '../../img/hairlairpage.jpg'
import thunderbird from '../../img/tbirdpage.jpg'
import ncba from '../../img/ncbapage.jpg'
import starday from '../../img/stardaypage.jpg'
import bam from '../../img/bampage.jpg'
import zachsshack from '../../img/zachsshackpage.jpg'

export default function Projects (props) {
  return (
    <Container id='Projects'>
      <Row style={{minHeight: '70vh'}}>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='thunderbird'>
          <Row style={{width: '100%'}}>
            <Col xl='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block' src={thunderbird} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='thunderbird' />
            </Col>
            <Col xl='8' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>Thunderbird Bar</h1>
              <h2>We took a simple approach to creating some shit and then something else</h2>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='hairlair'>
          <Row style={{width: '100%'}}>
            <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>The Hair Lair</h1>
              <h2>We took a simple approach to creating some shit and then something else</h2>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block'src={hairlair} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='hairlair' />
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='starday'>
          <Row style={{width: '100%'}}>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block'src={starday} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='starday' />
            </Col>
            <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>Starday Tavern</h1>
              <h2>We took a simple approach to creating some shit and then something else</h2>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='ncba'>
          <Row style={{width: '100%'}}>
            <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>Nashville Classical Ballet Academy</h1>
              <h2>We took a simple approach to creating some shit and then something else</h2>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block'src={ncba} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='ncba' />
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='bam'>
          <Row style={{width: '100%'}}>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>Brick and Motor Pizza</h1>
            </Col>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block'src={bam} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='bam' />
            </Col>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='zachsshack'>
          <Row style={{width: '100%'}}>
            <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
              <img className='d-none d-xl-block'src={zachsshack} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='zachsshack' />
            </Col>
            <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
              <h1>Zach's Shack</h1>
              <h2>We took a simple approach to creating some shit and then something else</h2>
              <h3>We took a simple approach to creating some shit and then something else. We took a simple approach to creating some shit and then something else</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

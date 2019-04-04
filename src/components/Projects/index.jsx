import React from 'react'
import { Container, Col, Row } from 'reactstrap'

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
          <a href='https://www.thunderbirdbarpdx.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col xl='4' className='d-flex flex-column align-items-center justify-content-center'>
                  <img className='d-none d-xl-block' src={thunderbird} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='thunderbird' />
              </Col>
              <Col xl='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Thunderbird Bar</h1>
                <h2>A clean layout for a cool bar</h2>
                <h3>Thunderbird wanted a website that would capture their atmosphere and allow them to engage with their customers</h3>
              </Col>
            </Row>
          </a>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='hairlair'>
          <a href='https://www.hairlairpdx.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>The Hair Lair</h1>
                <h2>A clear approach to booking</h2>
                <h3>The Hair Lair asked for a simple appointment system that would be hassle-free for the owner and the customer</h3>
              </Col>
              <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-none d-xl-block'src={hairlair} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='hairlair' />
              </Col>
            </Row>
          </a>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='starday'>
          <a href='https://www.stardaytavern.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-none d-xl-block'src={starday} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='starday' />
              </Col>
              <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Starday Tavern</h1>
                <h2>Events, specials, swag, and more</h2>
                <h3>There's a bit of a following surrounding the Starday Tavern, and the owners were looking for a way to keep customers engaged and welcome newcomers. Free hugs!</h3>
              </Col>
            </Row>
          </a>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='ncba'>
          <a href='https://www.ncbacademy.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Nashville Classical Ballet Academy</h1>
                <h2>A new look for a new school</h2>
                <h3>NCBA was looking for a tailor-made website that would allow them flexibility as their business grew</h3>
              </Col>
              <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-none d-xl-block'src={ncba} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='ncba' />
              </Col>
            </Row>
          </a>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='bam'>
          <a href='https://www.brickandmotorpdx.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-none d-xl-block'src={bam} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='bam' />
              </Col>
              <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Brick and Motor Pizza</h1>
                <h3>BAM Pizza needed a website to reflect their oven-baked pizzas; simple, yet satisfying</h3>
              </Col>
            </Row>
          </a>
        </Col>
        <Col className='d-flex flex-column align-items-center justify-content-center' xl='12' style={{textAlign: 'center', minHeight: '60vh', minWidth: '100%'}} id='zachsshack'>
          <a href='https://www.zachsshack.com' target='_blank' rel='noreferrer noopener'>
            <Row>
              <Col md='8' className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Zach's Shack</h1>
                <h2>A new look for a Hawthorne Staple</h2>
                <h3>After relying on facebook for years, Zach's Shack needed a better platform to show off their hot dogs</h3>
              </Col>
              <Col md='4' className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-none d-xl-block'src={zachsshack} style={{ maxHeight: '370px', maxWidth: '370px' }} alt='zachsshack' />
              </Col>
            </Row>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

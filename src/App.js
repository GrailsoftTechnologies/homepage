import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavHashLink as NavLink } from 'react-router-hash-link'
// import { NavLink } from 'react-router-dom'
import { NavigationBar, Footer, Router, RouterSection } from 'grailsoft-modules'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import logo from './img/GLogo-white.jpg'
// import samplePDF from './sample.pdf'
import Home from './components/Home'
import Projects from './components/Projects'
import Team from './components/Team'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavigationBar sticky='top' text='black' background='white' hovercolor='grey' logo={logo}>
          <Nav className='ml-auto nav-options' navbar>
            <NavItem>
              <NavLink className='nav-link' to={'/#contacts'}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to={'/team'}>Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to={'/projects'}>Projects</NavLink>
            </NavItem>
          </Nav>
        </NavigationBar>
        <Router text='black' background='white' hovercolor='green'>
          <RouterSection exact path='/'>
            <Home />
          </RouterSection>
          <RouterSection path='/projects'>
            <Projects />
          </RouterSection>
          <RouterSection path='/team'>
            <Team />
          </RouterSection>
        </Router>
        <Footer text='black' background='white' hovercolor='grey' />
      </div>
    )
  }
}

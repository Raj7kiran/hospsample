import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
  
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Name</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
           <Nav className='ml-auto'>
                           
                <NavDropdown title='userinfo' id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                   <LinkContainer to='/addusers'>
                    	<NavDropdown.Item>Add Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/'>
	                  <NavDropdown.Item>
	                    Logout
	                  </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
              
             
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/addusers'>
                    	<NavDropdown.Item>Add Users</NavDropdown.Item>
                  </LinkContainer>
                  
                </NavDropdown>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
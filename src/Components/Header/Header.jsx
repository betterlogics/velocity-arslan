import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/logo.png";
import {Link} from 'react-router-dom';
import "./Header.css";
function Header() {
  return (
    <div>
      {/* navbar section  */}
      <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <img className="logos" src={Logo} alt="wait for internet" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mt-5">
              <Link  to="/" className="home  hover-warning">HOME</Link>
              <div class="dropdown mb-1">
  <Link to="/Aboutmain" class=" home ">ABOUT</Link>
  <div class="dropdown-content">
    <Link to="/Whymain">Why Us</Link>
    <Link to="/Privacymain">Privacy Policy</Link>
    
  </div>
</div>
              <Link to="/Servamain"  className="home ">SERVICES</Link>
              <Link to="/Membermain"  className="home  ">BECOME A MEMBER</Link>
              <div class="dropdown mb-1">
  <Link to="/Classmain"  className="home ">CLASSES</Link>
  {/* <div class="dropdown-content">
    <Link to="/">Shadule</Link>
    
  </div> */}
</div>
              <Link to="/Gallerymain"  className="home ">GALLERY</Link>
              <Link to="/Blogmain"  className="home ">BLOG</Link>
              <Link to="/Contactmain"  className="home ">CONTACT</Link>
            </Nav>
            {/* <form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
  <input type="text" placeholder="Search.." name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form> */}
            <Form className="fff  mt-4 d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="bbb" >Search</Button>
                </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

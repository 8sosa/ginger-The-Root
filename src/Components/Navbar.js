import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Container, Navbar} from 'react-bootstrap';
import Logo from './Images/logo.png'
import './Navbar.css';

function GingerNavbar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="gingerNavbar" as="nav">
        <Container className='gingerNavbarContainer'>
          <Navbar.Brand href="/home">
            <img src={Logo} alt='Ginger Company Logo' />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="navLinks">
            <a href="#home" className="navLink" aria-label="Home">Home</a>
            <a href="#about" className="navLink" aria-label="About Us">About Us</a>
            <a href="#services" className="navLink" aria-label="Services">Services</a>
            <a href="#testimonials" className="navLink" aria-label="Testimonials">Testimonials</a>
            <a href="#contact" className="navLink" aria-label="Contact Us">Contact Us</a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default GingerNavbar;  
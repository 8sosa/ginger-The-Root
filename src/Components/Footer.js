import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Col, Form, Row} from 'react-bootstrap';
import Logo from './Images/logo.png'
import './Footer.css';

function GingerFooter() {
    return (
      <div collapseOnSelect expand="lg" className="gingerFooter" as="footer">
        <Row className='gingerFooterContainer'>
          <Col lg={2} href="/home" className='d-flex flex-column align-items-center'>
            <img src={Logo} alt='Ginger Company Logo' className='logo'/>
          </Col>
          <Col md={'auto'} className='d-flex flex-column widthFit'>
                <a href='#top' className="gingerFooterLinkHeader">ginger</a>
                <a href='#top' className="gingerFooterLink">Home</a>
                <a href='#top' className="gingerFooterLink">About</a>
                <a href='#top' className="gingerFooterLink">Services</a>
                <a href='#top' className="gingerFooterLink">Testimonials</a>
                <a href='#top' className="gingerFooterLink">Contact Us</a>
          </Col>
          <Col md={'auto'} className='d-flex flex-column widthFit'>
                <a href='#top' className="gingerFooterLinkHeader">contact</a>
                <a href='#top' className="gingerFooterLink">Email</a>
                <a href='#top' className="gingerFooterLink">Instagram</a>
          </Col>
          <Col lg={5} className='d-flex flex-column'>
            <span className="gingerFooterLinkHeader">join our newsletter</span>
            <div className='news d-flex flex-row mt-3'>
                <Form.Control placeholder="Email Address" aria-label="Email Address" aria-describedby="call to action" className='inputField'/>
                <div className='contactBtn'><p className='p-0 m-0'>submit</p></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default GingerFooter;  
import './App.css';
import GingerCarousel from './Components/Carousel';
import Clients from './Components/Clients';
import GingerNavbar from './Components/Navbar';
import About from './Components/Images/about.png';
import Ls from './Components/Images/ls.png'
import GingerFooter from './Components/Footer';

function App() {
  return (
    <div className="App">
      <GingerNavbar />
      <section className='heroHeader'>
        <h1 className='heroHeaderText'>We don't just create media,</h1>
        <h1 className='heroHeaderText'>we craft experiences.</h1>
        <GingerCarousel />
        <span className='clientsText'>Worked With</span>
        <Clients />
      </section>
      <section id='about' className='about'>
          <div className='aboutTextBox'>
            <span className='aboutText'>About Us</span>
            <h1 className='aboutText2'>Who we are and what we believe.</h1>
            <p className='aboutText1'>At the heart of Ginger the Collective lies a dynamic team of unfettered storytellers. We are more than a media company; we are artisans of narrative, driven by the belief that every business has a unique story waiting to be told. Our mission is to unravel these stories flawlessly, enabling businesses to connect authentically with their customers and clients.</p>
          </div>
          <div class="aboutImageContainer">
            <img src={About} alt="Camera man at a photoshoot" className="aboutImage" />
            <div class="tintOverlay"></div>
          </div>
      </section>
      <section id='services' className='services'>
        <h1 className='heroHeaderText'>services</h1>
        <div className='servicesCards'>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
          <div className='servicesCard'>
            <img src={Ls} alt='Live streaming example' className='cardImage' />
            <span className='subHeading'>live streaming</span>
            <p className='bodyText'>Real-time sharing of events, presentations, and experiences with a global audience.</p>
          </div>
        </div>
      </section>
      <Clients />
      <section id='testimonials' className='d-flex flex-column mt-5'>
        <h1 className='heroHeaderText1 mt-5'>Testimonials.</h1>
        <div className='testimonials'>
          <div className="servicesCardGroup">
            <div className="image-wrapper">
              <img src={Ls} alt="ALEK QUASAR example" className="cardImage1" />
              <div className="badge" />
            </div>
            <div className="servicesCard pt-5">
              <span className="subHeading">ALEK QUASAR</span>
              <p className="bodyText">At Ginger the Collective, we don't just create media; we craft experiences. With a passion for storytelling and a commitment to excellence.</p>
            </div>
          </div>
          <div className="servicesCardGroup">
            <div className="image-wrapper">
              <img src={Ls} alt="ALEK QUASAR example" className="cardImage1" />
              <div className="badge" />
            </div>
            <div className="servicesCard pt-5">
              <span className="subHeading">ALEK QUASAR</span>
              <p className="bodyText">At Ginger the Collective, we don't just create media; we craft experiences. With a passion for storytelling and a commitment to excellence.</p>
            </div>
          </div>
          <div className="servicesCardGroup">
            <div className="image-wrapper">
              <img src={Ls} alt="ALEK QUASAR example" className="cardImage1" />
              <div className="badge" />
            </div>
            <div className="servicesCard pt-5">
              <span className="subHeading">ALEK QUASAR</span>
              <p className="bodyText">At Ginger the Collective, we don't just create media; we craft experiences. With a passion for storytelling and a commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='services d-flex flex-column align-items-center'>
          <span className='heroHeaderText1 mt-4'>are you ready ?</span>
          <h1 className='heroHeaderText2'>send us a dm on instagram</h1>
          <button className='contactBtn'>instagram</button>
        </div>
      </section>
      <GingerFooter />
    </div>
  );
}

export default App;

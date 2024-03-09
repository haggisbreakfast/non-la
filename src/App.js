import React from "react";
import "./App.css";
import { GlobalStyle, Header, About, PageContainer, Link, Image, SocialContainer, Portrait, Bio, VideoSection, PressSection, PressLogo } from "./Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSpotify, faBandcamp } from '@fortawesome/free-brands-svg-icons';
import exclaim from "./exclaim.png";
import xtra from "./xtra.png";
import treble from "./treble.png";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageContainer>
      <Header>
      </Header>

      <About>
      <Portrait>
       </Portrait>


      <Bio>
      <p>New record out on <a class="mint-link" href="https://mintrecs.com/">mint records</a> March 29.</p>
            <SocialContainer>
              <Link href="mailto:nonlaband@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Link>
              <Link href="https://www.facebook.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link href="https://www.instagram.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://open.spotify.com/album/5vFw06omAAEVLo7JTobZcp?si=nktnYZFZSEOk4zmbSkwlrQ" target="blank"><FontAwesomeIcon icon={faSpotify} /></Link>
              <Link href="https://nonla.bandcamp.com/album/not-in-love" target="blank"><FontAwesomeIcon icon={faBandcamp} /></Link>
            </SocialContainer>
        </Bio>



        </About>
      </PageContainer>
        <VideoSection>
        <iframe 
        src='https://www.youtube.com/embed/HPWt95KBzL0?si=NGec3WantLauLxFb'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
        </VideoSection>
      < PressSection>
      <div class="press-links">
        <a href="https://www.treblezine.com/watch-a-rousing-game-of-dodgeball-in-non-las-video-for-take-care/" aria-label="Link to an article on the music video for 'Take Care' published by Treblezine"><PressLogo $pressLogo={treble} /></a>
        <a href="https://xtramagazine.com/culture/music/non-la-vancouver-262929" aria-label="Link to an interview with Non La published by Xtra Magazine"><PressLogo $pressLogo={xtra} /></a>
        <a href="https://exclaim.ca/music/article/non-la-details-sophomore-album-like-before" aria-label="Link to the article 'Non La Details Sophomore Album Like Before' published by exclaim"><PressLogo $pressLogo={exclaim} /></a>
      </div>
      </PressSection>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle, Header, About, PageContainer, Link, Image, SocialContainer, Portrait, Bio } from "./Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSpotify, faBandcamp } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageContainer>
      <Header></Header>

      <About>

      <Bio>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit malesuada praesent penatibus sociosqu luctus.</p>
            <SocialContainer>
              <Link href="mailto:nonlaband@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Link>
              <Link href="https://www.facebook.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link href="https://www.instagram.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://open.spotify.com/album/5vFw06omAAEVLo7JTobZcp?si=nktnYZFZSEOk4zmbSkwlrQ" target="blank"><FontAwesomeIcon icon={faSpotify} /></Link>
              <Link href="https://nonla.bandcamp.com/album/not-in-love" target="blank"><FontAwesomeIcon icon={faBandcamp} /></Link>
            </SocialContainer>
        </Bio>

       <Portrait>
       </Portrait>



        </About>
        <Image></Image>
      </PageContainer>
    </div>
  );
}

export default App;

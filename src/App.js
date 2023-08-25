import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle, Header, About, PageContainer, Link, Image, SocialContainer } from "./Components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSpotify, faBandcamp } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <PageContainer>
        <About>
          <p>
            Debut album Not in Love on <Link href="https://nonla.bandcamp.com/album/not-in-love">Kingfisher Bluez</Link> and <Link href="https://lostsoundtapes.com/collections/lost-sound-tapes-releases/products/non-la-not-in-love-cassette-tape">Lost Sound Tapes</Link>.
            </p>
            <SocialContainer>
              <Link href="mailto:nonlaband@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Link>
              <Link href="https://www.facebook.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link href="https://www.instagram.com/nonlaband/" target="blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://open.spotify.com/album/5vFw06omAAEVLo7JTobZcp?si=nktnYZFZSEOk4zmbSkwlrQ" target="blank"><FontAwesomeIcon icon={faSpotify} /></Link>
              <Link href="https://nonla.bandcamp.com/album/not-in-love" target="blank"><FontAwesomeIcon icon={faBandcamp} /></Link>
            </SocialContainer>

        </About>
        <Image></Image>
      </PageContainer>
    </div >
  );
}

export default App;

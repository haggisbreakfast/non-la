import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle, Header, About, PageContainer, Image } from "./Components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <PageContainer>
        <About>
          <p>
            Non La is homo rock 'n roll for the queers and also non-queers.
            Debut album Not in Love on Kingfisher Bluez and Lost Sound Tapes.
          </p>
        </About>
        <Image></Image>
      </PageContainer>
    </div>
  );
}

export default App;

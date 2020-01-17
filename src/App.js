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
            blablablablablablablablabla blablablablablablablablabla
            blablablablablablablablablavblablablablablablablablablav
            vvblablablablablablablablablablablablablablablablablablab
            lablablablablablablablablablablablablablablablablablablab
            lablablablablablablablablablablablablablablablablablablab
            lablablablablablablablablablablablablablablablablablablab
            lablablablablabla
          </p>
        </About>
        <Image></Image>
      </PageContainer>
    </div>
  );
}

export default App;

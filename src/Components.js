// import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import banner from "./banner.png";

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono'); */
  body {
    font-family: 'Roboto Mono', monospace;
      color: grey;
      margin: auto;

  }
`;

export const Header = styled.header`
  background: url(${banner}) no-repeat center;
  background-size: cover;

  height: 25vh;
`;

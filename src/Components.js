// import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import banner from "./banner-transparent.png";
import rocks from "./rocks.png";
import portrait from "./portrait.png";
import albumTitle from "./like-before.png";
// import exclaim from "./exclaim.png";
// import xtra from "./xtra.png";
// import treble from "./treble.png";


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    font-weight: lighter;
    color: grey;
    margin: auto;
    height: 100vh;
    @media(max-width: 650px){
      font-size: 18px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  padding-top: 2rem;
  left: 0;
  z-index: 1;
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  background-size: contain;

  @media(max-width: 650px) {
    height: 18vw;
  }

&:before {
  content: '';
  background: url(${banner}) no-repeat;
  background-position: center;
  background-size: 100%;
  width: 70%;
  height: 12rem;
}
`;

export const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  background-color: #F6ABCC;
  color: white;
  background-size: 40rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow: hidden;
  @media(max-width: 650px){
      align-items: flex-start;
    }

`;


export const About = styled.div`
  display: flex;
  align-items: center;
  width: 100%;  
  text-align: left;
  margin-bottom: -1rem;
  @media(max-width: 650px){
  align-items: flex-start;
  max-width: 100%;
  padding-bottom: 0;
  flex-direction: column;
  }
`;

export const Portrait = styled.div`
background: url(${portrait}) no-repeat;
background-size: cover;
background-position: center;
height: 120vh;
width: 70%;
@media(max-width: 650px){
  width: 100%;
  height: 70vh;
}
`

export const Bio = styled.div`
width: 30%;
font-size: 1.50rem;
padding: 5rem;
display: flex;
justify-content: center;
flex-direction: column;

@media(max-width: 650px){
width: 100%;
padding: 4rem 2rem;
height: 30vh;

}
`

export const SocialContainer = styled.div`
display: flex;

a {
  padding-right: 10px;
  font-size: 1.5rem;
  
  @media (max-width: 650px) {
    font-size: 16px;
    padding-right: 5px;
  }

}
`;


export const Link = styled.a`
color: white;
text-decoration: none;
&:hover {
  color: #83B3D7;
}
`;

export const PressSection = styled.div`
background: white;
padding: 4rem 8rem;
display: flex;
flex-direction: column;
@media (max-width: 650px) {
  padding: 2rem;
}
`;

export const PressLogo = styled.div`
max-width: 300px;
height: 100px;
background-image: url(${props => props.$pressLogo});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
@media (max-width: 650px) {
  max-width: 200px;
}

`;

export const VideoSection = styled.div`
background: url(${rocks}) no-repeat;
padding: 8rem;
background-size: 100%;
background-position: 50%;
@media (max-width: 650px) {
  padding: 6rem 1rem;
}
`;

export const Footer = styled.div`
background: url(${albumTitle}) no-repeat;
width: 100%;
height:  2rem;
background-size: contain;
display: flex;
justify-content: center;
color: #B2B3B8;
margin-bottom: 1rem;
margin-left: 1rem;
font-size: 1.5rem;
padding: 0 20%;
`;


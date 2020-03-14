// import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import banner from "./banner-transparent.png";
import background from "./nonla.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    font-weight: bold;
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
  align-items: center;
  justify-content: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 18vw;
  margin-bottom: 10px;
  z-index: 1;
  width: 100%;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
  font-size: 48px;
  font-weight: bold;
  color: white;
  opacity: 0.9;
  animation: colorchange 10s;
  -webkit-animation: colorchange 10s;
  -webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
      @keyframes colorchange
    {
      0%   {background: #FF9AA2;}
      16.666%  {background:  #FFB7B2;}
      33.333%  {background: #FFDAC1;}
      49.999%  {background: #E2F0CB;}
      66.666%  {background: #B5EAD7;}
      100% {background: #C7CEEA;}
    }

    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: #FF9AA2;}
      16.666%  {background:  #FFB7B2;}
      33.333%  {background: #FFDAC1;}
      49.999%  {background: #E2F0CB;}
      66.666%   {background: #B5EAD7;}
      100% {background: #C7CEEA;}
    }
&:before {
  content: '';
  background: url(${banner}) no-repeat;
  background-position: center;
  background-size: 100%;
  width: 360px;
  height: 140px;
  margin-top: 20px;
  @media(max-width: 650px){

  width: 200px;
  height: 100px;
  }

}
`;

export const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  background: url(${background}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 25% 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1300px;
  overflow: hidden;
  padding: 0 60px;
  @media(max-width: 650px){
      align-items: flex-start;
    }

`;


export const About = styled.div`
  color: white;
  max-width: 30%;
  overflow-wrap: break-word;
  text-align: left;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
  padding-bottom: 30%;
  padding-right: 10%;
  @media(max-width: 650px){
  align-items: flex-start;
  padding-top: 30%;
  max-width: 100%;
  padding-bottom: 0;

  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SocialContainer = styled.div`
display: flex;
padding-top: 20px;

a {
  padding-right: 10px;
  font-size: 24px;

}
`;


export const Link = styled.a`
color: white;
text-decoration: none;
&:hover {
  color: #B5EAD7;
}
`;
export const Image = styled.div``;

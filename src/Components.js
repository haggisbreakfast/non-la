// import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import banner from "./banner.png";
import background from "./nonla.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    font-weight: bold;
    color: grey;
     margin: auto;
    height: 100%;

      height: 100vh;




  }
`;

export const Header = styled.header`
  background: url(${banner}) no-repeat center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 220px;
  margin-bottom: 10px;
  z-index: 1;
  width: 100%;
`;
// export const
export const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  background: url(${background}) no-repeat;
  background-position: right -220px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1300px;
  overflow: hidden;
  padding: 0 60px;
`;
export const About = styled.div`
  color: white;
  max-width: 33%;
  overflow-wrap: break-word;
  text-align: left;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;

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
export const Image = styled.div``;

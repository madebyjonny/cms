import React from "react";
import styled from "styled-components";

const Mast = styled.section`
  position: fixed;
  background: ${props => props.theme.mast.background() || "#fff"};
  justify-content: center;
  align-items: center;
  z-index: 1;
  .branding {
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    padding: 0;
    marign: 0;
    display: flex;
  }
  ${props => {
    console.log(props);
    return props.sidebar
      ? `
      height: 100%;
      width:100%;
      max-width: 200px;
      nav {
        ul {
          flex-direction: column;
        }
      }
      a {
        display:block;
        text-transform: capitalize;
        padding: 0.3rem 0.5rem;
      }
      @media(max-width:500px){
        height: auto;
        width: 100%;
        max-width: 100%;
      }
   `
      : null;
  }}
`;

const MastComponent = props => <Mast {...props}>{props.children}</Mast>;

export default MastComponent;
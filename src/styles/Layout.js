import styled, { injectGlobal } from "styled-components";
import colors from './Colors';
import React from 'react';
import {withRouter} from 'react-router-dom';

// A simple component that shows the pathname of the current location
class Child extends React.Component {
  
    render() {
      const { router, params, location, routes } = this.props
  
      return (
        <div style="color:white">{location.pathname}</div>
      )
    }
  }
  
  export const Location =  withRouter(Child);



injectGlobal`
  html, 
  body{ 
    margin: 0;
    padding:0;
  }

  body {
	  font-size: 16px;
	  font-family: 'arial', sans-serif;
    background: ${colors.deepspace};
  }
`;

export const Header = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  padding: 1.5em 1em;
  margin-bottom: 2em;
  font-weight: 700;
  background: #fff;
  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.08);
  z-index: 999;

  a,
  a:hover,
  a:visited {
    color: #000;
    text-decoration: none;
  }
`;

export const Main = styled.main`
  margin-top: 100px;
  padding: 2em;
`;

export const Row = styled.div`
  display: ${props => props.block ? 'block' : 'flex'};
  flex-wrap: wrap;
  width: 100%;
  max-width: 700px;
  padding: 0 0.5em;
  margin: 0.5em 0 1.5em;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1.5;
  opacity: 0.5; 
`;
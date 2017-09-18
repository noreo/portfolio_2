import styled, { injectGlobal } from "styled-components";
import colors from './Colors';
import React from 'react';
import {withRouter} from 'react-router-dom';
import path_avenir_medium from './fonts/Avenir/Avenir-Medium.ttf';

const transition = '0.2s cubic-bezier(.33,.44,.29,.75)';



injectGlobal`
@font-face {
  font-family: 'Avenir-Medium';
  src: url(${path_avenir_medium}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

  html,
  body{ 
    margin: 0;
    padding:0;
  }

  body {
	  font-size: 16px;
	  font-family: 'Avenir-Medium',  serif;
    /*background: ${colors.deepspace};*/
  }
  *:hover{
    transition: all ${transition};
  }
`;
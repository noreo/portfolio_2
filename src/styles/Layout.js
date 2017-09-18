import styled, { injectGlobal } from "styled-components";
import colors from './Colors';
import React from 'react';
import {withRouter} from 'react-router-dom';

const transition = '0.2s cubic-bezier(.33,.44,.29,.75)';

injectGlobal`
  html,
  body{ 
    margin: 0;
    padding:0;
  }

  body {
	  font-size: 16px;
	  font-family: 'arial', sans-serif;
    /*background: ${colors.deepspace};*/
  }
  *:hover{
    transition: all ${transition};
  }
`;
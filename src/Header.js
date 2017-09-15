import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'

import styled from 'styled-components';


const Head = styled.header`
  position:fixed;
  width:100%;
  top:0; left:0;
`


const Container = styled(Box)`
max-width: 1024px;
margin-left: auto;
margin-right: auto;
`

const Header = ({ children }) => (
  <Head>
  <Container is="header">
      <Flex>
    <Box width={1 / 2} px={2}>
      <Link to='/'>
      <svg width="27px" height="30px">
      <title>Home</title>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Header" transform="translate(0.000000, -19.000000)" fill="#050505">
              <g id="logo-min---black" transform="translate(0.000000, 19.000000)">
                  <g id="logo-min-2">
                      <polygon id="Fill-1" points="0 8 8 8 8 0 0 0"></polygon>
                      <polygon id="Fill-2" points="19 12 27 12 27 4 19 4"></polygon>
                      <polygon id="Fill-3" points="6 30 14 30 14 22 6 22"></polygon>
                  </g>
              </g>
          </g>
      </g>
  </svg>

      </Link>
    </Box>
    <Box width={1 / 2} px={2}>
      <nav>
         <button>sound</button>
         <button>contact</button>
          <button>FR</button>
      </nav>
    </Box>
    </Flex>
    </Container>
  </Head>
)

export default Header
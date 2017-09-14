import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'

import styled from 'styled-components';


const Head = styled.header`
  position:fixed;
`

const Header = ({ children }) => (
  <Head className="page-header">
    <Box width={1 / 2} px={2}>
      <Link to='/'>Home</Link>
    </Box>
    <Box width={1 / 2} px={2}>
      <nav>
        <ul>
          <li></li>
          <li><Link to='/projectbrewster'>  </Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </Box>
  </Head>
)

export default Header
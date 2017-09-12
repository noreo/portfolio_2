import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Header, Button, Buttonlink } from '../styles/styles';


const Session = styled(Flex) `
    height: 100vh;
`;


const Landing = () => (
    <Session className="landing">
        <h1 className="intro">My name is Aurélien, I make digital experiences for humans.</h1>
    </Session>
)
    


const Brewster = () => (
    <Session>
        <Box width={1 / 2} px={2}>
            <h3>Brewster club </h3>
            <h2>Brewster’s branding & eCommerce website </h2>
            <p>Art direction, UX design & UI design / Human Equation / 2016</p>
            <Buttonlink to='/projectbrewster'>View project</Buttonlink>
            <Button to='/projectbrewster'>View project</Button>
        </Box>
        <Box width={1 / 2} px={2}>
            Half width
     </Box>
    </Session>
)

const Home = () => (
    <section>
        <Landing />
        <Brewster />
    </section>
)

export default Home
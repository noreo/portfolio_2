import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import colors from './styles/Colors';
import { Route } from 'react-router-dom'


import styled, {css, ThemeProvider} from 'styled-components';


const routes = [
    { path: '/',
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    { path: '/bubblegum',
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    { path: '/shoelaces',
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ]

const Head = styled.header`
    position:fixed;
    width:100%;
    top:0; left:0;
    padding-top:0.5em;
`


const Container = styled(Box) `
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1em;
    box-sizing: content-box;
`

/*function SquareBt(props) {
    
    return (
        <SquareBtStyle fill="red" {...props}/>
    );
}
*/



const SquareBt = styled.button`
    background: none transparent;
    color: ${props => props.theme.main};
    font-size: 1em;
    margin-left: 1em;
    padding: 0;
    border: 0.5px solid ${props => props.theme.main};
    height:3.5em;
    width:3.5em;
    line-height:1.5em;
    position: relative;

    *{
    height: ${props => props.iconsize || "1.5"}em;
        width:${props => props.iconsize || "1.5"}em;
        display:block;  
        position:absolute;
        top: 50%;
        margin-top: ${props => props.iconsize ? (props => props.iconsize/ -2) : "-0.75"}em;
        margin-left: ${props => props.iconsize ? (props => props.iconsize/ -2) : "-0.75"}em;
        left: 50%;
    }
    ${props => props.noborders && css`
    border-color:transparent;
    border-radius: ${props => props.iconsize || "1.5"}em;
    `}

    &:hover{
        border-color:${colors.brightturquoise}
    }
`; 

SquareBt.defaultProps = {
	theme: {
		main: colors.black
	}
}

// Define what props.theme will look like
const theme_light = {
	main: colors.bve_torchred
};


function Logomin(props) {
    return (
    <svg width="27px" height="30px">
        <title>logo</title>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Header" transform="translate(0.000000, -19.000000)" fill={props.fill || colors.black}>
                <g id="logo-min" transform="translate(0.000000, 19.000000)">
                    <polygon id="Fill-1" points="0 8 8 8 8 0 0 0"></polygon>
                    <polygon id="Fill-2" points="19 12 27 12 27 4 19 4"></polygon>
                    <polygon id="Fill-3" points="6 30 14 30 14 22 6 22"></polygon>
                </g>
            </g>
        </g>
    </svg>)
}

function IconContact(props){
    return(
<svg className="icon-contact" width="24px" height="24px" transform="translateY(2)">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Header" transform="translate(-886.000000, -25.000000)" stroke="#011011" fill-rule="nonzero">
            <g id="icon/contact-black" transform="translate(886.000000, 25.000000)">
                <path d="M0.5,0.5 L0.5,17.761443 L14.1122346,17.761443 L19.8076571,22.8785971 L19.8076571,17.761443 L23.5,17.761443 L23.5,0.5 L0.5,0.5 Z" id="contact"></path>
            </g>
        </g>
    </g>
</svg>
    );
}

function IconSound(props){
    return (

<svg width="32px" height="32px" >
<g id="style-guide" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g id="Components-Project" transform="translate(-48.000000, -329.000000)">
    <g id="Sound" transform="translate(44.000000, 297.000000)">
        <g id="icon_sound" transform="translate(4.000000, 32.000000)">
            <polygon id="Line" fill="#009FB8" fill-rule="nonzero" points="12.3426339 4.25 12.3426339 27.75 13.3426339 27.75 13.3426339 4.25"></polygon>
            <polygon id="Line-Copy-4" fill="#009FB8" fill-rule="nonzero" points="23.1640625 4.25 23.1640625 27.75 24.1640625 27.75 24.1640625 4.25"></polygon>
            <polygon id="Line-Copy" fill="#009FB8" fill-rule="nonzero" points="6.93191964 9.40625 6.93191964 25.40625 7.93191964 25.40625 7.93191964 9.40625"></polygon>
            <polygon id="Line-Copy-2" fill="#009FB8" fill-rule="nonzero" points="17.7533482 9.40625 17.7533482 25.40625 18.7533482 25.40625 18.7533482 9.40625"></polygon>
            <polygon id="Line-Copy-3" fill="#009FB8" fill-rule="nonzero" points="1.52120536 13.15625 1.52120536 21.65625 2.52120536 21.65625 2.52120536 13.15625"></polygon>
            <polygon id="Line-Copy-5" fill="#009FB8" fill-rule="nonzero" points="28.5747768 13.15625 28.5747768 21.65625 29.5747768 21.65625 29.5747768 13.15625"></polygon>
        </g>
    </g>
</g>
</g>
</svg>
    );
}

const Header = (props) => (
    <Head>
        <Route path='/' children={({ match }) => (
        <ThemeProvider theme={match ? theme_light: '' }>
        <Container>
            <Flex>
                <Box py={2} my={1/2}>
                    <Link to='/'>
                        <Logomin />
                    </Link>
                </Box>
                <Box px={2} py={1} ml='auto'>
                    <nav>
                        <SquareBt noborders iconsize="2"><IconSound/></SquareBt>
                        <SquareBt active><IconContact/></SquareBt>
                        <SquareBt><span>FR</span></SquareBt>
                    </nav>
                </Box>
            </Flex>
        </Container>
        </ThemeProvider>
  )}/>
    </Head>
)

export default Header
import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom'
import colors from './Colors';


const Button = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: ${colors.main};
border: 2px solid ${colors.black};
text-decoration: none;

${props => props.primary && css`
  background: ${colors.bve_torchred};
  color: white;
`}
`;

const Buttonlink = Button.withComponent(Link)


export {
  Button,
  Buttonlink
};
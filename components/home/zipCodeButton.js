import { Component } from 'react';
import styled from 'styled-components';


const Div = styled.div`
  margin: 25px;
  position: relative;
  top: -3em;
`;

const Input = styled.input.attrs({
  // we can define static props
  type: 'zipcode',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`

  color: #f2f2f2f2;
  font-size: 1.5em;
  border: 2px solid #f2f2f2f2;
  width: 30em;
  background: transparent;

  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ::placeholder {
    color: #f2f2f2f2;
    opacity: .5;
    width: 100%; 
    padding: 5px 0;
    font-size: 1.5em;
    font-family: TimposHeadline-Semibold;
    letter-spacing: 2px;
  }
`;

export default class zipCodeButton extends Component {

 render() {
   return (
   <Div>
     <Input 
       placeholder="00000" 
       size="1em"
       innerRef={x => { this.input = x }}
       onMouseEnter={() => this.input.focus()}
      />
   </Div>
    )
  }
}

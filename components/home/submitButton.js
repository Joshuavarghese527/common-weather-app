import { Component } from 'react';
import styled from 'styled-components';
import Arrow from 'react-icons/lib/md/arrow-downward';


const Div = styled.div`
  margin: 40px;
  position: relative;
  top: -4em;
`;
  

export default class submitButton extends Component {

 render() {
   return (
     <Div>
       <Arrow
         size={50} />
     </Div>
    )
  }
}
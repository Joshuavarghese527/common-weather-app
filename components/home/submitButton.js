import { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router'
import Link from 'next/link'

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
     <Link>
       <Arrow
         onClick={() => Router.push('/forecast')}
         size={50} />
         </Link>
     </Div>
    )
  }
}
import { Component } from 'react';
import styled from 'styled-components';


const Div = styled.div`
  margin: 50px;
  padding-top: 3em;  
`;

const H1 = styled.h1`
  font-size: 40px;
  font-family: TimposHeadline-Semibold;
  `;

const Paragraph = styled.p`
  font-size: 20px;
  font-family: apercu_regular_pro
`;

export default class homeText extends Component {

 render() {
   return (
     <Div>
          <H1>Weather app</H1>
          <Paragraph>Type in your zip code to see how awful the weather is 
          <br /> in your area this week</Paragraph>
       </Div>
    )
  }
}

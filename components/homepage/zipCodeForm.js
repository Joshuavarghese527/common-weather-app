import { Component } from 'react';
import Arrow from 'react-icons/lib/md/arrow-downward';
import Router from 'next/router';
import styled from 'styled-components';


//ZipCode Page Form

 const ZipCode_FormWrapper = styled.div`
  margin: 50px;
  position: relative;
  top: -3em;
  padding-bottom: 7em; 
`;

 const Input = styled.input.attrs({
  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`

  color: #f2f2f2f2;
  font-size: 1.5em;
  border: 2px solid #f2f2f2f2;
  width: 35em;
  background: transparent;
  display: inline-block;

  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ::placeholder {
    color: #f2f2f2f2;
    opacity: .5;
    padding: 5px 0;
    font-size: 1.5em;
    font-family: TimposHeadline-Semibold;
    letter-spacing: 2px;
     width: calc(100% - 160px);
  }
`;

 const ArrowButtonWrapper = styled.div`
  margin: 20px;
  position: relative;
  top: -1em;
  `;


export default class zipCodeForm extends Component {

render() {
   return (

      <ZipCode_FormWrapper>
           <form onSubmit={this.props.obtainWeather}>
              <Input 
               type="text"
               name="zipcode"
               placeholder="00000" 
               size="1em"
               innerRef={x => { this.input = x }}
               onMouseEnter={() => this.input.focus()}
              />
            <ArrowButtonWrapper>
                  <a href='#forecast'>
                  <Arrow
                     onClick={() => Router.push('/#forecast')}
                     size={50}
                     height={50}
                     color="white" 
                     onSubmit={this.props.obtainWeather}
                  />
                  </a>
             </ArrowButtonWrapper >
              </form>
       </ZipCode_FormWrapper> 

    )
  }
}

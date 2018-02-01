import {Component} from "react";
import styled from 'styled-components';

const ForecastWrapper = styled.section`
  background: #2d2d2d;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  position: absolute;
`;


export default class Forecast extends Component {

render() {
   return (
    <ForecastWrapper>
       <section id="forecast">
         <div className="container">
              <div className="box">
                 <div className="small_box">
                   <div className="line">
                           <p> Monday</p>
                      </div>
                  </div>
             </div>
              <div className="box">
                 <div className="small_box">
                   <div className="line">
                           <p> Tuesday </p>
                      </div>
                  </div>
             </div>
              <div className="box">
                 <div className="small_box">
                   <div className="line">
                           <p> Wenesday </p>
                      </div>
                  </div>
             </div>
             <div className="box">
                 <div className="small_box">
                   <div className="line">
                           <p> Thursday </p>
                      </div>
                  </div>
                  
             </div>
              <div className="box">
                 <div className="small_box">
                   <div className="line">
                            <p> Friday </p>
                      </div>
                  </div>
             </div>
             <div className="box">
                 <div className="small_box">
                   <div className="line">
                            <p> Saturday </p>
                      </div>
                  </div>
             </div>
          </div>
          <style jsx>{`

        .container {
        width: 100%;
        height: auto;
        background: #2d2d2d;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-flow: wrap;

        @media screen and (max-width: 1200px){
          .box{
            width: 40%;
          }
        }
         @media screen and (max-width: 600px){
          .box{
            width: 90%;
          }
        }
          
        .line {
             width: 100%;
             border-bottom: 1px solid rgba(242,242,242, .4);
             height: 60px; 
            }


        .box{
          width: 13%;
          height: 200px;
          background: #2d2d2d;
          margin-top: 13em;
          box-sizing: border-box;
          border: 3px solid rgba(242,242,242, .4);
                  -webkit-background-clip: padding-box; /* for Safari */
                  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
          font-size: 20px
          font-family: apercu_regular_pro
        }
        .small_box{
          width: 100%;
          height: 50px;
          background: #2d2d2d;

        }
      `}
      </style>
            { this.props.temperature && <p> { this.props.temperature} </p> }
        </section>
     </ForecastWrapper>
    );
   }
 }

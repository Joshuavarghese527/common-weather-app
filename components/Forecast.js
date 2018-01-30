import { Component } from 'react';
import Layout from './Layout'

export default class Forecast extends Component {

 render() {
   return (
     <Layout>
       <div>
          <h1>Forecast Page!</h1>
          <style jsx global>{`
          body {
              background: #2d2d2d;
              color: #f2f2f2f2;
          }
        `}</style>
       </div>
     </Layout>
    )
  }
}

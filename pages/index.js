import { Component } from 'react';
import Layout from '../components/Layout'
import {HomeText, ZipCodeButton, SubmitButton} from '../components/home'


export default class Index extends Component {
 render() {
   return (
     <Layout>
        <HomeText />
        <ZipCodeButton />
        <SubmitButton />
    <style jsx global>{`
        body {
          background: #cd432e
          color: #f2f2f2f2
        }
      `}
      </style>
    </Layout>

    )
  }
}
import { Component } from 'react';
import Layout from '../components/Layout'
import {ZipCodeForm, HomeText} from '../components/homepage'
import Forecast from '../components/forecast/Forecast'

const API_KEY = "06c2ed9eb2345f27c26c6b863d8aa0f1"


export default class Index extends Component { 

  state = {
    temperature: undefined,
    error: undefined
  }

  obtainWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=imperial&appid=${API_KEY}`)
    const data = await api_call.json();
    if (zipcode) {
    console.log(data);
    this.setState({
      temperature: data.list[0].main.temp,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      error: "The zipcode is left blank, or you enter an invalid zipcode"
    });
  }
}

 render() {
   return (
     <Layout>
     <HomeText />
        <ZipCodeForm obtainWeather={this.obtainWeather}/>
        <Forecast temperature={this.state.temperature}
                  error={this.state.error}
        />
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
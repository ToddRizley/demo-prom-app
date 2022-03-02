import logo from './logo.svg';
import './App.css';
// import {useEffect} from "react"
import AffirmComponent from './Affirm-Component';
import React, { Component } from "react";
//import './Affirm.js'



class AppClassic extends React.Component {

    componentDidMount(){
      const script = document.createElement("script");
      script.src = "./Affirm.js";
      script.async = true;
      document.head.appendChild(script);
  }



  render() {

      return (
        <div className="App">
          <header className="App-header">
            <AffirmComponent />
          </header>
        </div>
      );
    }

}

export default AppClassic;

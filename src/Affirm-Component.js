
import React, { Component } from "react";
import './Affirm.js'

class AffirmComponent extends React.Component {


  
  componentDidMount(){
      const script = document.createElement("script");
      script.src = "./Affirm.js";
      script.async = true;
      document.head.appendChild(script);
  }




  render() {
    var total_price = 100000
    
    return (
      <div className="container">
          <h3>Test Merchant</h3>
          <p className="affirm-as-low-as" data-page-type="product" data-amount={total_price} />
      </div>
    );
  }
}

export default AffirmComponent;
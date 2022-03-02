import './App.css';
import {useEffect} from "react"
import AffirmComponent from './Affirm-Component';



const AppFunctional= props => {

useEffect(() => {
  const script = document.createElement('script');
  script.src = "./Affirm.js";
  script.async = true;
  document.body.appendChild(script);
});

    
  
    return (
        <div className="App">
          <header className="App-header">
            <AffirmComponent />
          </header>
        </div>
      );
  }

export default AppFunctional;
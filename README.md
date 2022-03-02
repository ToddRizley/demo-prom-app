//Option 1, import Affirm.js at app entry or component(s) using script. Likely best to add to any parent component where price variables are accessible
//import './Affirm.js'


// Option 2. w/ React Lifecycle method
// function componentDidMount () {
//   const script = document.createElement("script");
//   script.src = "./Affirm.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// Option 3. with React Hooks


// useEffect(() => {
//   const script = document.createElement('script');
//   script.src = "./Affirm.js";
//   script.async = true;
//   document.body.appendChild(script);
// });

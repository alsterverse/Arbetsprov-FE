import './App.css';

import Dashboard from './containers/Dashboard/Dashboard';

import isotopLogo from "./assets/isotop_logo.svg";

function App() {
  return (
    <>
      <div className="App">
        <Dashboard />
      </div>

      <div>
        <img style={{height: "40px", position: "absolute", bottom: "5rem"}} src={isotopLogo} alt="Isotops logga" />
      </div>
    </>
  );
}

export default App;

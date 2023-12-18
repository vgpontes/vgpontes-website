import React from 'react';
import VictorNavbar from "./components/VictorNavbar";
import "./images/banner.jpg";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <VictorNavbar/>
          <Banner/>
      </header>
    </div>
  );
}

export default App;

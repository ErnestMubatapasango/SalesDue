import React from 'react'
import About from './pages/About';
import FeaturesPages from './pages/FeaturesPages';
import Clothing from './retail/Clothing'
import Takeaway from './retail/Takeaway';
import Kiosk from './retail/Kiosk';
import CoffeeShop from './retail/CoffeeShop';
import Home from './pages/Home';
import Prices from './pages/Prices'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
     <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/features' element={<FeaturesPages />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pricing' element={<Prices/>}></Route>
          <Route path='/clothing' element={<Clothing />}></Route>
          <Route path='/takeaway' element={<Takeaway />}></Route>
          <Route path='/kiosk' element={<Kiosk />}></Route>
          <Route path='/coffee' element={<CoffeeShop />}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

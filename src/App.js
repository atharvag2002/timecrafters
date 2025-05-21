import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import LandingSection from './components/LandingSection';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <LandingSection/>
      <StoreLocator/>
      <Footer/>
    
    
    </div>
  );
}

export default App;

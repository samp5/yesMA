import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import PageOne from './pages/BRT';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
    <Navigation />
    < PageOne />
    < Footer />
    </div>
  );
}

export default App;

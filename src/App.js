import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect} from 'react';
import BRT from './pages/BRT';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    const changeBackground = () => {
      const scrollPos = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(scrollPos / totalDocScrollLength * 100);

      document.body.style.backgroundColor = `rgba(114, ${255 - scrollPosition}, 185)`;
    }

    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  return (
    <div>
    <Navigation />
    < BRT />
    < Footer />
    </div>
  );
}


export default App; 
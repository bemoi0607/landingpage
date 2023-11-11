import logo from './logo.svg';
import './App.css';
import firstjpg from './1.png'
import secondjpg from './2.png'
import thirdjpg from './3.png'
import fourthjpg from './4.png'
import fifthjpg from './5.png'
import sixthjpg from './6.png'
import seventhjpg from './7.png'
import eightthjpg from './8.png'
import ninethjpg from './9.png'
import tenthjpg from './10.png'
import eleventhjpg from './11.png'
import React, { useState, useEffect } from 'react';
import { Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'


ReactGA.initialize("G-0RCDWEEBWK")


const shakeKeyframes = `
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25%, 75% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
  }
`;

function App() {
 
  
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const location = useLocation();
   const [entryTime, setEntryTime] = useState(Date.now());
 
   useEffect(() => {
     // Record entry time
     setEntryTime(Date.now());
 
     window.gtag('config', 'G-0RCDWEEBWK', { page_path: location.pathname });
 
     // Attach scroll event listener
     const handleScroll = () => {
       // Track scroll event
       ReactGA.event({
         category: 'Scroll',
         action: 'Scroll',
         label: 'User Scrolled',
       });
     };
 
     window.addEventListener('scroll', handleScroll);
 

    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Calculate time spent on the page and send an event
      const timeSpent = Math.floor((Date.now() - entryTime) / 1000); // Convert to seconds
      ReactGA.event({
        category: 'Time',
        action: 'Page View',
        label: `Time Spent on Page: ${timeSpent} seconds`,
      });
    };
  }, [location.pathname, entryTime]);

  

  

   useEffect(() => {
     window.gtag('config', 'G-0RCDWEEBWK', { page_path: location.pathname });
   }, [location.pathname]);

   const handleButtonClick1 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '더 알아보기',
    });

    // Redirect to the specified URL
    window.location.href = 'https://m.place.naver.com/place/1216958182/ticket?entry=pll';
  };

  const handleButtonClick2 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'PT 신청하기',
    });

    // Redirect to the specified URL
    window.location.href = 'https://m.place.naver.com/place/1216958182/ticket?entry=pll';
  };



   const handleButtonClic3 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '무료체험 버튼',
    });

    // Redirect to the specified URL
    window.location.href = 'https://m.place.naver.com/place/1216958182/ticket?entry=pll';
  };
 

  return (

    <div className="App">
        <img src={firstjpg} style={{width:'100%',height:'100%'}}/>
        <img src={secondjpg} style={{width:'100%',height:'100%'}}/>
        <img src={thirdjpg} style={{width:'100%',height:'100%'}}/>
        <img src={fourthjpg} style={{width:'100%',height:'100%'}}/>
        <img src={fifthjpg} style={{width:'100%',height:'100%'}}/>
        <img src={sixthjpg} style={{width:'100%',height:'100%'}}/>
        <img src={seventhjpg} style={{width:'100%',height:'100%'}}/>
        <img src={eightthjpg} style={{width:'100%',height:'100%'}}/>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{borderColor:'blue',borderRadius:30,width:'30%',height:'40%', fontWeight:'bold',color: 'blue',backgroundColor:'white', animation: 'shake 0.5s' }} onClick={handleButtonClick1}>
              더 알아보기
          </button>
        </div>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>     
        <img src={ninethjpg} style={{width:'100%',height:'100%'}}/>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{borderColor:'blue',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: 'blue',backgroundColor:'white', animation: 'shake 0.5s' }} onClick={handleButtonClick2}>
            PT 신청하기
          </button>
        </div>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>  
        <img src={tenthjpg} style={{width:'100%',height:'100%'}}/>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>     
        <img src={eleventhjpg} style={{width:'100%',height:'100%'}}/>
        <style>{shakeKeyframes}</style>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{borderColor:'white',borderRadius:30,width:'30%',height:'40%',color: 'white',backgroundColor:'blue', animation: 'shake 0.5s' }} onClick={handleButtonClic3}>
              지금 무료 체험하기
          </button>
        </div>   
    </div>
  );
}

export default App;

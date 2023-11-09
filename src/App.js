import logo from './logo.svg';
import './App.css';
import firstjpg from './1.jpg'
import secondjpg from './2.jpg'
import thirdjpg from './3.png'
import fourthjpg from './4.png'
import fifthjpg from './5.png'
import sixthjpg from './6.png'
import seventhjpg from './7.png'
import eightthjpg from './8.png'
import ninethjpg from './9.png'
import tenthjpg from './10.png'
import eleventhjpg from './11.png'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


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
        <img src={ninethjpg} style={{width:'100%',height:'100%'}}/>
        <img src={tenthjpg} style={{width:'100%',height:'100%'}}/>
        <img src={eleventhjpg} style={{width:'100%',height:'100%'}}/>
        <style>{shakeKeyframes}</style>
        <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{borderColor:'white',borderRadius:30,width:'30%',height:'40%',color: 'white',backgroundColor:'blue', animation: 'shake 0.5s' }} onClick={() => window.location.href = 'https://m.place.naver.com/place/1216958182/ticket?entry=pll'}>
              지금 무료 체험하기
          </button>
        </div>   
    </div>
  );
}

export default App;

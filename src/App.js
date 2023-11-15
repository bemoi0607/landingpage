import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import five from './images/5.png';
import six from './images/6.png';
import seven from './images/7.png';
import eight from './images/8.png';
import nine  from './images/9.png';
import ten from './images/10.png';
import eleven from './images/11.png';
import twelve from './images/12.png';
import thirteen from './images/13.png';
import fourteen from './images/14.png';
import fiftheen from './images/15.png';
import sixteen from './images/16.png';
import seventeen from './images/17.png';
import eighteen from './images/18.png';
import nintheen from './images/19.png';
import twenty from './images/20.png';
import twentyone from './images/21.png';
import twentytwo from './images/22.png';
import twentythree from './images/23.png';
import twentyfour from './images/24.png'
import twentyfive from './images/25.png';
import twentysix from './images/26.png';
import extra from './images/extra.png';
import TagManager from 'react-gtm-module';



function App() {
  const scrollDepthRef = useRef([]);
  const location = useLocation();

 

  const tagManagerArgs = {
    gtmId: 'GTM-TGW97R75'
  }

  TagManager.initialize(tagManagerArgs);



  const handleButtonClick1 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '문의하기',
    });

    // Redirect to the specified URL
    window.location.href = 'https://talk.naver.com/ct/w4f4np?frm=mnmb&frm=nmb_detail#nafullscreen';
  };

  const handleButtonClick2 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '패키지1',
    });

    // Redirect to the specified URL
    window.location.href = 'https://smartstore.naver.com/lifepalette/products/9538083868';
  };

  const handleButtonClick3 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '패키지2',
    });

    // Redirect to the specified URL
    window.location.href = 'https://smartstore.naver.com/lifepalette/products/9538087303';
  };


  return (

    <div className="App">
      <img src={one}  style={{width:'100%',height:'100%'}} />
      {/* <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button style={{borderColor:'blue',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: 'blue',backgroundColor:'white'}} onClick={handleButtonClick1}>
              더 알아보기
        </button>
      </div> */}
      <img src={two}  style={{width:'100%',height:'100%'}}  />
      <img src={three}  style={{width:'100%',height:'100%'}} />
      <img src={four}  style={{width:'100%',height:'100%'}} />
      <img src={five}  style={{width:'100%',height:'100%'}} />
      <img src={six}  style={{width:'100%',height:'100%'}} />
      <img src={extra}  style={{width:'100%',height:'100%'}} />
      <img src={seven}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <button style={{borderColor:'grey',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: 'black',backgroundColor:'white'}} onClick={handleButtonClick1}>
            문의하기
        </button>
      </div>
      <img src={eight}  style={{width:'100%',height:'100%'}}/>
      <img src={nine}  style={{width:'100%',height:'100%'}}/>
      <img src={ten}  style={{width:'100%',height:'100%'}} />
      <img src={eleven}  style={{width:'100%',height:'100%'}} />
      <img src={twelve}  style={{width:'100%',height:'100%'}} />
      <img src={thirteen}  style={{width:'100%',height:'100%'}} />
      <img src={fourteen}  style={{width:'100%',height:'100%'}} />
      <img src={fiftheen}  style={{width:'100%',height:'100%'}} />
      <img src={sixteen}  style={{width:'100%',height:'100%'}} />
      <img src={seventeen}  style={{width:'100%',height:'100%'}} />
      <img src={eighteen}  style={{width:'100%',height:'100%'}} />
      <img src={nintheen}  style={{width:'100%',height:'100%'}} />
      <img src={twenty}  style={{width:'100%',height:'100%'}} />
      <img src={twentyone}  style={{width:'100%',height:'100%'}} />
      <img src={twentytwo}  style={{width:'100%',height:'100%'}} />
      <img src={twentythree}  style={{width:'100%',height:'100%'}} />
      <img src={twentyfour}  style={{width:'100%',height:'100%'}} />
      <img src={twentyfive}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button style={{borderColor:'blue',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: 'blue',backgroundColor:'white'}} onClick={handleButtonClick2}>
              지금 구매하기
        </button>
      </div>
      <img src={twentysix}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button style={{borderColor:'blue',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: 'blue',backgroundColor:'white'}} onClick={handleButtonClick3}>
              지금 구매하기
        </button>
      </div>
    </div>
  );
}

export default App;

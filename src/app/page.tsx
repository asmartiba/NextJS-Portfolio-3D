'use client'
import Image from 'next/image'
import styles from './page.module.css'
import './global.css'
import Aleph from './../components/aleph'
import Bet from './../components/bet'
import React, {useRef, useState, useEffect} from "react"

const ToggleColorDiv = () => {
  const [isGrey, setIsGrey] = useState(true);

  const handleClick = () => {
    setIsGrey((prevIsGrey) => !prevIsGrey);
  };

  const backgroundColor = isGrey ? 'grey' : 'blue';
  const textColor = isGrey ? 'blue' : 'white';

  return (
    <div
      style={{
        width: 200,
        height: 120,
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      כן
    </div>
  );
};


const Home = () => {
  
  return (

    <main className={styles.mainx}>
        
      {/* <h1>זה עובד</h1>

      <h2>אנחנו כאן הם שם</h2>
      <h1>זה קשה. אבל אני חושב שאני מוכן להמבכן הזה</h1>

      <ToggleColorDiv/> */}


      <Aleph/>
      <Bet/>
    </main>
  )
}

export default Home;
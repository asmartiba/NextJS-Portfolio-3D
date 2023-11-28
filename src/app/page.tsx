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
    const [selectedComponent, setSelectedComponent] = useState('Aleph');

    const handleComponentChange = (selectedComponent: string) => {
      setSelectedComponent(selectedComponent);
    };

    return (
      <>
        <main className={styles.mainx}>
          <div className={styles.container}>
            <div className={styles.screen}>
              {selectedComponent === 'Aleph' && <Aleph />}
              {selectedComponent === 'Bet' && <Bet />}
            </div>
            
            <div className={styles.navigation}>
                <div
                  className={selectedComponent === 'Aleph' ? styles.selected : ''}
                  onClick={() => handleComponentChange('Aleph')}
                >
                  Aleph
                </div>
                <div
                  className={selectedComponent === 'Bet' ? styles.selected : ''}
                  onClick={() => handleComponentChange('Bet')}
                >
                  Bet
                </div>
            </div>
          </div>
        </main>
      </>
    );
  };

export default Home;
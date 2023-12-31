'use client'
import Image from 'next/image'
import styles from './page.module.css'
import './global.css'
import Aleph from './../components/aleph'
import Bet from './../components/bet'
import Gimel from './../components/gimel'
import React, {useRef, useState, useEffect} from "react"
  
  const Home = () => {
    const [artExpanded, setArtExpanded] = useState(false);
    const [programmingExpanded, setProgrammingExpanded] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('Bet');
  
    const handleComponentChange = (component: string) => {
      if (component === 'art') {
        setArtExpanded(!artExpanded);
        setSelectedComponent(artExpanded ? '' : 'art');
      } else if (component === 'acrylic' || component === 'pencil' || component === 'digital') {
        setSelectedComponent(component);
      } else if (component === 'programming') {
        setProgrammingExpanded(!programmingExpanded);
        setSelectedComponent(programmingExpanded ? '' : 'programming');
      } else if (component === 'Aleph') { 
        setSelectedComponent('front-end');
      } else if (component === 'Bet') { 
        setSelectedComponent('back-end');
      } else if (component === 'creative UI') {
        setSelectedComponent(component);
      } else {
        setSelectedComponent(component);
      }
    };
    return (
      <>
      <main className={styles.mainx}>

            <div className={styles.screen}>
              {selectedComponent === 'front-end' && <Aleph />}
              {selectedComponent === 'back-end' && <Bet />}
              {selectedComponent === 'Gimel' && <Gimel />}
            </div>
            
            <div className={styles.navigation}>
          <div className={styles.navItem}>
            <div
              className={selectedComponent === 'art' ? styles.selected : ''}
              onClick={() => handleComponentChange('art')}
            >
              {artExpanded ? '- Art' : '+ Art'}
            </div>
            <div className={`${styles.navGroup} ${artExpanded ? `${styles.open}` : `${styles.closed}`}`}>
              <div
                className={selectedComponent === 'acrylic' ? styles.selected : ''}
                onClick={() => handleComponentChange('acrylic')}
              >
                Acrylic
              </div>
              <div
                className={selectedComponent === 'pencil' ? styles.selected : ''}
                onClick={() => handleComponentChange('pencil')}
              >
                Pencil
              </div>
              <div
                className={selectedComponent === 'digital' ? styles.selected : ''}
                onClick={() => handleComponentChange('digital')}
              >
                Digital
              </div>
            </div>
            <div
              className={selectedComponent === 'programming' ? styles.selected : ''}
              onClick={() => handleComponentChange('programming')}
            >
              {programmingExpanded ? '- Programming' : '+ Programming'}
            </div>
            <div className={`${styles.navGroup} ${programmingExpanded ? `${styles.open}` : `${styles.closed}`}`}>
              <div
                className={selectedComponent === 'front-end' ? styles.selected : ''}
                onClick={() => handleComponentChange('Aleph')}
              >
                Front-end
              </div>
              <div
                className={selectedComponent === 'back-end' ? styles.selected : ''}
                onClick={() => handleComponentChange('Bet')}
              >
                Back-end
              </div>
              <div
                className={selectedComponent === 'creative UI' ? styles.selected : ''}
                onClick={() => handleComponentChange('creative UI')}
              >
                Creative UI
              </div>
            </div>
          </div>
        </div>
        </main>
      </>
    );
  };

export default Home;
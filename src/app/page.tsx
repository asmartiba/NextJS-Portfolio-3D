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
    const [isSticky, setSticky] = useState(false);

  
    const handleComponentChange = (component: string) => {
      if (component === 'art') {
        setArtExpanded(!artExpanded);
        setSelectedComponent(artExpanded ? '' : 'art');
      } else if (component === 'acrylic' || component === 'pencil' || component === 'digital') {
        setSelectedComponent(component);
      } else if (component === 'programming') {
        setProgrammingExpanded(!programmingExpanded);
        setSelectedComponent(programmingExpanded ? '' : 'programming');
      } else if (component === 'front-end' || component === 'back-end' || component === 'creative UI') {
        setSelectedComponent(component);
      } else {
        setSelectedComponent(component);
      }
    };

    return (
      <>
      <main className={styles.mainx}>

            <div className={styles.screen}>
              {selectedComponent === 'Aleph' && <Aleph />}
              {selectedComponent === 'Bet' && <Bet />}
              {selectedComponent === 'Gimel' && <Gimel />}
            </div>
            
            <div className={styles.navigation}>
                  <div
                    className={selectedComponent === 'art' ? styles.selected : ''}
                    onClick={() => handleComponentChange('art')}
                  >
                    {artExpanded ? '-art' : '+art'}
                  </div>
                  {artExpanded && (
                    <div>
                      <div
                        className={selectedComponent === 'acrylic' ? styles.selected : ''}
                        onClick={() => handleComponentChange('acrylic')}
                      >
                        -acrylic
                      </div>
                      <div
                        className={selectedComponent === 'pencil' ? styles.selected : ''}
                        onClick={() => handleComponentChange('pencil')}
                      >
                        -pencil
                      </div>
                      <div
                        className={selectedComponent === 'digital' ? styles.selected : ''}
                        onClick={() => handleComponentChange('digital')}
                      >
                        -digital
                      </div>
                    </div>
                  )}
                  <div
                    className={selectedComponent === 'programming' ? styles.selected : ''}
                    onClick={() => handleComponentChange('programming')}
                  >
                    {programmingExpanded ? '-programming' : '+programming'}
                  </div>
                  {programmingExpanded && (
                    <div>
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
                  )}
                </div>
        </main>
      </>
    );
  };

export default Home;
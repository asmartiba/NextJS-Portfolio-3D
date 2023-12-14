'use client'
import Image from 'next/image'
import styles from './page.module.css'
import './global.css'
import Aleph from './../components/aleph'
import Bet from './../components/bet'
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
      } else if (component === 'front-end' || component === 'back-end' || component === 'creative UI') {
        setSelectedComponent(component);
      } else {
        setSelectedComponent(component);
      }
    };
  
    interface NavigationItemProps {
      isSelected: boolean;
      onClick: () => void;
      label: string;
    }
    
    const NavigationItem: React.FC<NavigationItemProps> = ({ isSelected, onClick, label }) => (
      <div className={isSelected ? styles.selected : ''} onClick={onClick}>
        {label}
      </div>
    );

    return (
      <>
      <main className={styles.mainx}>

          <div className={styles.screen}>
            {selectedComponent === 'front-end' && <Aleph />}
            {selectedComponent === 'back-end' && <Bet />}
          </div>


          <div className={styles.navigation}>
            <NavigationItem
              isSelected={selectedComponent === 'art'}
              onClick={() => handleComponentChange('art')}
              label={artExpanded ? '-art' : '+art'}
            />
            {artExpanded && (
              <div>
                <NavigationItem
                  isSelected={selectedComponent === 'acrylic'}
                  onClick={() => handleComponentChange('acrylic')}
                  label="-acrylic"
                />
                <NavigationItem
                  isSelected={selectedComponent === 'pencil'}
                  onClick={() => handleComponentChange('pencil')}
                  label="-pencil"
                />
                <NavigationItem
                  isSelected={selectedComponent === 'digital'}
                  onClick={() => handleComponentChange('digital')}
                  label="-digital"
                />
              </div>
            )}
            <NavigationItem
              isSelected={selectedComponent === 'programming'}
              onClick={() => handleComponentChange('programming')}
              label={programmingExpanded ? '-programming' : '+programming'}
            />
            {programmingExpanded && (
              <div>
                <NavigationItem
                  isSelected={selectedComponent === 'front-end'}
                  onClick={() => handleComponentChange('front-end')}
                  label="Front-end"
                />
                <NavigationItem
                  isSelected={selectedComponent === 'back-end'}
                  onClick={() => handleComponentChange('back-end')}
                  label="Back-end"
                />
                <NavigationItem
                  isSelected={selectedComponent === 'creative UI'}
                  onClick={() => handleComponentChange('creative UI')}
                  label="Creative UI"
                />
              </div>
            )}
          </div>
      </main>
      </>
    );
  };

export default Home;
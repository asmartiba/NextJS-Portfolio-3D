'use client'
import React, {useRef, useState, useEffect} from "react"
import {Canvas} from '@react-three/fiber'
import * as THREE from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "@react-three/drei";
import Image from 'next/image';
import styles from "./aleph.module.css"
import useClient from "next/client";



const Aleph = () => {
    const [model, setModel] = useState<GLTF | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const modelRef = useRef<THREE.Mesh | null>(null);
    const clock = useRef(new THREE.Clock());
    const initialPosition = [-1, 0, -0.5];
    const [rotationY, setRotationY] = useState(0);
    const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
    const [controlsTarget, setControlsTarget] = useState(new THREE.Vector3(...initialPosition));
    
      useEffect(() => {
        const checkIsMobile = () => {
          const breakpoint = 768; 
          return window.innerWidth < breakpoint;
        };
      
        const handleResize = () => {
          setIsMobile(checkIsMobile());    
        };
      
        setIsMobile(checkIsMobile());
        window.addEventListener("resize", handleResize);
        
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const getCameraProps = () => {
        if (isMobile) {
          return {
            position: [2, 1, 1],
            fov: 100,
            near: 0.8,
            far: 10,
          };
        } else {
          return {
            position: [3,2, 2],
            fov: 60,
            near: 0.6,
            far: 100,
          };
        }
      };
    
      useEffect(() => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(dracoLoader);

        // Load the GLB file from the public directory
        loader.load('/models/react.glb', (glb) => {
          setModel(glb);
        });
      }, []);

  
      useEffect(() => {
        const animate = () => {
          const delta = clock.current.getDelta(); 
          const rotationSpeed = 0.2;
          setRotationY((prevRotationY) => prevRotationY + rotationSpeed * delta);
          requestAnimationFrame(animate);
        };

        if (model) {
          requestAnimationFrame(animate);
        }
      }, [model]);
      
    
      return (
          <>
              <div className={styles.cGroup}>
                <div className={styles.container3D} >
                  <Canvas>
                    <pointLight position={[10, 10, 10]} />
                    <ambientLight />
                    <mesh ref={modelRef} position={new THREE.Vector3(...initialPosition)} rotation-y={rotationY}>
                      {model && <primitive object={model.scene} scale={1} />}
                    </mesh>
                    <OrbitControls target={controlsTarget} enableDamping dampingFactor={0.25} rotateSpeed={0.5} enableZoom={false}/>
                  </Canvas>
                  <h2>Container is here</h2>

                </div>
  
                <div className={styles.containerText}>
                  <h2><span style={{fontSize:'120%'}}>F</span>ront-end & <span style={{fontSize:'120%'}}>C</span>reative web development</h2>
                  <h3>  
                    One of my favourite spaces in the world of technology. Learning about interfaces and design challenges.
                    I like to work using <span style={{color: "#f7df1e"}}>Javascript</span>, <span style={{color: "#f16524"}}>HTML</span>,  <span style={{color: "#2862e9"}}>CSS</span> and  <span style={{color: "#c66394"}}>SASS</span> using <span style={{color: "#61dbfb"}}>React framework.</span>
                  </h3>
  
                  <h3>Recently I have been using <span style={{color: "#c4002b"}}>Angular</span>, <span style={{color: "#9d5efe"}}>Vite</span> and <span style={{color: "#5fcec9"}}>NextJS</span>, thus I'm becoming more familiar with <span style={{color: "#51dbfb"}}>Typescript</span> as a main programming language for advanced queries.</h3>
                </div>
              </div>
  
              <div className={styles.cGroup}>
                      <div className={styles.containerText}>
                          <h2><span style={{color: '#0173aa'}}>WordPress</span>, <span style={{color: '#11b3aa'}}>Netilify </span> & <span style={{color: '#6626ab'}}>GatsbyJS</span></h2>
                          <h3> 
                              in content management system CMS development. I learnt about using WordPress as a headless CMS. Hosting it as a static site via Gatsby and Netilify. 
                              In this subject I learnt working with advanced JavaScript and connecting front and back-end via API by writing GraphQL queries. 
                          </h3>
                      </div>
                      {/* <img src="./../images/title/wpgatsby.png" alt="icons" width={200} height={200} />
                      <Image 
                          src="/images/title/wpgatsby.png"
                          alt="icons"
                          width={200}
                          height={200}
                      /> */}
                </div>
  
                <div className={styles.cGroup}>
  
                    {/* <Image 
                          src="../images/title/Responsive.png"
                          alt="icon"
                          className={styles.imageM}
                      /> */}
                    <div className={styles.containerText}>
                      <h2><span style={{color: '#11b3aa'}}>Responsive</span></h2>
                      <h3> 
                          Designing a functional website compatible with different screen sizes and resolutions can be challenging. 
                          My current approach for implementing wireframes would be writing media queries   
                      </h3>
                    </div>
               
                </div>
  
                <div className={styles.cGroup}>
                  
                      <div className={styles.containerText}>
                          <h2><span style={{color: '#0173aa'}}>API development </span></h2>
                          <h3> 
                              Building a robust and efficient API to connect and interact with data sources, enabling communication between front-end and back-end of a web application.
                              In <span style={{color: "#be73d8"}}>ASP.NET</span>, <span style={{color: "#f7df1e"}}>JSON</span> serialization plays a role in making data accesible via web applications. 
                              Through the magic of serialization, ASP.NET APIs convert .NET objects into JSON format, making data exchange between the front and back-end seamless and efficient.
                          </h3>
                      </div>
                      <video autoPlay loop className={styles.imageS}>
                        <source src="./../images/webm/api.webm" type="video/webm" />
                      </video>
                  </div>
  
        
          </>
    )};
  
    export default Aleph;
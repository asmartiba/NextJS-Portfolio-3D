import React, { useRef, useState, useEffect, RefObject } from "react";
import Image from 'next/image'
import {Canvas, useThree} from '@react-three/fiber'
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import styles from './aleph.module.css'

 const Bet = () => {
  const modelRef = useRef<THREE.Mesh | null>(null);
  const initialPosition = [-0.2, 0.2, 0];
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
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
          position: [1, 1, 1],
          fov: 70,
          near: 0.8,
          far: 90,
        };
      } else {
        return {
          position: [2,1, 2],
          fov: 35,
          near: 0.6,
          far: 12,
        };
      }
    };

    useEffect(() => {
      const loader = new GLTFLoader();
  
      loader.load(
        "/models/csharp.glb",
        (gltf) => {
          setModel(gltf.scene);
        },
        undefined,
        (error) => {
          console.error("Error loading GLB model", error);
        }
      );
    }, []);
  
    return (
        <>
            <div className={styles.flex}>
              <div className={styles.container3D}>
                <Canvas>
                  <pointLight position={[5, 5, 2]} />
                  <ambientLight />
                  <mesh ref={modelRef} position={new THREE.Vector3(...initialPosition)}>
                    {model && <primitive object={model} scale={1.1} />}
                  </mesh>
                </Canvas>
              </div>
              <div className={styles.containerText}>
                <h2><span style={{fontSize:'130%'}}>W</span>eb services</h2>
                <h3> 
                  In these subjects I was able to implement what I have learnt earlier about object-oriented programming.
                  Topics and concepts I studied and I'm familiar with: Interfaces, dependency injection in <span style={{color: "#be73d8"}}>ASP.NET</span> core MVC framework.
                  CRUD-Implementation, Automapper, Swagger, .NET Entity framework, <span style={{color: "#f7df1e"}}>JSON</span>, SOAP
                </h3>
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles.containerText}>
                <h2><span style={{fontSize:'120%'}}>S</span>oftware Testing</h2>
                <h3> 
                  Beginning here with debugging, going through code without re-factoring. 
                  Tools of software testing: 
                  <br/> .  <span style={{color:"#e0a286"}}>Unit Testing (Mocking)</span>
                  <br/> . <span style={{color:"#e0a286"}}>Test Driven Development (TDD) and Behavioural Development</span>
                  <br/> .  <span style={{color:"#e0a286"}}>Moq and Mockoon (To test independently from the API call)</span>
                </h3>
              </div>
              <video autoPlay loop className={styles.imageS} >
                    <source src="/images/webm/tdd.webm" type="video/webm" />
              </video>
            </div>

            <div className={styles.flex}>
                <Image 
                    src="/images/title/SQL.png"
                    alt="icon"
                    width={300}
                    height={200}
                    className={styles.imageS}
                  />
              <div className={styles.containerText}>
                <h2><span style={{fontSize:'120%'}}>D</span>atabank, SQL & NoSQL</h2>
                <h3> 
                  In subjects such as databank I learnt how to establish connection with an external database and write queries using my workbench SQL
                  SQL queries:
                  <br/> .  <span style={{color:"#e0a286"}}>SQL basic queries for creatnig, inserting, deleting and altering tables</span>
                  <br/> . <span style={{color:"#e0a286"}}>Working with views and indexes on MySQL workbench</span>
                  <br/> .  <span style={{color:"#e0a286"}}>Stored procedures</span>
                </h3>
              </div>
            </div>
        </>
      )};

export default Bet;
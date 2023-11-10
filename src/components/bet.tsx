import React, {useRef, useState, useEffect} from "react"
import * as styles from "../styles/ICT.module.css"
import Image from 'next/image'
import {Canvas, useThree} from '@react-three/fiber'

import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


 const Bet = () => {
    const initialPosition = [-0.2,0.2,0];
    const [model, setModel] = useState<GLTF | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const CSharpMixer = useRef<THREE.Mesh | null>(null);
    const previousTimeRef = useRef(0);
  
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
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      loader.setDRACOLoader(dracoLoader);
      loader.load('/models/csharp.glb', (glb) => {
        setModel(glb);
        if (glb.animations.length > 0) {
          CSharpMixer.current = new THREE.AnimationMixer(glb.scene);
          const action = CSharpMixer.current.clipAction(glb.animations[0]);
          action.play();
        }
      });
    }, []);

    const animate = (timestamp) => {
      const deltaTime = (timestamp - previousTimeRef.current) * 0.0004;
      previousTimeRef.current = timestamp;

      if (CSharpMixer.current) {
        CSharpMixer.current.update(deltaTime);
      }
      requestAnimationFrame(animate);
    };
    
    useEffect(() => {
      if (model) {
        requestAnimationFrame(animate);
      }
    }, [model]);
  
    return (
        <>
            <div>
              <div >
                <Canvas camera={getCameraProps()}>
                    <pointLight position={[5, 5, 2]} />
                    <mesh position={initialPosition}>
                      {model && <primitive object={model.scene} scale={0.8} />}
                    </mesh>
                </Canvas>
              </div>
              <div>
                <h2><span style={{fontSize:'130%'}}>W</span>eb services</h2>
                <h3> 
                  In these subjects I was able to implement what I have learnt earlier about object-oriented programming.
                  Topics and concepts I studied and I'm familiar with: Interfaces, dependency injection in <span style={{color: "#be73d8"}}>ASP.NET</span> core MVC framework.
                  CRUD-Implementation, Automapper, Swagger, .NET Entity framework, <span style={{color: "#f7df1e"}}>JSON</span>, SOAP
                </h3>
              </div>
            </div>
            <div>
              {/* <video autoPlay loop >
                    <source src={video01} type="video/webm" />
              </video> */}
              <div >
                <h2><span style={{fontSize:'120%'}}>S</span>oftware Testing</h2>
                <h3> 
                  Beginning here with debugging, going through code without re-factoring. 
                  Tools of software testing: 
                  <br/> .  <span style={{color:"#e0a286"}}>Unit Testing (Mocking)</span>
                  <br/> . <span style={{color:"#e0a286"}}>Test Driven Development (TDD) and Behavioural Development</span>
                  <br/> .  <span style={{color:"#e0a286"}}>Moq and Mockoon (To test independently from the API call)</span>
                </h3>
              </div>
            </div>
            <div >
            {/* <StaticImage 
                        src="../images/title/SQL.png"
                        alt="icon"
                    /> */}
              <div >
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
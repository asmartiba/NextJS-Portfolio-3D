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
                <div className={styles.container3D} >
                  <Canvas>
                    <pointLight position={[10, 10, 10]} />
                    <ambientLight />
                    <mesh ref={modelRef} position={new THREE.Vector3(...initialPosition)} rotation-y={rotationY}>
                      {model && <primitive object={model.scene} scale={1} />}
                    </mesh>
                    <OrbitControls target={controlsTarget} enableDamping dampingFactor={0.25} rotateSpeed={0.5} enableZoom={false}/>
                  </Canvas>
                </div>
              
                
          </>
    )};
  
    export default Aleph;
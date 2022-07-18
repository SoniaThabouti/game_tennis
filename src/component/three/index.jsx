import {angleToRadians} from "../../assets/angle";
import { Environment, PerspectiveCamera, useTexture } from "@react-three/drei/core";
import { OrbitControls } from "@react-three/drei/core";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";
import * as THREE from "three";
import gsap from "gsap";
import Racket from "./racket";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {Html} from '@react-three/drei';
import Page0 from "../three/page0";

export default function Three() {
    //texture of field
    const mapTexture = useTexture("./texture/grass1.jpg");
    const mapTexture1 = useTexture("./texture/sky.jpg");
    const mapTexture2 = useTexture("./texture/ball_texture.jpg");

    //code to move the camera around
    const orbitControlsRef= useRef(null);
  {/*useframe to refrsh the frame every 60sec */}
    useFrame((state) => {
        if (!!orbitControlsRef){
            const {x,y} =state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
            orbitControlsRef.current.update();
        }
      
    })

    useEffect(()=>{
         if (!!orbitControlsRef){
            console.log(orbitControlsRef.current);
         }
    }, [orbitControlsRef.current])

    //animation
    const ballRef = useRef(null);
    useEffect(() =>{
      if(!! ballRef.current){
        console.log(ballRef.current);
        //Timeline
        const timeline = gsap.timeline({ paused: true });

        // x axis motion
        gsap.to(ballRef.current.position,{
          x: 1,
          duration: 2,
          ease: "power2.out"
        });

        // y axis motion
        gsap.to(ballRef.current.position, {
            y: 0.5,
            duration: 0.75,
            ease: "bounce.out"
        }, "<");

        // Play
        timeline.play();
        }
      
    }, [ballRef.current])

    return (
        <>
        

        {/*We'll use a perspective camera */}
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <OrbitControls ref= {orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} enableZoom={false}/>

        {/*Ball */}
        <mesh position={[-2,2.5,0]} castShadow ref={ballRef} >
          <sphereGeometry args={[0.5,32,32]} /> 
          <meshStandardMaterial  metalness={0.4} roughness={0.2} map={mapTexture2}/>
        </mesh>

        {/*Racket */}
        <Racket />

         {/*floor */}
         <mesh rotation={[-(angleToRadians(90)),0,0]} receiveShadow>
            <planeGeometry args={[20,20]} />
            <meshStandardMaterial color="#00FF00" map={mapTexture}/>
         </mesh>

        {/*Ambient light takes color and density as params */} 
        <ambientLight args={["#ffffff",0.25]} />  

         {/* Spotlight light */}
         <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

         
        {/* Environmnet */}
        <Environment background>
       
                <mesh>
                    <Html>
                    <Page0 />
                    </Html>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial  side={THREE.BackSide} map={mapTexture1} />
                </mesh>
            </Environment>
        </>
    )
}


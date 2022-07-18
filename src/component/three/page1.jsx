import React from "react";
import HeroBackground from "../three/background1";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./box";
import { Suspense } from "react";
import styled from "styled-components";
import About from "./About";
import Footer from "./footer";

import Example from "./team_game";
import Video from "./demo";
import AnimatedSphere from "./AnimatedSphere";


export default function Page1() {

return (

    <Wrapper className="App">

       <HeroBackground/>

       <Canvas clasName="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
             <Box />
            </Suspense>
      </Canvas>
    
 {/* About the game */}
      <About/>


{/* Démonnstration of the game */}
      <Wrapper1>
        <Title>Have a look at this demonstration!</Title>
      </Wrapper1>

      <Video/>


      {/*-------------------Sphere------------------ */}
      <Canvas clasName="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      
{/* Meet the team */}
      <Wrapper1>
        <Title>Meet our team</Title>
      </Wrapper1>
      <Example/>

{/* Footer*/}
      <Footer/>
    

    </Wrapper>

)
    

}

const Wrapper = styled.div`
position: relative;
background: #1f1144;

canvas {
  height: 500px;
}
`;



const wrap= styled.div`

display:inline-block

`;

const Wrapper1 = styled.div`

position: relative;
max-width: 600px;
display: grid;
gap: 20px;
text-align: center;
margin: 0 auto;
`;

const Title = styled.h1`
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;






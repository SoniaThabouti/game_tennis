
import "./page1.css"
import { Suspense } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./AnimatedSphere";
import "./page1.css"

export default function About() {
  return (
    <wrap>

      <Canvas clasName="canvas ">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>

        <Wrapper>
        <Title>About this game</Title>
        <Description>
            Bring your game experience to life with beautiful 3D objects appraoching the reality!
        </Description>
        </Wrapper>

        <Canvas clasName="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </wrap>
  );
}

const wrap= styled.div`

display:inline-block

`;

const Wrapper = styled.div`

position: relative;
max-width: 600px;
display: grid;
gap: 20px;
text-align: center;
margin: 0 auto;
padding: 100px 20px 100px;
box-sizing: border-box;
border: 0.1px  rgb(226, 217, 217);
background: rgba(255,255,255,.5)
`;

const Title = styled.h1`
  color: black;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;

    





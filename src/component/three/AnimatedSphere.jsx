import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="rgb(255, 255, 0)"
        attach="material"
        distort={1}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

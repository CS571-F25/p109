import { PerspectiveCamera, useGLTF, useAnimations, OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from '@react-three/fiber'
import TestRobot from './TestRobot.jsx'

export default function Home() {
    const ref = useRef();

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                    false
                    <TestRobot />
                    false
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate />
        </Canvas>
    );
}
import { PerspectiveCamera, useGLTF, useAnimations, OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from '@react-three/fiber'

import { Container, Row, Col, Nav } from 'react-bootstrap';

import TitleSubDesc from '../components/TitleSubDesc';

//import TestRobot from './TestRobot.jsx'

export default function Home() {
    // const ref = useRef();

    {/*<Canvas>
             <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                    false
                        <TestRobot />
                    false
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate /> 
        </Canvas>*/}

    return (
        <Container>
            <Row>
                <Col>
                    <TitleSubDesc 
                        title="em"
                        subtitle="Senior at UW-Madison"
                        description="hi! my name is emily... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui mi, condimentum nec rhoncus quis, volutpat vitae urna. Curabitur dictum iaculis elit varius venenatis. Curabitur sit amet sapien sapien. Morbi lobortis pharetra malesuada. Aliquam lectus lectus, dictum nec leo id, malesuada interdum augue. Ut eu tempus leo, rutrum ornare turpis. Aliquam ultricies at nisl at blandit."
                    />
                </Col>
            </Row>
        </Container>
    );
}
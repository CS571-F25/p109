import { useEffect, useRef, Suspense, useState } from 'react'
import { useThree, Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF, useAnimations, OrbitControls, Stage } from "@react-three/drei"
import { Bobashop } from '../components/Bobashop'
import * as THREE from 'three'

function RaycastInteraction({ bobaShopRef }) {
    const { camera, gl } = useThree()
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())
    const [hoveredObject, setHoveredObject] = useState(null)
    const objectStates = useRef({}) // Store original positions and target positions

    const handleMouseMove = (event) => {
        const rect = gl.domElement.getBoundingClientRect()
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        if (!bobaShopRef.current) return

        raycaster.current.setFromCamera(mouse.current, camera)
        const intersects = raycaster.current.intersectObjects(bobaShopRef.current.children, true)

        if (intersects.length > 0) {
            const object = intersects[0].object
            console.log('Hovering over:', object.name)
            
            // Initialize object state if not exists
            if (!objectStates.current[object.uuid]) {
                objectStates.current[object.uuid] = {
                    originalPosition: object.position.clone(),
                    currentObject: object
                }
            }
            
            setHoveredObject(object)
        } else {
            setHoveredObject(null)
        }
    }

    useFrame(() => {
        // Animate hovered object upward
        if (hoveredObject) {
            const state = objectStates.current[hoveredObject.uuid]
            if (state) {
                const targetY = state.originalPosition.y + 0.5
                hoveredObject.position.y += (targetY - hoveredObject.position.y) * 0.1
            }
        }

        // Animate non-hovered objects back to original position
        Object.values(objectStates.current).forEach((state) => {
            if (state.currentObject !== hoveredObject) {
                state.currentObject.position.y += (state.originalPosition.y - state.currentObject.position.y) * 0.1
            }
        })
    })

    useEffect(() => {
        gl.domElement.addEventListener('mousemove', handleMouseMove)

        return () => {
            gl.domElement.removeEventListener('mousemove', handleMouseMove)
        }
    }, [gl, camera, hoveredObject])

    return null
}

function CameraSetup({ controlsRef }) {
    const { camera } = useThree();

    useEffect(() => {
        // Position camera inside the box
        //camera.position.set(0, 0, 0)
        //camera.lookAt(6, 1, 6)

        // Constrain OrbitControls to stay inside
        if (controlsRef.current) {
            // controlsRef.current.autoRotate = true
            // controlsRef.current.autoRotateSpeed = 4
            // Limit vertical rotation to prevent seeing above/below
            controlsRef.current.minPolarAngle = Math.PI * 0.3
            controlsRef.current.maxPolarAngle = Math.PI * 0.5
            // Limit horizontal rotation to only see inside the L opening (front-right)
            controlsRef.current.minAzimuthAngle = -Math.PI * 0.05
            controlsRef.current.maxAzimuthAngle = Math.PI * 0.55
            // Disable right-drag (pan)
            controlsRef.current.enablePan = false
            // Set controls target
            controlsRef.current.update()
        }
    }, [camera, controlsRef])

    return null;
}

export default function Home() {
    const controlsRef = useRef()
    const bobaShopRef = useRef()

    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <CameraSetup controlsRef={controlsRef} />
            <RaycastInteraction bobaShopRef={bobaShopRef} />
            <Suspense fallback={null}>
                <Stage controls={controlsRef}>
                    <group ref={bobaShopRef}>
                        <Bobashop />
                    </group>
                </Stage>
            </Suspense>
            <OrbitControls ref={controlsRef} />
        </Canvas>
    )
}
import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NON_HOVERABLE_MESHES = [
    'mesh_87', 'mesh_88', 'mesh_89', 'mesh_90', 'mesh_91',
    'mesh_247', 'mesh_31', 'mesh_39', 'mesh_40', 'mesh_34',
    'mesh_248', 'mesh_21', 'mesh_51', 'mesh_239', 'mesh_20',
    'mesh_240', 'mesh_241', 'mesh_244', 'mesh_238', 'mesh_245',
    'mesh_243', 'mesh_246', 'mesh_242'
]

const INTERACTIVE_MESHES = ['mesh_244', 'mesh_238', 'mesh_245', 'mesh_243', 'mesh_246', 'mesh_242']

// Mesh pairs that should scale together
const MESH_PAIRS = {
    'mesh_244': ['mesh_244', 'mesh_238'],  // About Me
    'mesh_238': ['mesh_244', 'mesh_238'],  // About Me
    'mesh_245': ['mesh_245', 'mesh_243'],  // Projects
    'mesh_243': ['mesh_245', 'mesh_243'],  // Projects
    'mesh_246': ['mesh_246', 'mesh_242'],  // Experience
    'mesh_242': ['mesh_246', 'mesh_242']   // Experience
}

// Text meshes that should scale less (238, 243, 242)
const TEXT_MESHES = ['mesh_238', 'mesh_243', 'mesh_242']
const TEXT_SCALE_FACTOR = 0.15  // Smaller scale for text meshes
const OBJECT_SCALE_FACTOR = 1.3 // Normal scale for object meshes

export function RaycastInteraction({ bobaShopRef, onMeshClick, hoverEnabled, onScalingChange }) {
    const { camera, gl } = useThree()
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())
    const hoveredObject = useRef(null)
    const objectStates = useRef({})
    const scalingObject = useRef(null)
    const isScalingDown = useRef(false)

    const handleMouseMove = (event) => {
        const rect = gl.domElement.getBoundingClientRect()
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        if (!bobaShopRef.current || !hoverEnabled || scalingObject.current) {
            hoveredObject.current = null
            return
        }

        raycaster.current.setFromCamera(mouse.current, camera)
        const intersects = raycaster.current.intersectObjects(bobaShopRef.current.children, true)

        if (intersects.length > 0) {
            const object = intersects[0].object
            
            if (!NON_HOVERABLE_MESHES.includes(object.name)) {
                if (!objectStates.current[object.uuid]) {
                    objectStates.current[object.uuid] = {
                        originalPosition: object.position.clone(),
                        originalScale: object.scale.clone(),
                        currentObject: object
                    }
                }
                hoveredObject.current = object
            }
        } else {
            hoveredObject.current = null
        }
    }

    const handleMouseClick = (event) => {
        // Ignore clicks that occur outside the canvas (e.g., on buttons)
        if (event.target !== gl.domElement) {
            return
        }

        const rect = gl.domElement.getBoundingClientRect()
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        if (!bobaShopRef.current) return

        raycaster.current.setFromCamera(mouse.current, camera)
        const intersects = raycaster.current.intersectObjects(bobaShopRef.current.children, true)

        if (intersects.length > 0) {
            const object = intersects[0].object
            if (INTERACTIVE_MESHES.includes(object.name)) {
                console.log('Clicked on interactive mesh:', object.name)
                // Show modal immediately without any scaling
                onMeshClick(object.name)
            }
        }
    }

    useFrame(() => {
        // Animate hovered object upward only if hover is enabled (skip for text meshes)
        if (hoveredObject.current && hoverEnabled && !scalingObject.current) {
            const state = objectStates.current[hoveredObject.current.uuid]
            if (state && !TEXT_MESHES.includes(hoveredObject.current.name)) {
                const targetY = state.originalPosition.y + 0.5
                hoveredObject.current.position.y += (targetY - hoveredObject.current.position.y) * 0.1
            }
        }

        // Animate non-hovered objects back to original position
        Object.values(objectStates.current).forEach((state) => {
            if (state.currentObject !== hoveredObject.current && !TEXT_MESHES.includes(state.currentObject.name)) {
                state.currentObject.position.y += (state.originalPosition.y - state.currentObject.position.y) * 0.1
            }
        })
    })

    useEffect(() => {
        gl.domElement.addEventListener('mousemove', handleMouseMove)
        gl.domElement.addEventListener('click', handleMouseClick)

        return () => {
            gl.domElement.removeEventListener('mousemove', handleMouseMove)
            gl.domElement.removeEventListener('click', handleMouseClick)
        }
    }, [gl, camera, hoverEnabled])

    // Store reset function in window for external access
    useEffect(() => {
        window.resetScalingObject = () => {
            isScalingDown.current = true
        }
        
        return () => {
            delete window.resetScalingObject
        }
    }, [])

    return null
}

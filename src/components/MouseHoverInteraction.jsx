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

// Text meshes that should scale less (238, 243, 242)
const TEXT_MESHES = ['mesh_238', 'mesh_243', 'mesh_242']

export function MouseHoverInteraction({ bobaShopRef, hoverEnabled }) {
    const { camera, gl } = useThree()
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())
    const hoveredObject = useRef(null)
    const objectStates = useRef({})

    const handleMouseMove = (event) => {
        const rect = gl.domElement.getBoundingClientRect()
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        if (!bobaShopRef.current || !hoverEnabled) {
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
                console.log('Hovering over mesh:', object.name)
            }
        } else {
            hoveredObject.current = null
        }
    }

    useFrame(() => {
        // Animate hovered object upward only if hover is enabled (skip for text meshes)
        if (hoveredObject.current && hoverEnabled) {
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

        return () => {
            gl.domElement.removeEventListener('mousemove', handleMouseMove)
        }
    }, [gl, camera, hoverEnabled])

    return null
}

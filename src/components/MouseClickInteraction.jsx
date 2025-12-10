import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

const INTERACTIVE_MESHES = ['mesh_244', 'mesh_238', 'mesh_245', 'mesh_243', 'mesh_246', 'mesh_242']

export function MouseClickInteraction({ bobaShopRef, onMeshClick }) {
    const { camera, gl } = useThree()
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())

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

    useEffect(() => {
        gl.domElement.addEventListener('click', handleMouseClick)

        return () => {
            gl.domElement.removeEventListener('click', handleMouseClick)
        }
    }, [gl, camera])

    return null
}

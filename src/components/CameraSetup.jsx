import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export function CameraSetup({ controlsRef }) {
    const { camera } = useThree()

    useEffect(() => {
        camera.position.set(7, 0, 0);
        // Constrain OrbitControls to stay inside
        if (controlsRef.current) {
            // Limit vertical rotation to prevent seeing above/below
            controlsRef.current.minPolarAngle = Math.PI * 0.3;
            controlsRef.current.maxPolarAngle = Math.PI * 0.5;

            // Limit horizontal rotation to only see inside the L opening (front-right)
            controlsRef.current.minAzimuthAngle = -Math.PI * 0.05;
            controlsRef.current.maxAzimuthAngle = Math.PI * 0.55;

            // Disable right-drag (pan)
            controlsRef.current.enablePan = false;

            // Set controls target
            controlsRef.current.update();
        }
    }, [camera, controlsRef]);

    return null
}

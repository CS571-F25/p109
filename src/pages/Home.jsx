import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei"
import { Bobashop } from '../components/Bobashop'
import { RaycastInteraction } from '../components/RaycastInteraction'
import { CameraSetup } from '../components/CameraSetup'
import { MeshModal } from '../components/MeshModal'
import { WelcomeScreen } from '../components/WelcomeScreen'

const ROUTE_TO_MESH = {
    '/about-me': 'mesh_244',
    '/projects': 'mesh_245',
    '/experience': 'mesh_246'
}

// Inverse mapping from mesh to route
const MESH_TO_ROUTE = {
    'mesh_244': '/about-me',
    'mesh_238': '/about-me',
    'mesh_245': '/projects',
    'mesh_243': '/projects',
    'mesh_246': '/experience',
    'mesh_242': '/experience'
}

export default function Home() {
    const controlsRef = useRef()
    const bobaShopRef = useRef()
    const raycastRef = useRef()
    const audioRef = useRef(null)
    const [selectedMesh, setSelectedMesh] = useState(null)
    const [hoverEnabled, setHoverEnabled] = useState(false)
    const [isScaling, setIsScaling] = useState(false)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [showHelp, setShowHelp] = useState(false)
    const [showWelcome, setShowWelcome] = useState(true)

    // Handle hash routing
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1) // Remove the '#'
            const meshName = ROUTE_TO_MESH[hash]
            if (meshName) {
                setSelectedMesh(meshName)
            } else {
                setSelectedMesh(null)
            }
        }

        // Handle initial load
        handleHashChange()

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const handleMeshClick = (meshName) => {
        setSelectedMesh(meshName)
        // Set the hash route when a mesh is clicked
        const route = MESH_TO_ROUTE[meshName]
        if (route) {
            window.location.hash = route
        }
    }

    const closeModal = () => {
        setSelectedMesh(null)
        setIsScaling(false)
        // Clear the hash when closing the modal
        window.location.hash = ''
    }

    const toggleHover = () => {
        setHoverEnabled(!hoverEnabled)
    }

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsMusicPlaying(!isMusicPlaying)
        }
    }

    const toggleHelp = () => {
        setShowHelp(!showHelp)
    }

    return (
        <>
            <Canvas style={{ width: '90vw', height: '90vh', margin: '0 auto', 
                display: 'block', border: '6px solid #2c2116ff', borderRadius: '10px', backgroundColor: '#bcdac3' }}>
                <CameraSetup controlsRef={controlsRef} />
                <RaycastInteraction 
                    bobaShopRef={bobaShopRef} 
                    onMeshClick={handleMeshClick} 
                    hoverEnabled={hoverEnabled}
                    onScalingChange={setIsScaling}
                />
                <Suspense fallback={null}>
                    <Stage controls={controlsRef}>
                        <group ref={bobaShopRef}>
                            <Bobashop />
                        </group>
                    </Stage>
                </Suspense>
                <OrbitControls ref={controlsRef} />
            </Canvas>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} loop>
                <source src="/p109/music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Hover Toggle Button */}
            <button
                onClick={toggleHover}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: hoverEnabled ? '#28a745' : '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    zIndex: 999,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                }}
            >
                {hoverEnabled ? 'Hover: ON' : 'Hover: OFF'}
            </button>

            {/* Music Button */}
            <button
                onClick={toggleMusic}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '200px',
                    padding: '10px 20px',
                    backgroundColor: isMusicPlaying ? '#007bff' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    zIndex: 999,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                }}
            >
                {isMusicPlaying ? '🎵 Music: ON' : '🔇 Music: OFF'}
            </button>

            {/* Question Button */}
            <button
                onClick={toggleHelp}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '350px',
                    padding: '10px 20px',
                    backgroundColor: showHelp ? '#ffc107' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    zIndex: 999,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                }}
            >
                ❓ Help
            </button>

            {/* Help Modal */}
            {showHelp && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 1000,
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    overflowY: 'auto'
                }}>
                    <h2 style={{ marginTop: 0, color: '#333' }}>How to Use</h2>
                    <p><strong>Hover:</strong> Toggle hover animation effects on objects</p>
                    <p><strong>Music:</strong> Play or pause background music</p>
                    <p><strong>Click Objects:</strong> Click on the interactive meshes to view more information</p>
                    <p><strong>Rotate Camera:</strong> Left-click and drag to rotate the view</p>
                    <p><strong>Zoom:</strong> Scroll to zoom in and out</p>
                    <button
                        onClick={toggleHelp}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            width: '100%'
                        }}
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Overlay for Help Modal */}
            {showHelp && (
                <div
                    onClick={toggleHelp}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999
                    }}
                />
            )}

            {/* Welcome Screen */}
            <WelcomeScreen showWelcome={showWelcome} setShowWelcome={setShowWelcome} />

            <MeshModal selectedMesh={selectedMesh} onClose={closeModal} />
        </>
    )
}
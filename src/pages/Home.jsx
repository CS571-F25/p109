import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei"
import { Bobashop } from '../components/Bobashop'
import { RaycastInteraction } from '../components/RaycastInteraction'
import { CameraSetup } from '../components/CameraSetup'
import { MeshModal } from '../components/MeshModal'
import { WelcomeScreen } from '../components/WelcomeScreen'
import { HamburgerNav } from '../components/HamburgerNav'
import '../styles/Home.css'

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

    const handleNavigate = (path) => {
        if (path === '/') {
            // Reset camera to original position
            if (controlsRef.current) {
                controlsRef.current.reset()
            }
            // Close any open modal and clear hash
            setSelectedMesh(null)
            window.location.hash = ''
        } else {
            // Navigate to the specified path
            window.location.hash = path
        }
    }

    return (
        <>
            <HamburgerNav onNavigate={handleNavigate} />

            <Canvas className="canvas-container">
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
                className={`control-button hover-button ${hoverEnabled ? 'enabled' : 'disabled'}`}
            >
                {hoverEnabled ? 'hover on' : 'hover off'}
            </button>

            {/* Music Button */}
            <button
                onClick={toggleMusic}
                className={`control-button music-button ${isMusicPlaying ? 'playing' : 'paused'}`}
            >
                {isMusicPlaying ? 'music on' : 'music off'}
            </button>

            {/* Question Button */}
            <button
                onClick={toggleHelp}
                className={`control-button help-button ${showHelp ? 'active' : 'inactive'}`}
            >
                help
            </button>

            {/* Help Modal */}
            {showHelp && (
                <div className="help-modal">
                    <h2>How to Use</h2>
                    <p><strong>Hover:</strong> Toggle hover animation effects on objects</p>
                    <p><strong>Music:</strong> Play or pause background music</p>
                    <p><strong>Click Objects:</strong> Click on the interactive meshes to view more information</p>
                    <p><strong>Rotate Camera:</strong> Left-click and drag to rotate the view</p>
                    <p><strong>Zoom:</strong> Scroll to zoom in and out</p>
                    <button
                        onClick={toggleHelp}
                        className="close-button"
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Overlay for Help Modal */}
            {showHelp && (
                <div
                    onClick={toggleHelp}
                    className="modal-overlay"
                />
            )}

            {/* Welcome Screen */}
            <WelcomeScreen showWelcome={showWelcome} setShowWelcome={setShowWelcome} />

            <MeshModal selectedMesh={selectedMesh} onClose={closeModal} />
        </>
    )
}
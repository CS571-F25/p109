import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei"
import { Bobashop } from '../components/Bobashop'
import { MouseClickInteraction } from '../components/MouseClickInteraction'
import { MouseHoverInteraction } from '../components/MouseHoverInteraction'
import { CameraSetup } from '../components/CameraSetup'
import { MeshModal } from '../components/modals/MeshModal'
import { WelcomeScreen } from '../components/WelcomeScreen'
import { HamburgerNav } from '../components/HamburgerNav'
import { HelpModal } from '../components/modals/HelpModal'
import { ImplementationModal } from '../components/modals/ImplementationModal'
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
    const [showImplementation, setShowImplementation] = useState(false)
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

    // No autoplay; music stays off until user clicks

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
                audioRef.current.play().catch(err => {
                    console.warn('Audio play interrupted:', err)
                })
            }
            setIsMusicPlaying(!isMusicPlaying)
        }
    }

    const toggleHelp = () => {
        setShowHelp(!showHelp)
    }

    const toggleImplementation = () => {
        setShowImplementation(!showImplementation)
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
            
            <button
                onClick={toggleImplementation}
                className={`implementation-button ${showImplementation ? 'active' : 'inactive'}`}
            >
                implementation
            </button>
            
            <h1 className="portfolio-title">em's portfolio</h1>

            <Canvas className="canvas-container">
                <CameraSetup controlsRef={controlsRef} />
                <MouseHoverInteraction 
                    bobaShopRef={bobaShopRef} 
                    hoverEnabled={hoverEnabled}
                />
                <MouseClickInteraction 
                    bobaShopRef={bobaShopRef} 
                    onMeshClick={handleMeshClick}
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
                <source src="/p109/website_items/bobamusic.mp3" type="audio/mpeg" />
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

            <HelpModal show={showHelp} onClose={toggleHelp} />
            <ImplementationModal show={showImplementation} onClose={toggleImplementation} />

            {/* Welcome Screen */}
            <WelcomeScreen showWelcome={showWelcome} setShowWelcome={setShowWelcome} />

            <MeshModal selectedMesh={selectedMesh} onClose={closeModal} />
        </>
    )
}
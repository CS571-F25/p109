import { useEffect, useState } from 'react'
import { AboutMe } from '../../pages/AboutMe'
import { Projects } from '../../pages/Projects'
import { Experience } from '../../pages/Experience'
import '../../styles/MeshModal.css'

const MESH_PAGES = {
    'mesh_244': <AboutMe />,
    'mesh_238': <AboutMe />,
    'mesh_245': <Projects />,
    'mesh_243': <Projects />,
    'mesh_246': <Experience />,
    'mesh_242': <Experience />
}

export function MeshModal({ selectedMesh, onClose }) {
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        // reset closing flag when a modal opens
        setIsClosing(false)
    }, [selectedMesh])

    if (!selectedMesh) return null

    const pageContent = MESH_PAGES[selectedMesh]

    const handleClose = () => {
        // Reset the scaling animation
        if (window.resetScalingObject) {
            window.resetScalingObject()
        }
        setIsClosing(true)
        setTimeout(onClose, 400) // allow closing animation to play
    }

    return (
        <div className={`mesh-modal-overlay ${isClosing ? 'closing' : ''}`}>
            <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
                {pageContent}

                <button
                    onClick={handleClose}
                    className="modal-close-button"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

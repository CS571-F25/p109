import { AboutMe } from '../pages/AboutMe'
import { Projects } from '../pages/Projects'
import { Experience } from '../pages/Experience'
import '../styles/MeshModal.css'

const MESH_PAGES = {
    'mesh_244': <AboutMe />,
    'mesh_238': <AboutMe />,
    'mesh_245': <Projects />,
    'mesh_243': <Projects />,
    'mesh_246': <Experience />,
    'mesh_242': <Experience />
}

export function MeshModal({ selectedMesh, onClose }) {
    if (!selectedMesh) return null

    const pageContent = MESH_PAGES[selectedMesh]

    const handleClose = () => {
        // Reset the scaling animation
        if (window.resetScalingObject) {
            window.resetScalingObject()
        }
        onClose()
    }

    return (
        <div className="mesh-modal-overlay">
            <div className="modal-content">
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

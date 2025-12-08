import { AboutMe } from '../pages/AboutMe'
import { Projects } from '../pages/Projects'
import { Experience } from '../pages/Experience'

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
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '80vh',
                overflowY: 'auto'
            }}>
                {pageContent}

                <button
                    onClick={handleClose}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export function HelpModal({ show, onClose }) {
    if (!show) return null

    return (
        <div className="help-modal help-dropdown" style={{ textAlign: 'left' }}>
            <h2>● portfolio navigation ●</h2>
            <p><strong>hover:</strong> click on the hover button to enable/disable hover interaction</p>
            <p><strong>music:</strong> play/pause background music</p>
            <p><strong>click:</strong> click on "about me" / "projects" / "experience" meshes to view more</p>
            <p><strong>rotate:</strong> left-click and drag to rotate the shop</p>
            <p><strong>zoom:</strong> scroll to zoom in and out</p>
        </div>
    )
}

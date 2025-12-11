export function ImplementationModal({ show, onClose }) {
    if (!show) return null

    return (
        <div className="help-modal implementation-dropdown" style={{ textAlign: 'left' }}>
            <h2>● how i made this? ●</h2>
            <p><strong>inspiration + sources</strong></p>
            <p><a href="https://www.jesse-zhou.com/" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">jesse's ramen</a> | <a href="https://bruno-simon.com/" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">bruno's home</a> | <a href="https://www.sooahs-room-folio.com/" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">sooah's room-folio</a> | <a href="https://www.handscraft.com/products/hands-craft-diy-miniature-house-kit-double-joy-bubble-tea?srsltid=AfmBOopXfib8l3KPYM35TNkOuYciJXVFM1D0fJm0kNiwZHqaWxf7jlDt" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">boba place img</a> | <a href="https://www.fontspace.com/super-bubbly-font-f122040" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">super bubbly font</a> | <a href="https://www.youtube.com/watch?v=kj1MDJXJ7-I" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">music</a></p>
            
            <p><strong>process</strong></p>
            <p><strong>1 - modeling:</strong> creating the boba shop 3d model</p>
            <p><strong>2 - exporting:</strong> MAYA obj to glTF using this <a href="https://github.com/matiascodesal/maya-glTF" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">exporter</a></p>
            <p><strong>3 - rendering:</strong> glTF to r3f using this <a href="https://gltf.pmnd.rs/" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }} target="_blank" rel="noopener noreferrer">converter</a></p>
            <p><strong>4 - programming:</strong> user interaction -> ui elements</p>
            <p><strong>5 - styling:</strong> adding information -> css styling</p>
            
            <p><strong>notes</strong></p>
            <p>MAYA is a 3D modeling and animation software by Autodesk, I learned this when taking ART 429 (3D Digital Studio I).</p>
            <p>React Three Fiber (r3f) allows you to render 3D graphics into your website using Canvas API.</p>
            <p>Copilot really helped in this process, particularly with React Three Fiber (r3f). r3f is the THREE.js equivalent for React JS. I learned THREE.js when taking CS559 (Computer Graphics) at UW-Madison and I highly recommend taking this class if you're interested in this type of work!</p>
        </div>
    )
}

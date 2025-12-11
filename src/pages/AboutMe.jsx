export function AboutMe() {
    return (
        <div style={{ color: '#503c25' }}>
            <h2 style={{ fontSize: '2em', }}>● about me ●</h2>
            <div style={{ padding: '0.5rem', color: '#503c25', fontSize: '1.25em', fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif", border: '5px solid #503c25', borderRadius: '18px' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/p109/other/Bus.png" alt="A photo of Emily Thao" style={{ width: '15rem', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>hi, my name is <strong>Emily</strong>.</p>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>i'm a senior at the University of Wisconsin-Madison</p>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>and i'm studying <strong>Computer Science + Information Science</strong>.</p>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>i'm hoping to go into <strong>interactive media & game design</strong>.</p>
                    </div>
                    <img src="/p109/other/Red_Gym.png" alt="A photo of Emily Thao" style={{ width: '15rem', borderRadius: '10px' }} />
                </div>
            </div>

            <h2 style={{ fontSize: '2em', marginTop:'1em' }}>● contact me! ●</h2>
            <div style={{ padding: '0.5rem', color: '#503c25', fontSize: '1.25em', fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif", border: '5px solid #503c25', borderRadius: '18px' }}>
                <a href="https://www.linkedin.com/in/emily-thao/" target="_blank" rel="noopener noreferrer">
                    <img src="/p109/contact_imgs/linkedin.png" alt="An image of the LinkedIn logo, altered for Emily's portfolio" style={{ width: '5rem', borderRadius: '10px' }} />
                </a>
                <a href="mailto:efthao@wisc.edu">
                    <img src="/p109/contact_imgs/email.png" alt="An image of an email icon, altered for Emily's portfolio" style={{ width: '5rem', borderRadius: '10px' }} />
                </a>
                <a href="https://oahte.itch.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/p109/contact_imgs/itchio.png" alt="An image of the Itch.io logo, altered for Emily's portfolio" style={{ width: '5rem', borderRadius: '10px' }} />
                </a>
            </div>
        </div>
    )
}

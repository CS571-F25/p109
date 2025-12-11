import '../styles/AboutMe.css';

export function AboutMe() {
    return (
        <div className="about-page">
            <h2 className="about-title">● about me ●</h2>
            <div className="about-card">
                <div className="about-flex">
                    <img src="/p109/other/Bus.png" alt="A photo of Emily Thao" className="about-photo" />
                    <div className="about-text">
                        <p>hi, my name is <strong>Emily</strong>.</p>
                        <p>i'm a senior at the University of Wisconsin-Madison</p>
                        <p>and i'm studying <strong>Computer Science + Information Science</strong>.</p>
                        <p>i'm hoping to go into <strong>interactive media &amp; game design</strong>.</p>
                    </div>
                    <img src="/p109/other/Red_Gym.png" alt="A photo of Emily Thao" className="about-photo" />
                </div>
            </div>

            <h2 className="about-title about-subtitle">● contact me! ●</h2>
            <div className="about-card about-contact" style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                <a href="https://www.linkedin.com/in/emily-thao/" target="_blank" rel="noopener noreferrer">
                    <img src="/p109/contact_imgs/linkedin.png" alt="An image of the LinkedIn logo, altered for Emily's portfolio" className="about-contact-icon" />
                </a>
                <a href="mailto:efthao@wisc.edu">
                    <img src="/p109/contact_imgs/email.png" alt="An image of an email icon, altered for Emily's portfolio" className="about-contact-icon" />
                </a>
                <a href="https://oahte.itch.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/p109/contact_imgs/itchio.png" alt="An image of the Itch.io logo, altered for Emily's portfolio" className="about-contact-icon" />
                </a>
            </div>
        </div>
    )
}

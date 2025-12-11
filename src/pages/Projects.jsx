import { PacmanGame } from '../components/PacmanGame';
import '../styles/Projects.css';
import '../styles/PacmanEmbed.css';

export function Projects() {
    return (
        <div style={{ color:'#503c25', fontSize: '1.5em', fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif" }}>
            <h2 style={{ fontSize: '2em', marginBottom: '0.5em' }}>● group projects ●</h2>
            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>pac-man</h3>
            <PacmanGame />

            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>finding love in chernobyl</h3>
            <div className="project-shell" style={{ borderColor: '#6bff70ff', background: 'radial-gradient(circle at 15% 15%, #1e2d1aff, #0e1a0dff 70%)' }}>
                <div style={{ justifyContent: 'center', display: 'flex', gap: '0.5rem' }}>
                    <img src="/p109/flic_imgs/flic_1.png" alt="A snapshot of the front cover of the Finding Love in Chernobyl Game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/flic_imgs/flic_2.png" alt="A snapshot of one of the dialogue options in the Finding Love in Chernobyl Game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/flic_imgs/flic_3.png" alt="A snapshot of the freeworld gameplay in Finding Love in Chernobyl Game." style={{ width: '20rem', borderRadius: '10px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '0.75em', margin: '0.5em', color: '#6bff70ff' }}><strong>designer, artist, and level designer</strong> in a team of 5</p>
                    <p style={{ fontSize: '0.75em', marginBottom: '0.5em', color: '#6bff70ff' }}>This is a Chernobyl dating simulator developed in GameMaker with asset design in Pixel Studio & Procreate.</p>
                </div>
            </div>

            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>green forms</h3>
            <div className="project-shell" style={{ borderColor: '#b0ffa2ff', background: 'radial-gradient(circle at 15% 15%, #2c3626ff, #2d3b26ff 70%)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    <img src="/p109/green_forms_imgs/greenforms_1.png" alt="A snapshot of the form making process (specifically adding questions to a form) in the Green Forms application." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/green_forms_imgs/greenforms_2.png" alt="A snapshot of the questions being added onto the form in the Green Forms application." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/green_forms_imgs/greenforms_3.png" alt="A snapshot of the sharing capabilities in the Green Forms application." style={{ width: '20rem', borderRadius: '10px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '0.75em', margin: '0.5em', color: '#b0ffa2ff' }}><strong>usability engineer & user experience designer</strong> in a team of 3</p>
                    <p style={{ fontSize: '0.75em', marginBottom: '0.5em', color: '#b0ffa2ff' }}>This is a simplistic form-making application based on analysis of Qualtrics.</p>
                </div>
            </div>

            <h2 style={{ fontSize: '2em', marginBottom: '0.5em' }}>● individual projects ●</h2>
            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>fall into the hole</h3>
            <div className="project-shell" style={{ borderColor: '#8b8b8bff', background: 'radial-gradient(circle at 15% 15%, #313131ff, #393939ff 70%)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    <img src="/p109/fith/fith_level_1.png" alt="A snapshot the first level of the Fall Into The Hole game (kept the same as the original version)." style={{ width: '20rem', borderRadius: '10px', border: '2px solid white' }} />
                    <img src="/p109/fith/fith_v1_level_2.gif" alt="A snapshot of the second level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_3.gif" alt="A snapshot of the third level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_4.gif" alt="A snapshot of the fourth level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_5.gif" alt="A snapshot of the fifth level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_6.gif" alt="A snapshot of the sixth level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_7.gif" alt="A snapshot of the seventh level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/fith/fith_v1_level_8.png" alt="A snapshot of the eighth level of the Fall Into The Hole game." style={{ width: '20rem', borderRadius: '10px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '0.75em', margin: '0.5em', color: '#cdcdcdff' }}><strong>level designer & artist</strong></p>
                    <p style={{ fontSize: '0.75em', marginBottom: '0.5em', color: '#cdcdcdff' }}>This was <a href="https://oahte.itch.io/fall-into-the-hole-pt2" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>iteration</a> of my <a href="https://oahte.itch.io/fall-into-the-hole" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>original</a> Fall into the Hole game in the Pocket Platformer engine.</p>
                </div>
            </div>

            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>boba the robot</h3>
            <div className="project-shell" style={{ borderColor: '#ff6666ff', background: 'radial-gradient(circle at 15% 15%, #2d1a1aff, #130d1a 70%)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    <img src="/p109/boba_the_robot_imgs/boba_side.jpg" alt="A snapshot of Boba the Robot's side profile." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/boba_the_robot_imgs/boba_front.jpg" alt="A snapshot of Boba the Robot's front profile." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/boba_the_robot_imgs/boba_back.jpg" alt="A snapshot of Boba the Robot's back profile." style={{ width: '20rem', borderRadius: '10px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '0.75em', margin: '0.5em', color: '#ff6666ff' }}><strong>3D modeler and character designer</strong></p>
                    <p style={{ fontSize: '0.75em', marginBottom: '0.5em', color: '#ff6666ff' }}>Boba is a large robot that travels into space and heals astronauts.</p>
                </div>
            </div>

            <h3 style={{ fontSize: '1.5em', lineHeight: '1.6', marginBottom: '0.5em' }}>growing up</h3>
            <div className="project-shell" style={{ borderColor: '#00d9ff', background: 'radial-gradient(circle at 15% 15%, #1a2d2d, #0d1a1a 70%)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }} >
                    <img src="/p109/growing_up_imgs/growing_up1.jpg" alt="A snapshot of the Growing Up project at a closer angle." style={{ width: '20rem', borderRadius: '10px' }} />
                    <img src="/p109/growing_up_imgs/growing_up2.jpg" alt="A snapshot of the Growing Up project at a wider angle." style={{ width: '20rem', borderRadius: '10px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '0.75em', margin: '0.5em', color: '#00d9ff' }}><strong>3D modeler and scene designer</strong></p>
                    <p style={{ fontSize: '0.75em', marginBottom: '0.5em', color: '#00d9ff' }}>A scene assembled of childhood mementos mixed with elements of work and school.</p>
                </div>
            </div>
        </div>
    )
}

import { PacmanGame } from '../components/PacmanGame';
import '../styles/Projects.css';
import '../styles/PacmanEmbed.css';

export function Projects() {
    return (
        <div className="projects-page">
            <h2 className="projects-title">● group projects ●</h2>
            <h3 className="projects-heading">pac-man</h3>
            <PacmanGame />

            <h3 className="projects-heading">finding love in chernobyl</h3>
            <div className="project-shell project-shell--chernobyl">
                <div className="project-gallery">
                    <img src="/p109/flic_imgs/flic_1.png" alt="A snapshot of the front cover of the Finding Love in Chernobyl Game." className="project-image" />
                    <img src="/p109/flic_imgs/flic_2.png" alt="A snapshot of one of the dialogue options in the Finding Love in Chernobyl Game." className="project-image" />
                    <img src="/p109/flic_imgs/flic_3.png" alt="A snapshot of the freeworld gameplay in Finding Love in Chernobyl Game." className="project-image" />
                </div>
                <div>
                    <p className="project-meta project-meta--chernobyl"><strong>designer, artist, and level designer</strong> in a team of 5</p>
                    <p className="project-meta project-meta--chernobyl">This is a Chernobyl dating simulator developed in GameMaker with asset design in Pixel Studio &amp; Procreate.</p>
                </div>
            </div>

            <h3 className="projects-heading">green forms</h3>
            <div className="project-shell project-shell--greenforms">
                <div className="project-gallery">
                    <img src="/p109/green_forms_imgs/greenforms_1.png" alt="A snapshot of the form making process (specifically adding questions to a form) in the Green Forms application." className="project-image" />
                    <img src="/p109/green_forms_imgs/greenforms_2.png" alt="A snapshot of the questions being added onto the form in the Green Forms application." className="project-image" />
                    <img src="/p109/green_forms_imgs/greenforms_3.png" alt="A snapshot of the sharing capabilities in the Green Forms application." className="project-image" />
                </div>
                <div>
                    <p className="project-meta project-meta--greenforms"><strong>usability engineer &amp; user experience designer</strong> in a team of 3</p>
                    <p className="project-meta project-meta--greenforms">This is a simplistic form-making application based on analysis of Qualtrics.</p>
                </div>
            </div>

            <h2 className="projects-title">● individual projects ●</h2>
            <h3 className="projects-heading">fall into the hole</h3>
            <div className="project-shell project-shell--fith">
                <div className="project-gallery">
                    <img src="/p109/fith/fith_level_1.png" alt="A snapshot the first level of the Fall Into The Hole game (kept the same as the original version)." className="project-image project-image--bordered" />
                    <img src="/p109/fith/fith_v1_level_2.gif" alt="A snapshot of the second level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_3.gif" alt="A snapshot of the third level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_4.gif" alt="A snapshot of the fourth level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_5.gif" alt="A snapshot of the fifth level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_6.gif" alt="A snapshot of the sixth level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_7.gif" alt="A snapshot of the seventh level of the Fall Into The Hole game." className="project-image" />
                    <img src="/p109/fith/fith_v1_level_8.png" alt="A snapshot of the eighth level of the Fall Into The Hole game." className="project-image" />
                </div>
                <div>
                    <p className="project-meta project-meta--fith"><strong>level designer &amp; artist</strong></p>
                    <p className="project-meta project-meta--fith">This was <a href="https://oahte.itch.io/fall-into-the-hole-pt2" target="_blank" rel="noopener noreferrer" className="project-link">iteration</a> of my <a href="https://oahte.itch.io/fall-into-the-hole" target="_blank" rel="noopener noreferrer" className="project-link">original</a> Fall into the Hole game in the Pocket Platformer engine.</p>
                </div>
            </div>

            <h3 className="projects-heading">boba the robot</h3>
            <div className="project-shell project-shell--boba">
                <div className="project-gallery">
                    <img src="/p109/boba_the_robot_imgs/boba_side.jpg" alt="A snapshot of Boba the Robot's side profile." className="project-image" />
                    <img src="/p109/boba_the_robot_imgs/boba_front.jpg" alt="A snapshot of Boba the Robot's front profile." className="project-image" />
                    <img src="/p109/boba_the_robot_imgs/boba_back.jpg" alt="A snapshot of Boba the Robot's back profile." className="project-image" />
                </div>
                <div>
                    <p className="project-meta project-meta--boba"><strong>3D modeler and character designer</strong></p>
                    <p className="project-meta project-meta--boba">Boba is a large robot that travels into space and heals astronauts.</p>
                </div>
            </div>

            <h3 className="projects-heading">growing up</h3>
            <div className="project-shell project-shell--growing">
                <div className="project-gallery">
                    <img src="/p109/growing_up_imgs/growing_up1.jpg" alt="A snapshot of the Growing Up project at a closer angle." className="project-image" />
                    <img src="/p109/growing_up_imgs/growing_up2.jpg" alt="A snapshot of the Growing Up project at a wider angle." className="project-image" />
                </div>
                <div>
                    <p className="project-meta project-meta--growing"><strong>3D modeler and scene designer</strong></p>
                    <p className="project-meta project-meta--growing">A scene assembled of childhood mementos mixed with elements of work and school.</p>
                </div>
            </div>
        </div>
    )
}

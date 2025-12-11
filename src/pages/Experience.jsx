import '../styles/Experience.css';

export function Experience() {
    return (
        <div className="experience-page">
            <h2 className="experience-title">● experience ●</h2>
            <div className="experience-sections">
                <div className="experience-card">
                    <h3 className="experience-heading">uw-madison</h3>
                    <p className="experience-detail">September 2022 - May 2026 (Expected)</p>
                    <p className="experience-detail">Bachelors of Science in <strong>Computer Science</strong> and <strong>Information Science</strong></p>
                    <p className="experience-detail">Certificates in Game Design, Asian American Studies, and Digital Studies</p>
                </div>
                <div className="experience-card">
                    <div className="experience-gallery">
                        <img src="/p109/mjl/CO25.png" alt="A snapshot of the form making process (specifically adding questions to a form) in the Green Forms application." className="experience-image" />
                        <img src="/p109/mjl/CO26.png" alt="A snapshot of the questions being added onto the form in the Green Forms application." className="experience-image" />
                        <img src="/p109/mjl/CO27.png" alt="A snapshot of the sharing capabilities in the Green Forms application." className="experience-image" />
                        <img src="/p109/mjl/CO28.png" alt="Another snapshot of the communications and social media work in the Mercile J Lee Scholars Program." className="experience-image" />
                    </div>
                    
                    <h3 className="experience-heading">mercile j lee scholars program</h3>
                    <p className="experience-detail">October 2023 - May 2025</p>
                    <p className="experience-detail">Communications and Social Media Intern</p>
                    <p className="experience-detail"><strong>Graphic design work:</strong> sweaters, stickers, posters, social media posts.</p>
                    <p className="experience-detail"><strong>Communications work:</strong> outreach events with prospective students + alumni.</p>
                    
                    <div className="experience-gallery">
                        <img src="/p109/mjl/CO27_old.png" alt="A snapshot of the form making process (specifically adding questions to a form) in the Green Forms application." className="experience-image" />
                        <img src="/p109/mjl/Hackathon_Sticker.png" alt="A snapshot of the questions being added onto the form in the Green Forms application." className="experience-image" />
                        <img src="/p109/mjl/MJL_Postcard.png" alt="A snapshot of the sharing capabilities in the Green Forms application." className="experience-image tall" />
                    </div>
                </div>
                <div className="experience-card experience-card--muted">
                    <h3 className="experience-heading">northwestern mutual</h3>
                    <p className="experience-detail">May 2022 - August 2023</p>
                    <p className="experience-detail">Software Engineer Intern</p>
                    <p className="experience-detail">Developed automation tools in C# to search and replace files in various developing environments.</p>
                    <p className="experience-detail">Practiced scrum skills by holding sprint meetings, daily stand-up, and software demonstrations.</p>
                    <div className="experience-gallery">
                        <img src="/p109/other/nm_1.png" alt="A snapshot of the form making process (specifically adding questions to a form) in the Green Forms application." className="experience-image tall" />
                        <img src="/p109/other/nm_2.png" alt="A snapshot of the questions being added onto the form in the Green Forms application." className="experience-image tall" />                    </div>
                </div>
            </div>
        </div>
    )
}

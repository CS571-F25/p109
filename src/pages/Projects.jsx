import { Container, Row, Col, Nav } from 'react-bootstrap';

import TitleSubDesc from '../components/TitleSubDesc';
import Resume from '../components/Resume';

export default function Projects() {
    const projectData = [
        {title:"organizer application", subtitle:"Human Computer Interaction Focus", description:"Nullam volutpat mollis nunc, ultrices vehicula ipsum suscipit pulvinar. Pellentesque egestas tempor risus, quis rutrum nisl bibendum et. Vivamus hendrerit nisl sed arcu vehicula maximus. Fusce sodales tristique rutrum. Nullam et ipsum nibh. Sed imperdiet laoreet sapien id pharetra. Morbi scelerisque arcu varius ipsum hendrerit porttitor vel ac felis. Integer a odio eget tellus ultrices suscipit fermentum vitae nisl. Maecenas facilisis velit in dolor lacinia dictum. Sed aliquam justo velit, eget euismod elit eleifend ut."},
        {title:"love in chernobyl", subtitle:"Game Design Semester 2 Project", description:"Nullam volutpat mollis nunc, ultrices vehicula ipsum suscipit pulvinar. Pellentesque egestas tempor risus, quis rutrum nisl bibendum et. Vivamus hendrerit nisl sed arcu vehicula maximus. Fusce sodales tristique rutrum. Nullam et ipsum nibh. Sed imperdiet laoreet sapien id pharetra. Morbi scelerisque arcu varius ipsum hendrerit porttitor vel ac felis. Integer a odio eget tellus ultrices suscipit fermentum vitae nisl. Maecenas facilisis velit in dolor lacinia dictum. Sed aliquam justo velit, eget euismod elit eleifend ut."}
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <TitleSubDesc
                        title="projects"
                        subtitle="from MM/YY to MM/YY"
                        description="this page is about projects i've worked on for work, school, and personally... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui mi, condimentum nec rhoncus quis, volutpat vitae urna. Curabitur dictum iaculis elit varius venenatis. Curabitur sit amet sapien sapien. Morbi lobortis pharetra malesuada. Aliquam lectus lectus, dictum nec leo id, malesuada interdum augue. Ut eu tempus leo, rutrum ornare turpis. Aliquam ultricies at nisl at blandit."
                    />
                    <Resume resumeList={projectData}/>
                </Col>
            </Row>
        </Container>
    );
}
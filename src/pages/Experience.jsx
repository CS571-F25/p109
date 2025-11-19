import { Container, Row, Col, Nav } from 'react-bootstrap';

import TitleSubDesc from '../components/TitleSubDesc';
import Resume from '../components/Resume';

export default function Experience() {
    const resumeData = [
        {title:"social media & communications intern", subtitle:"Mercile J. Lee Scholars Program", description:"Nullam volutpat mollis nunc, ultrices vehicula ipsum suscipit pulvinar. Pellentesque egestas tempor risus, quis rutrum nisl bibendum et. Vivamus hendrerit nisl sed arcu vehicula maximus. Fusce sodales tristique rutrum. Nullam et ipsum nibh. Sed imperdiet laoreet sapien id pharetra. Morbi scelerisque arcu varius ipsum hendrerit porttitor vel ac felis. Integer a odio eget tellus ultrices suscipit fermentum vitae nisl. Maecenas facilisis velit in dolor lacinia dictum. Sed aliquam justo velit, eget euismod elit eleifend ut."},
        {title:"software engineering intern", subtitle:"Northwestern Mutual", description:"Nullam volutpat mollis nunc, ultrices vehicula ipsum suscipit pulvinar. Pellentesque egestas tempor risus, quis rutrum nisl bibendum et. Vivamus hendrerit nisl sed arcu vehicula maximus. Fusce sodales tristique rutrum. Nullam et ipsum nibh. Sed imperdiet laoreet sapien id pharetra. Morbi scelerisque arcu varius ipsum hendrerit porttitor vel ac felis. Integer a odio eget tellus ultrices suscipit fermentum vitae nisl. Maecenas facilisis velit in dolor lacinia dictum. Sed aliquam justo velit, eget euismod elit eleifend ut."}
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <TitleSubDesc
                        title="experience"
                        subtitle="from MM/YY to MM/YY"
                        description="this page is all about my experiences in internships, work, and etc... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui mi, condimentum nec rhoncus quis, volutpat vitae urna. Curabitur dictum iaculis elit varius venenatis. Curabitur sit amet sapien sapien. Morbi lobortis pharetra malesuada. Aliquam lectus lectus, dictum nec leo id, malesuada interdum augue. Ut eu tempus leo, rutrum ornare turpis. Aliquam ultricies at nisl at blandit."
                    />
                    <Resume resumeList={resumeData}/>
                </Col>
            </Row>
        </Container>
    );
}
import { Container, Row, Col, Nav } from 'react-bootstrap';

import TitleSubDesc from '../components/TitleSubDesc';

export default function AboutMe() {
    return (
        <Container>
            <Row>
                <Col>
                    <TitleSubDesc
                        title="about me"
                        description="this page is all about me... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui mi, condimentum nec rhoncus quis, volutpat vitae urna. Curabitur dictum iaculis elit varius venenatis. Curabitur sit amet sapien sapien. Morbi lobortis pharetra malesuada. Aliquam lectus lectus, dictum nec leo id, malesuada interdum augue. Ut eu tempus leo, rutrum ornare turpis. Aliquam ultricies at nisl at blandit."
                    />
                </Col>
            </Row>
        </Container>
    );
}
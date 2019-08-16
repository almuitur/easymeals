import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue-grey darken-4" className="font-small pt-4 mt-4">
                {/* <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </Col>
                        <Col md="6">
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container> */}
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        <a href="https://www.linkToProject.com"> EasyMeals for Skylab, 2018. </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
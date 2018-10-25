import React from "react";

import {Row, Col, Container} from "reactstrap";


export class Login extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4"  className="p-4 text-center">
                        Qui ci va il form del login
                    </Col>
                    <Col md="8" className="p-4 text-center">
                        Qui ci va un immagine
                    </Col>
                </Row>
            </Container>
        )
    }
}
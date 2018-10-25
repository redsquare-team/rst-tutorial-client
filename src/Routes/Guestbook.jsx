import React from "react"

import { Col, Row, Container, Input, Button } from "reactstrap"

export class Guestbook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: "",
            message: "",
            chat: []
        }


        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }


    /**
     *  CUSTOM HANDLERS
     */

    handleSendMessage() {
        fetch('http://127.0.0.1:60000/guestbook/send-message', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "author": this.state.author,
                "message": this.state.message
            }
        })

        this.setState({ message: "" });
    }

    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    /**
     * REACT API
     */
    componentDidMount() {
        
    }



    render() {
        return (
            <Container>
                <Row className="p-4">
                    <Col sm="3" className="mt-2">
                        <Input onChange={this.handleAuthorChange} value={this.state.author} placeholder="Author..."></Input>
                    </Col>
                    <Col sm="9" className="mt-2 d-table">
                        <div className="d-table-cell">
                            <Input onChange={this.handleMessageChange} value={this.state.message} placeholder="Message..."></Input>
                        </div>
                        <div className="d-table-cell pl-2">
                            <Button onClick={this.handleSendMessage}>Send</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    Sto per inviare... {this.state.message}
                </Row>
                <Row className="p-4">
                    <Col className="text-center p-4 border rounded" style={
                        {
                            minHeight: "300px"
                        }
                    }>
                        Loading...
                    </Col>
                </Row>
            </Container>
        )
    }
}
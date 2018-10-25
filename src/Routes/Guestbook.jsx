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

    printMessages() {
        return this.state.chat.map(function(v) {
            var time=new Date(v.time);
            var date=time.toLocaleDateString();
            var hour=time.toLocaleTimeString();
            return (
                <div className="pt-2">
                    <b>{v.author} ({date+" "+hour})</b> : {v.message}
                </div>
            )
        });
    }

    handleSendMessage() {
        fetch('http://127.0.0.1:60000/guestbook/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "author": this.state.author,
                "message": this.state.message
            })
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({chat: data});
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

        var interval=() => {
            fetch("http://127.0.0.1:60000/guestbook/read-messages")
            .then(resp => resp.json()) // Transform the data into json
            .then((data) => {
                this.setState({chat: data});
            });
        }

        interval();

        setInterval(() => {
            interval.call(this);
        }, 1000);
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
                <Row className="p-4">
                    <Col className="p-4 border rounded"
                    style={
                        {
                            minHeight: "300px"
                        }
                    }>
                        {this.state.chat.length > 0 ? this.printMessages() : "Loading..."}
                    </Col>
                </Row>
            </Container>
        )
    }
}
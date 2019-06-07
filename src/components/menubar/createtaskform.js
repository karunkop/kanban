import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class createtaskform extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      task_id: Date.now()
    });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    const newCard = {
      id: this.props.column_id,
      title: this.state.title,
      description: this.state.description
    };
    console.log(newCard);
    this.props.addCard(newCard);
  };
  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.handleShow}>
          Add Task
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add tasks</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your task title"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted">
                  Please provide the title of task to be added.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={this.onChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default createtaskform;

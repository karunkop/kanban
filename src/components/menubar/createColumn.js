import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class createColumn extends Component {
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
    const newColumn = {
      column_id: this.props.id,
      category: this.state.category,
      style: this.state.style,
      task_card: []
    };
    console.log(newColumn);
    this.props.addColumn(newColumn);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleShow}
          disabled={this.props.active}
        >
          Add
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="column_id">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" defaultValue={this.props.id} />
                <Form.Text className="text-muted">
                  This is the default id of column..
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" onChange={this.onChange} />
              </Form.Group>

              <Form.Group controlId="style">
                <Form.Label>Style</Form.Label>
                <Form.Control type="text" onChange={this.onChange} />
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

export default createColumn;

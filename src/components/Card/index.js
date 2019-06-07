import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CustomCard extends Component {
  render() {
    return (
      <div className="content-draggable">
        <Card
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "30px",
            boxShadow: "2px 2px lightgrey"
          }}
        >
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text
              style={{
                textAlign: "justify"
              }}
            >
              <div
                style={{
                  backgroundColor: this.props.style,
                  height: "5px",
                  borderRadius: "30px",
                  marginBottom: "15px"
                }}
              />
              {/* <p>{this.props.description}</p> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CustomCard;

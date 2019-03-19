import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import meteo from "../src/meteo.json";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previsionArray: meteo.meteo.previsions.prevision
    };
  }

  render() {
    const ville = this.props.ville;
    const { previsionArray } = this.state;
    console.log(previsionArray[0].ville.$ville);
    return (
      <Card>
        <Container>
          <Row>
            <Card.Title>{this.props.ville}</Card.Title>
          </Row>
          <Row>
            <Col>
              <Card.Text>Maximales :{this.props.max}°</Card.Text>
            </Col>
            <Col>
              <Card.Text>Minimales :{this.props.min}°</Card.Text>
            </Col>
          </Row>
          {previsionArray.map(date => {
            return <p>future prevision</p>;
          })}
        </Container>
      </Card>
    );
  }
}

export default Detail;

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
      previsionArray: meteo.meteo.previsions.prevision,
      today: meteo.meteo.bulletin.date
    };
  }

  render() {
    const villeNow = this.props.ville;

    const { previsionArray } = this.state;
    const { today } = this.state;

    // console.log(previsionArray[0].ville);

    const previsionInfo = previsionArray.map(date => {
      return date.ville.find(ville => {
        return ville._id === villeNow;
      });
    });
    console.log(previsionInfo);

    return (
      <Card>
        <Container>
          <Row>
            <Card.Title>{this.props.ville}</Card.Title>
          </Row>
          <Row>
            <Card.Text>{today}</Card.Text>
          </Row>
          <Row>
            <Col>
              <Card.Text>Maximales :{this.props.max}°</Card.Text>
            </Col>
            <Col>
              <Card.Text>Minimales :{this.props.min}°</Card.Text>
            </Col>
          </Row>
          {previsionInfo.map(date => {
            // console.log(date.ville);
            // console.log(date);
            return (
              <Row>
                <Col>
                  <p> Maximales :{date._temperature_maxi}°</p>
                </Col>
                <Col>
                  <p>Minimales :{date._temperature_mini}</p>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Card>
    );
  }
}

export default Detail;

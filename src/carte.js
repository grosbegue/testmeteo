import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./App.css";

import meteo from "../src/meteo.json";
import Detail from "./Detail.js";

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteoArray: meteo.meteo.bulletin.ville
    };
  }
  render() {
    const { meteoArray } = this.state;

    return (
      <section className="Carte">
        <Container>
          <Row>
            <Col>
              {meteoArray.map(ville => {
                console.log(ville._id);
                return (
                  <Detail
                    ville={ville._id}
                    max={ville._temperature_maxi}
                    min={ville._temperature_mini}
                  />
                );
              })}
            </Col>
            <Col>
              <div className="carte" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Carte;

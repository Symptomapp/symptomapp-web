import { React, useEffect, useState } from "react";
import "./Diagnosis.css";
import Card from "react-bootstrap/Card";
import { getUserInfo } from "../../services/UserService";

const Diagnosis = ({ diagnosis }) => {
  console.log(diagnosis);

  return (
    <>
      <Card className="results--card">
        <Card.Header className="results---card--header">
          <Card.Title>Diagnosis</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ul className="diagnosis__list list-group-flush">
              {diagnosis.length === 1 ? (
                <li>{"Diagnosis"}</li>
              ) : (
                diagnosis.map((d) => (
                  <li
                    key={d}
                    className="list-group-item"
                  >
                    {" "}
                    {d}
                  </li>
                ))
              )}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Diagnosis;

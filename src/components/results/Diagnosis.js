import { React } from "react";
import "./Diagnosis.css";
import Card from "react-bootstrap/Card";

const Diagnosis = ({ diagnosis }) => {
  const url = 'https://www.google.com/search?q=';

  return (
    <>
      <Card className="results--card">
        <Card.Header className="results---card--header">
          <Card.Title>Diagnosis</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="diagnosis__list list-group-flush">
              {diagnosis.length === 0 ? (
                <p>{"No disgnosis offered, please visit a generalist doctor"}</p>
              ) : (
                diagnosis.map((d) => (
                  <a
                    key={d}
                    className="list-group-item diagnosis--link h5"
                    href={url+d}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {d}
                  </a>
                ))
              )}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Diagnosis;

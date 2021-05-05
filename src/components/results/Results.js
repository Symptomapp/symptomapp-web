import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Symptoms from "./Symptoms";
import Diagnosis from "./Diagnosis";
import Advertising from "./Advertising";
import Map from "./Map";
import CardDeck from "react-bootstrap/CardDeck";
import { getUserInfo } from "../../services/UserService";
import { getDiadnosis } from "../../services/Apimedic/ApimedicService";

const Results = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({ user });
  const [diagnosis, setDiagnosis] = useState([]);

  let {symptomId, symptomName} = useParams();

  
  useEffect(() => {
      getUserInfo(window.localStorage.userId).then((user) =>
      setCurrentUser(user)
      );
      
      getDiadnosis(symptomId).then(diagnosysList =>  setDiagnosis(diagnosysList.map(d => d.Issue.Name)))
      
  }, []);

  return (
    <div className="container m-3 mx-auto">
      <CardDeck className="mb-5">
        <Symptoms symptomName = {symptomName}/>
        <Diagnosis diagnosis = {diagnosis}/>
        <Advertising />
        <Map />
      </CardDeck>
    </div>
  );
};

export default Results;

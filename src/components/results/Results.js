import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Symptoms from "./Symptoms";
import Diagnosis from "./Diagnosis";
import Advertising from "./Advertising";
import Map from "./Map";
import CardDeck from "react-bootstrap/CardDeck";
import { getDiadnosis } from "../../services/Apimedic/ApimedicService";
import Loader from '../Loader'


const Results = () => {
  const [diagnosis, setDiagnosis] = useState([]);

  let {symptomId, symptomName} = useParams();

  const [loading, setLoading] = useState(true);

  const setLoaded = () => setLoading(false);

  
  useEffect(() => {
      getDiadnosis(symptomId).then(diagnosysList => {
          setDiagnosis(diagnosysList.map(d => d.Issue.Name));
          setLoaded()
        }
      )
      
  }, [symptomId]);

  return (
    <>
    { (loading) ? (<Loader />) : ('') }
    <div className="container mt-3 mb-5 pb-4 mx-auto">
      <CardDeck className="mb-5">
        <Symptoms symptomName = {symptomName}/>
        <Diagnosis diagnosis = {diagnosis}/>
        <Advertising />
        <Map />
      </CardDeck>
    </div>
    </>
  );
};

export default Results;

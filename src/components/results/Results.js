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
  const [keywords, setKeywords] = useState([]);

  let {symptomId, symptomName} = useParams();

  const [loading, setLoading] = useState(true);

  const setLoaded = () => setLoading(false);

  
  useEffect(() => {
      getDiadnosis(symptomId).then(diagnosysList => {
          console.log(diagnosysList);
          setKeywords(diagnosysList.map(d => d.Specialisation.map(k => k.Name)));
          setDiagnosis(diagnosysList.map(d => d.Issue.Name));
          setLoaded()
        }
      )

  }, [symptomId]);

  console.log(keywords)


  return (
    <>
    { (loading) ? (<Loader />) : ('') }
    <div className="container mt-3 mb-5 pb-4 mx-auto">
      <CardDeck className="mb-5">
        <Symptoms symptomName = {symptomName}/>
        <Diagnosis diagnosis = {diagnosis}/>
        <Advertising keywords = {keywords}/>
        <Map />
      </CardDeck>
    </div>
    </>
  );
};

export default Results;

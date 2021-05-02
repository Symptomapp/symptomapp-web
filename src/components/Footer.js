import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer"><Link to={{ pathname: "https://github.com/Symptomapp" }} target="_blank" className="Footer-link"><small><i className="fas fa-stethoscope"></i> symptomapp 2021</small></Link></div>
  );
}
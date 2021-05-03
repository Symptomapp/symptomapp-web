import { React, useEffect, useState } from 'react';
import symptoms_json from '../data/symptoms.json'

const symptoms = symptoms_json.map(symptom => {
    return symptom.Name
});

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
 
    useEffect(() => {
        const results = symptoms.filter(person =>
        person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

  return (
    <div className="container m-5">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="mt-3">
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search
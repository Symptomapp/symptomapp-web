import { React, useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import symptoms_json from '../data/symptoms.json'

const symptoms = symptoms_json.map(symptom => {
    return {name: symptom.Name, id: symptom.ID}
});

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
      const results = symptoms.filter(function (el) {
        return el.name.toLowerCase().includes(searchTerm);
      });
      setSearchResults(results);
    }, [searchTerm]

    )

  return (
    <>
    <Jumbotron fluid className="mb-5">
      <Container>
          <h1>Symptom search</h1>
          <p>
          Search for any particular symptom. You can use the search bar below to filter results.
          </p>
          <div className="d-flex justify-content-center h-100 mb-5">
            <div className="searchbar mt-3">
              <input
                className="search_input" 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
              />
            <div className="search_icon"><i className="fas fa-search"></i></div>
            </div>
          </div>
          <Table className="search--table">
            <tbody>
              {searchResults.map(item => (
                <tr key={item.name}>
                <td className="search--row"><a href={"/results/"+item.id+"/"+item.name} className="search--link">{item.name}</a></td>
              </tr>
              ))}
            </tbody>
          </Table>
      </Container>
    </Jumbotron>
    </>
  );
}

export default Search
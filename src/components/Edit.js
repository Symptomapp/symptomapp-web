import { React, useEffect, useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getUserInfo } from '../services/UserService';
import API_URL from '../constants/constants';

const axios = require('axios').default;

const Edit = () => {

  const [user, setUser] = useState({})

  const [message, setMessage] = useState({});

  //const [data, setData] = useState({});

  useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setUser({
            email: user.email,
            name: user.name,
            surname: user.surname,
            picture: user.picture,
            age: user.age,
            sex: user.sex,
            city: user.city,
            _id: user._id,
            token: user.token
        }))
    }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${API_URL}/users/edit/${user._id}/${user.token}`, user)
    .then(function (response) {
        setMessage(response.data);
        window.location.assign('/profile')
    })
    .catch(function (error) {
        console.log(error);
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser(prev => {
      return {
          ...prev,
          [name]: value,
        }
    });
    
    // setUser(prev => {
    //   return {
    //     ...prev,
    //     user: {
    //       ...prev.user,
    //       [name]: value,
    //     }
    //   }
    // });

  };

  return (
    <div className="container mt-5 mb-5">
        { message._id ? <><Alert variant="success" className="mb-5">{ message.name }, your profile has been updated.</Alert><div className="text-center"><Link to="/log-in" className="mt-3"><Button variant="primary" className="text-center">Login</Button></Link></div></> : "" }
        { message.code ? <Alert variant="danger" className="mb-5">Ups, there's something wrong with data provided. </Alert> : "" }
        { message.message ? <Alert variant="danger" className="mb-5">Ups, there's something wrong with data provided: { message.message }</Alert> : "" }
        { message._id 
            ? "" 
            :  <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} autoComplete="email" required/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={handleChange} autoComplete="given-name" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" name="surname" value={user.surname} onChange={handleChange} autoComplete="family-name" required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridPicture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="url" placeholder="http://www..." name="picture" value={user.picture} onChange={handleChange} autoComplete="photo"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" min="18" max="99" placeholder="Age" name="age" value={user.age} onChange={handleChange} autoComplete="bday-year" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control as="select" name="sex" onChange={handleChange} autoComplete="sex" required>
                        { user.sex === 'Male' ? <option selected>Male</option> : <option>Male</option> }
                        { user.sex === 'Female' ? <option selected>Female</option> : <option>Female</option> }
                        { user.sex === 'Other' ? <option selected>Other</option> : <option>Other</option> }
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Your city" name="city" value={user.city} onChange={handleChange} autoComplete="address-level2" required/>
                    </Form.Group>
                </Form.Row>

                <Button className="button--primary" type="submit">
                    Submit
                </Button>
                </Form>
        }

    </div>
  );
}

export default Edit
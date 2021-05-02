import { React, useEffect, useState } from 'react';
import { getUserInfo } from '../services/UserService';

const Links = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
            <div className="container mt-5 text-center">
            <div><img src={state.picture} className="profile--picture" alt={state.name}/></div>
            <div className="profile--data">Links</div>

        </div>
    );
}

export default Links
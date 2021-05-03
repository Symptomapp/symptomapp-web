import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getUserInfo } from '../../services/UserService';

const Advertising = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Advertising</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <ins class="adsbygoogle"
                    data-ad-format="fluid"
                    data-ad-layout="in-article"
                    data-ad-client="ca-pub-0123456789101112"
                    data-ad-slot="9876543210"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/960px-Google_Ads_logo.svg.png" width="100%" height="100%" style={{opacity:0.25}} />
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Advertising
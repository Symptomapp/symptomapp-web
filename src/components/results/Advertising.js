import { React } from 'react';
import Card from 'react-bootstrap/Card';
import AdWords from '../../AdWords.png'

const Advertising = ({keywords}) => {
   
    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Advertising</Card.Title>
            </Card.Header>
            <Card.Body className="advertising--card">
            <Card.Text>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <ins className="adsbygoogle"
                    data-ad-format="fluid"
                    data-ad-layout="in-article"
                    data-ad-client="ca-pub-0123456789101112"
                    data-ad-slot="9876543210"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <img src={AdWords} width="100%" alt="AdWords logo"/>
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Advertising
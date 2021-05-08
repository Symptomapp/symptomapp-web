import { React } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Links = () => {
   
    return (
        <>
        <Jumbotron fluid className="mb-0">
            <Container className="mb-0">
                <h1>About Symptomapp</h1>
                <p>
                Symptomapp offers a medical symptom checker primarily for patients. Based on the entered symptoms it tells the patient what possible diseases he has. Symptomapp only tells patient some possible diseases, further medical examination will be required.
                </p>
                <p>You can find more information in the following links:</p>
            </Container>
        </Jumbotron>
        <div className="links--container">
        <CardColumns className="mx-4 mb-5">
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_960_720.jpg" />
                <Card.Body>
                    <Card.Title>Ministerio de Sanidad</Card.Title>
                    <Card.Text>
                    Corresponde al Ministerio de Sanidad, la propuesta y ejecución de la política del Gobierno en materia de salud, de planificación y asistencia sanitaria, así como el ejercicio de las competencias de la Administración General del Estado para asegurar a los ciudadanos el derecho a la protección de la salud.
                    </Card.Text>
                    <Button className="button--primary" href="https://www.mscbs.gob.es/" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423__340.jpg" />
                <Card.Body>
                    <Card.Title>World Health Organization</Card.Title>
                    <Card.Text>
                    WHO supports open access to the published output of its activities as a fundamental part of its mission and a public benefit to be encouraged wherever possible.
                    </Card.Text>
                    <Button className="button--primary" href="https://www.who.int/home" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149__340.jpg" />
                <Card.Body>
                    <Card.Title>Salud | Comunidad de Madrid</Card.Title>
                    <Card.Text>
                    En estas páginas se recogen contenidos sobre salud, prevención y hábitos saludables. Además,  se facilita el acceso a servicios on line de interés para la asistencia sanitaria.
                    </Card.Text>
                    <Button className="button--primary" href="https://www.comunidad.madrid/servicios/salud" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191__340.jpg" />
                <Card.Body>
                    <Card.Title>Symptom Checker API</Card.Title>
                    <Card.Text>
                    ApiMedic offers a medical symptom checker primarily for patients. Based on the entered symptoms it tells the patient what possible diseases he has.
                    </Card.Text>
                    <Button className="button--primary" href="https://apimedic.com/" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/05/19/49/syringe-1884784__340.jpg" />
                <Card.Body>
                    <Card.Title>Public Health | European Commission</Card.Title>
                    <Card.Text>
                    EU countries hold primary responsibility for organising and delivering health services and medical care. EU health policy therefore serves to complement national policies, and to ensure health protection in all EU policies.
                    </Card.Text>
                    <Button className="button--primary" href="https://ec.europa.eu/health/home_en" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641__340.jpg" />
                <Card.Body>
                    <Card.Title>Symptom Checker with Body from WebMD</Card.Title>
                    <Card.Text>
                    This tool does not provide medical advice It is intended for informational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment. Never ignore professional medical advice in seeking treatment because of something you have read on the WebMD Site. If you think you may have a medical emergency, immediately call your doctor or dial 911.
                    </Card.Text>
                    <Button className="button--primary" href="https://symptoms.webmd.com/" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092__340.jpg" />
                <Card.Body>
                    <Card.Title>Symptom Checker - Mayo Clinic</Card.Title>
                    <Card.Text>
                    Use the Symptom Checker to find out what's causing your symptom. SelectedChoose a symptom; Select related factors; View possible causes. Adult Symptoms.
                    </Card.Text>
                    <Button className="button--primary" href="https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984__340.jpg" />
                <Card.Body>
                    <Card.Title>Symptom Checker at Patient</Card.Title>
                    <Card.Text>
                    Online symptom checkers are calculators that ask users to input details about their signs and symptoms of sickness, along with their gender, age and location.
                    </Card.Text>
                    <Button className="button--primary" href="https://patient.info/symptom-checker" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            <Card className="p-3 card--link">
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/10/20/26/stethoscope-1584223__340.jpg" />
                <Card.Body>
                    <Card.Title>Check your symptoms online - Symptomate</Card.Title>
                    <Card.Text>
                    You’re about to use a short (3 min), safe and anonymous health checkup. Your answers will be carefully analyzed and you’ll learn about possible causes of your symptoms.
                    </Card.Text>
                    <Button className="button--primary" href="https://symptomate.com/diagnosis/" target="_blank">Visit website</Button>
                </Card.Body>
            </Card>
            </CardColumns>
            </div>
        </>
    );
}

export default Links
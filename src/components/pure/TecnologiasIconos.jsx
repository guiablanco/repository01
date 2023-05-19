import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//images
import logoReact from '../../assets/images/react-logo.png';
import logoHTML from '../../assets/images/HTML5.png';
import logoCSS from '../../assets/images/CSS3.png';
import logoSASS from '../../assets/images/sass-logo.png';
import logoJavascript from '../../assets/images/JavaScript.png';
import logoJava from '../../assets/images/java1366_2000.png';
import logoSpring from '../../assets/images/spring.png';
import logoBootstrap from '../../assets/images/Bootstrap_logo.png';
import logoReactBootstrap from '../../assets/images/ReactBootstrap-logo.png';
import logoRedux from '../../assets/images/Redux-logo.png';
import logoEslint from '../../assets/images/logo-eslint.png';
import logoReactRouterDom from '../../assets/images/react-router-dom.png';
import logoSpringBoot from '../../assets/images/spring-boot-logo.png';
import logoGoogleFonts from '../../assets/images/Google-Fonts-Logo.png';
import logoJUnit5 from '../../assets/images/JUnit-logo.png';
import logoMockito from '../../assets/images/mockito-logo.png';

import '../../styles/profile.scss'

const TecnologiasIconos = () => {
    return (
        <div className='container'>

            <Container>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '35rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoReact} style={{width:'10rem'}} />
                                    <Card.Body>
                                        <Card.Title>React JS Básico</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '20rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoReactRouterDom} style={{width:'1.6rem'}} /> React-Router-Dom</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoReactBootstrap} style={{width:'1.7rem'}} /> React-Bootstrap</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoRedux} style={{width:'1.6rem'}} /> Redux</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1X19rLfbViRlysD6l9_MBygV92i4PACOj/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '35rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoJavascript} style={{width:'6.6rem'}} />
                                    <Card.Body>
                                        <Card.Title>JavaScript</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '20rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoReact} style={{width:'2rem'}} />ReactJs</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoBootstrap} style={{width:'1.8rem'}} /> Bootstrap</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoEslint} style={{width:'1.8rem'}} /> Eslint</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1PQseG9OzthEu_pxKuRA231FHaRtTnFoq/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '35rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoHTML} style={{width:'4.3rem'}} />
                                    <Card.Img variant="top" src={logoCSS} style={{width:'3rem'}} />
                                    <Card.Body>
                                        <Card.Title>HTML5 Y CSS</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '20rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSASS} style={{width:'1.8rem'}} /> SASS</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoJavascript} style={{width:'1.5rem'}} /> JavaScript</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoGoogleFonts} style={{width:'2.5rem'}} /> Google Fonts</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1kXJK7Ur6mKJkE2IWDi4thbASluD4ZklZ/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '35rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoJava} style={{width:'6.6rem'}} />
                                    <Card.Body>
                                        <Card.Title>Java</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '20rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSpring} style={{width:'1.8rem'}} /> Spring</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoJUnit5} style={{width:'3rem'}} /> JUnit</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoMockito} style={{width:'3.5rem'}} /> Mockito</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1dwg2OM-iP2j1Ne7BXeU0MviJWvJZUXjd/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '35rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoSpring} style={{width:'6.6rem'}} />
                                    <Card.Body>
                                        <Card.Title>Spring</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '20rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSpringBoot} style={{width:'3rem'}} />  Spring Boot</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoJUnit5} style={{width:'3rem'}} /> JUnit</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoMockito} style={{width:'3.5rem'}} /> Mockito</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1lalXTu0rqU_WXQChMY5Rx5Gz2C3PnsJv/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TecnologiasIconos;

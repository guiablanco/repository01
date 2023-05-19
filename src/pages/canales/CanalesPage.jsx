import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//images
import instagramLogo from '../../assets/images/instagram-logo.png';
import tiktokLogo from '../../assets/images/TikTok_logo.png';
import tiktokScreen from '../../assets/images/tiktok-screen.png';
import youtubeLogo from '../../assets/images/YouTube-logo.webp';

import ejercicio33 from '../../assets/videos/ejercicio33-instagram.mp4';




const CanalesPage = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <div >
                <h1 style={{marginTop:'2rem'}}>Otros Canales de Difusión</h1>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Card style={{ width: '30rem', margin:'5rem 5rem 1rem 5rem', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Card.Body>
                        
                            <div>
                                <iframe
                                    src={ejercicio33}
                                    width="400rem"
                                    height="600rem"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                ></iframe>
                            </div>

                        </Card.Body>
                        <Card.Img variant="top" src={instagramLogo} />
                        <Card.Body>
                            <Card.Title>Tus clases de matemática online</Card.Title>
                            <Card.Text>
                            Canal de desarrollo de ejercicios de matemática, principalmente, PAES de Matemática 2023
                            </Card.Text>
                            <Button href='https://www.instagram.com/tusclasesdematematicaonline/' variant="primary">Ve al canal</Button>
                        </Card.Body>
                    </Card>
                
                    <Card style={{ width: '30rem', marginTop:'5rem', display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'0' }}>

                        <Card.Img variant="top" src={tiktokScreen} style={{width:'20rem', height:'37rem', margin:'1.5rem 0', paddingTop:'0', border:'solid'}} />
                        <Card.Img variant="top" src={tiktokLogo} style={{width:'20rem'}}  />
                        <Card.Body>
                            <Card.Title>Tus clases de matemática online</Card.Title>
                            <Card.Text>
                            Canal de desarrollo de ejercicios de matemática, principalmente, PAES de Matemática 2023
                            </Card.Text>
                            <Button href='https://www.tiktok.com/@clasesdematematicaonline' variant="primary">Ve al canal</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{paddingLeft:'7rem'}}>
                    <Card style={{ width: '60rem', height:'50rem', marginTop:'5rem', display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'0' }}>
                    <iframe
                    width="840rem"
                    height="482rem"
                    src="https://www.youtube.com/embed/v4McdnkNlkE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                        
                        <Card.Img variant="top" src={youtubeLogo} style={{width:'20rem', margin:'2rem'}}  />
                        <Card.Body>
                            <Card.Title>ProfeSebaMat</Card.Title>
                            <Card.Text>
                                Canal de desarrollo de diferentes temas para aprender matemática de nivel escolar, con ejemplos
                            </Card.Text>
                            <Button href='https://www.youtube.com/@profesebamat9224' variant="primary">Ve al canal</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CanalesPage;

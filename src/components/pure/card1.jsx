/*eslint-disable */
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import canalesProject from '../../assets/images/canales-proyect.jpg';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));





const Card1 = () => {

    

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [corazon, setCorazon] = useState('action')

    const redheart = () => {
        if(corazon === 'action'){
            setCorazon('error')
        } else {
            setCorazon('action')
        }
    }

    const navigate = useNavigate();



    return (

        

        <div>
            <Card className='card1' style={{margin:'1rem', width:'18rem', height: !expanded ? '35rem': '65rem'}} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar 
                        style={{cursor:'pointer'}} 
                        onClick={() => navigate('/channels')} 
                        sx={{ bgcolor: blue[500] }} 
                        aria-label="recipe">
                            C
                        </Avatar>
                        }
                        title="Canales de Difusión"
                        subheader="Redes Sociales"
                    />
                    <CardMedia style={{cursor:'pointer'}} onClick={() => navigate('/channels')}
                        component="img"
                        height="300"
                        image={canalesProject}
                        alt="Canales Difusion img"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Este proyecto presenta 3 redes sociales con videos alojados, embebidos y botones que llevan a los respectivos canales, que hoy están activos.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton onClick={redheart} aria-label="add to favorites">
                            <FavoriteIcon color={corazon} />
                        </IconButton>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography variant="h6" gutterBottom style={{margin:'2rem 0'}}>Elementos para su desarrollo</Typography>
                        <Typography paragraph>
                            Proyecto desarrollado usando React, centrándose en los componentes visualizados de forma sencilla y responsiva.
                        </Typography>
                        <Typography paragraph>
                            Se usaron elementos de la librería Bootstrap y React Bootstrap para facilitar los procesos de producción de componentes, como cadrs y botones.
                        </Typography>
                        <Typography paragraph>
                            Se usó el sistema de embebido de YouTube, con el fin de mejorar la forma de compartir videos
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    );
}

export default Card1;

/*eslint-disable */
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
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
import { blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import canalesProject from '../../assets/images/home-proyect.jpg';



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




const Card4 = () => {

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
                        <Avatar style={{cursor:'pointer'}} onClick={() => navigate('/')} sx={{ bgcolor: red[500] }} aria-label="recipe">
                            P
                        </Avatar>
                        }
                        title="Portafolio"
                        subheader="Redes Sociales"
                    />
                    <CardMedia
                        style={{cursor:'pointer'}} onClick={() => navigate('/')}
                        component="img"
                        height="300"
                        image={canalesProject}
                        alt="Perfil Profesional img"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Este proyecto presenta toda la web asociada a los proyectos y perfil de usuario. Cuenta con navegación y correción de rutas por Error404.
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
                            Proyecto desarrollado usando React, usando elementos de React-Bootstrap y MaterialUI, para tener componentes más amigables a la vista.
                        </Typography>
                        <Typography paragraph>
                            Se usó la librería react-router-dom v6 para realizar el sistema de enrutado, mejorando la navegación con el Hook useNavigate.
                        </Typography>
                        <Typography paragraph>
                            Para mejorar los estilos se trabajó con los hooks useState y useEffect, en la interacción con algunos elementos
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    );
}

export default Card4;

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
import canalesProject from '../../assets/images/perfil-proyect.jpg';



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




const Card3 = () => {

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
            <Card className='card1' style={{margin:'1rem',width:'18rem', height: !expanded ? '35rem': '65rem'}} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar style={{cursor:'pointer'}} onClick={() => navigate('/linkedin')} sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
                            P
                        </Avatar>
                        }
                        title="Perfil Profesional"
                        subheader="Redes Sociales"
                    />
                    <CardMedia
                        style={{cursor:'pointer'}} onClick={() => navigate('/linkedin')}
                        component="img"
                        height="300"
                        image={canalesProject}
                        alt="Perfil Profesional img"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Este proyecto presenta una card en modo oscuro y con dimensiones llamativas que lleva al perfil de LinkedIn. Además, tiene un visualizados de PDF con el CV del usuario.
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
                            Proyecto desarrollado usando React, React-Bootstrap y Sass para mejorar los estilos.
                        </Typography>
                        <Typography paragraph>
                            Además, se insertó un archivo en formato pdf, ya que es el documento portable por excelencia y que cualquier navegador puede visualizar, sin necesidad de otros softwares.
                        </Typography>
                        
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    );
}
export default Card3;

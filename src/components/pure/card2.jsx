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
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images

import tasksProject from '../../assets/images/tasks-proyect.jpg';



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
const Card2 = () => {

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
            <Card className='card2' style={{margin:'1rem',width:'18rem', height: !expanded ? '35rem': '65rem'}} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar style={{cursor:'pointer'}} onClick={() => navigate('/tasks')} sx={{ bgcolor: grey[700] }} aria-label="recipe">
                            T
                        </Avatar>
                        }
                        title="Lista de Tareas"
                        subheader="En modo de prueba"
                    />
                    <CardMedia style={{cursor:'pointer'}} onClick={() => navigate('/tasks')}
                        component="img"
                        height="300"
                        image={tasksProject}
                        alt="Tasks img"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Una app para gestionar tus tareas, puedes crear, darle prioridad y eliminar tus tareas. También podrás marcar las tareas que ya tienes terminadas, con los botones de acción
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
                            Proyecto desarrollado usando React, buscando una visualización e interacción amigable con la tabla de tareas.
                        </Typography>
                        <Typography paragraph>
                            Se usaron elementos de la librería MaterialUI para trabajar los íconos y botones.
                        </Typography>
                        <Typography paragraph>
                            Ademas, se usó Formik, Yup y Redux, para gestionar formularios y estados dentro de la aplicación
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    );
}

export default Card2;

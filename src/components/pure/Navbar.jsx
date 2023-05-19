import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


//style
import '../../styles/navbar.scss'

const Navbar = () => {

    const navigate = useNavigate();



    return (
        <div>
            <ButtonGroup  variant="text" aria-label="text button group" color='warning'>
                <Button style={{color:'white', fontWeight:'600'}} href='#' onClick={()=> navigate(-1)} >Back</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='/' >Home</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='proyectos'>Proyectos</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='channels'>Canales</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='tasks'>Tasks</Button> 
                <Button style={{color:'white', fontWeight:'600'}} href='linkedin'>LinkedIn y CV</Button>
            </ButtonGroup>
        </div>
    );
}

export default Navbar;

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

//icons
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DeleteIcon from '@mui/icons-material/Delete';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

//style
import '../../styles/taskDescription.scss';

const TaskDescription = () => {
    return (
        <div>
            <ListGroup  variant='flush' >
                <ListGroupItem style={{backgroundColor:'transparent', color:'white', width:'25rem'}} > 
                    <div className='item-list'>
                        <DensityMediumIcon className='icon'/> <p>Ordena tus tareas en un solo lugar, donde podrás detallar la prioridad que debes darle.</p>
                    </div>
                </ListGroupItem>
                <ListGroupItem style={{backgroundColor:'transparent', color:'white', width:'25rem'}} > 
                    <div className='item-list'>
                        <AssignmentTurnedInIcon className='icon'/> <p>Verifica si las tareas ya fueron terminadas o entán en proceso de desarrollo. Cambia su estado con el botón toggle que está al lado del botón rojo con forma de basurero.</p>
                    </div>
                </ListGroupItem>
                <ListGroupItem style={{backgroundColor:'transparent', color:'white', width:'25rem'}} > 
                    <div className='item-list'>
                        <MobileScreenShareIcon className='icon'/> <p>Crea nuevas tareas, asingándole una Id, un Nombre, una Descripción y dándole una Prioridad, para que haya mayor claridad.</p>
                    </div>
                </ListGroupItem>
                <ListGroupItem style={{backgroundColor:'transparent', color:'white', width:'25rem'}} > 
                    <div className='item-list'>
                        <DeleteIcon className='icon'/> <p>Si has terinado la tarea puedes eliminarla, para que ya no aparezca en tu lista. Aún no contamos con respaldo, así que si borras una tarea no podrás recuperarla, así que CUIDADO.</p>
                    </div>
                </ListGroupItem>
                <ListGroupItem style={{backgroundColor:'transparent', color:'white', width:'25rem'}} > 
                    <div className='item-list'>
                        <SelfImprovementIcon className='icon'/> <p>Sin embargo, esta es una versión de prueba, por lo que puedes usar todos los botones, y si quieres dejarlos como estaban en un principio, solo refresca la página.</p>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default TaskDescription;

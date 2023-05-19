
import ListGroup from 'react-bootstrap/ListGroup';


//icons
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

//style
import '../../styles/homelist.scss';

const HomeList = () => {
    return (
      <div>
        <ListGroup variant="flush" className='list-group'>
          <ListGroup.Item className='list-element'><DensityMediumIcon className='icon'/> <p>Ordena tus tareas en un solo lugar, donde podrás detallar la prioridad que debes darle.</p> </ListGroup.Item>
          <ListGroup.Item className='listElement'><AssignmentTurnedInIcon className='icon'/> <p>Verifica si las tareas ya fueron terminadas o entán en proceso de desarrollo. Cambia su estado con el botón toggle que está al lado del botón rojo con forma de basurero. </p> </ListGroup.Item>
          <ListGroup.Item className='listElement'><MobileScreenShareIcon className='icon'/> <p>Crea nuevas tareas, asingándole una Id, un Nombre, una Descripción y asignándole una Prioridad.</p> </ListGroup.Item>
          <ListGroup.Item className='listElement'> <MarkEmailReadIcon className='icon'/> <p>Si has terinado la tarea puedes eliminarla, para que ya no aparezca en tu lista. Aún no contamos con respaldo, así que si borras una tarea no podrás recuperarla, así que CUIDADO</p> </ListGroup.Item>
        </ListGroup>
      </div>
  );

}

export default HomeList;

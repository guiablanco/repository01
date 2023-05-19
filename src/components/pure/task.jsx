import {useEffect} from 'react';
import PropTypes from 'prop-types';

//models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//importamos la hoja de estilos task.scss

import '../../styles/task.scss';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                )
        
            default:
                break;
        }
    }


    /**
     * 
     * Funtion that returns icon depending on completed task
     */
    function taskCompletedIcon(){
        if (task.completed){
            return((<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>))
        } else {
            return(<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    //estilos dependientes
    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }
    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
    }
    
    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending} >
            <th>
                <span className='ms-2'>{task.id}</span> 
            </th>
            <td className='aligne-middle'>
                <span>{task.name}</span> 
            </td>
            <td className='aligne-middle'>
                <span>{task.description}</span> 
            </td>
            <td className='aligne-middle'>
                {/* Excecution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='aligne-middle'>
                {/* Excecution of function to return icon element depending on completion*/}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>

        // <div>
        //     <h2 className='task-name'>Nombre: {task.name}</h2>
        //     <h3>Descripción: {task.description}</h3>
        //     <h4>Nivel: {task.level}</h4>
        //     <h5>Esta tarea está: {task.completed ? `COMPLETED`:`PENDING`} </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

import {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos task.scss

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {


    const defaultTask1 = new Task(1,'Example1', 'Default description 1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task(2,'Example2', 'Default description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task(3,'Example3', 'Default description 3', true, LEVELS.BLOCKING);



    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState((true));

    //Constrol del ciclo de vida
    useEffect(() => {
        console.log(`Tusk state has been modified`)
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
        return () => {
            console.log(`TaskList component is going to unmount`)
        };
    }, [tasks]);


    function completeTask(task){
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //We update the state of the component with the new list of tasks and it will update the 
        //iteration of the tasks in order to show the task update
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log('Delete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask)
    }

    function addTask(task){
        console.log('Add this Task: ', task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    const Table = () => {
        return (
            <table>
                            <thead>
                            <tr>
                                <th scope='col'>Id</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Este map es para iterar entre todas las tareas que existan */}
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                            >
                                        </TaskComponent>
                                    )
                                }
                                ) }
                                
                            </tbody>
                        </table>
        )
    }

    //Esto deja el componente Table como una constante y como un componente con est
    let tasksTable = <Table></Table>

    if (tasks.length > 0){
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>

                <div className='card'>
                    {/* card header y title */}
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                    {/* TODO: add Loading spinner */}
                        {loading ? <p style={loadingStyle}>Loading...</p> : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};




export default TaskListComponent;

import {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const idRef = useRef('');
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            idRef.current.value,
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }


    //Selector style
    
    const normalStyle = {
        color: 'rgb(13,110,253)',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'rgb(220,53,69)',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'rgb(255,193,7)',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={idRef} id='idRef' type={'number'} className='form-control form-control-lg' required autoFocus placeholder='Task ID'/>
                <input ref={nameRef} id='inputName' type={'text'} className='form-control form-control-lg' required placeholder='Task Name'/>
                <input ref={descriptionRef} id='inputDescription' type={'text'} className='form-control form-control-lg' required placeholder='Task Description'/>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' >
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2' style={{marginTop:'1rem'}}>
                {length === 0 ? 'Create your first task' : 'Add new task'}
                </button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;

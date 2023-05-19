
import tasklogo2 from '../../assets/images/tasklogo2.png';

//styles
import '../../styles/home.scss'

//elements

import TaskPage from '../tasks/TaskPage';
import TaskDescription from '../../components/pure/TaskDescription';



const HomeTaskPage = () => {



    return (
        <div>
            
            <div>
                <img 
                style={{padding: 0, margin:'3rem', width:'25rem', height:'12rem'}}
                src={tasklogo2} 
                alt='logo' 
                className='logo'/>
            </div>
            <div className='task-page'>
                <div>
                    <TaskDescription></TaskDescription>
                </div>
                <div>
                    <TaskPage></TaskPage>
                </div>
            </div>
        </div>
    );
}

export default HomeTaskPage;

/*eslint-disable  */
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

//Models
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

//name, description y LEVELS

const taskSchema = Yup.object().shape(

    {
        id: Yup.number()
            .required(),
        name: Yup.string()
                .required('Must have task name')
                .min(1, 'The name must have at least one letter'),
        description: Yup.string()
                .min(1, 'The description must have at least one letter')
                .required('Must have a description'),
        completed: Yup.boolean().required(),
        level: Yup.string().required('Must have a level')
    }
);


const TaskFormik = () => {

    const initialTask = {
        id: '',
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL 
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
        <div>
            <h3>Task Formik</h3>
            <Formik
            //*** Initial values that the form will take ***
            initialValues={ initialTask }
            //*** Yup Validation Schema ***
            validationSchema={taskSchema}
            //*** onSubmit Event ***
            onSubmit={
                async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

{/* We obtain props from Formik */}

{({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
            }) => (
                <Form>
                    <label className='p-2' htmlFor="id">Id</label>
                    <Field
                        id="id"
                        name="id"
                        placeholder="id"
                        type="id"
                    />

                    {/* id errors */}
                    {
                        errors.id && touched.id && 
                        (
                                <ErrorMessage name='id' component='div'></ErrorMessage>
                        )
                    }
                    <label className='p-2' htmlFor="name">Name</label>
                    <Field
                        id="name"
                        name="name"
                        placeholder="name"
                        type="name"
                    />

                    {/* name errors */}
                    {
                        errors.name && touched.name && 
                        (
                                <ErrorMessage name='name' component='div'></ErrorMessage>
                        )
                    }


                    <label className='p-2' htmlFor="description">description </label>
                    <Field
                        id="description"
                        name="description"
                        placeholder="description"
                        type="description"
                    />

                    {/* description errors (Verificar primero el que tiene por defecto) */}
                    {
                        errors.description && touched.description && 
                        (
                                <ErrorMessage name='description' component='div'></ErrorMessage>
                        )
                    }
                    
                    <label className='p-2' htmlFor="level">level </label>
                    <Field
                        id="level"
                        name="level"
                        placeholder="level"
                        type="level"
                        as="select"
                    >
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                    </Field>

                    {/* level errors (Verificar primero el que tiene por defecto) */}
                    {
                        errors.level && touched.level && 
                        (
                                <ErrorMessage name='level' component='div'></ErrorMessage>
                        )
                    }

                    <button type="submit">Add Task</button>
                    {isSubmitting ? (<p>Adding your task...</p>) : null}
                </Form>
            )}

            </Formik>
        </div>
    );
}

export default TaskFormik;

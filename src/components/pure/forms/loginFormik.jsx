/*eslint-disable*/
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is requred')
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()


    return (
        <div>
            <h3>Login and start with us</h3>
            <Formik
                //*** Initial values that the form will take ***
                initialValues={ initialCredentials }
                //*** Yup Validation Schema ***
                validationSchema={loginSchema}
                //*** onSubmit Event ***
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 1000));
                        alert(JSON.stringify(values, null, 2));
                        //We sabe the data in the local storage
                        await localStorage.setItem('credentials', values);
                        navigate('/tasks');
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
                    <label className='p-2' htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="example@acme.com"
                        type="email"
                    />

                    {/* Email errors */}
                    {
                        errors.email && touched.email && 
                        (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }


                    <label className='p-2' htmlFor="password">Password </label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />

                    {/* Password errors (Verificar primero el que tiene por defecto) */}
                    {
                        errors.password && touched.password && 
                        (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                        )
                    }
                    
                    <button type="submit">Submit</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )}


            </Formik>
        </div>
    );
}

export default LoginFormik;

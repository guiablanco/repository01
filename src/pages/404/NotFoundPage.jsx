/*eslint-disable */
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{margin:'4rem 0 0 0'}}>Error 404: Page Not Found</h1>
            <h2 style={{margin:'4rem'}}>No deberías estar aquí. Te recomendamos presiones "Back" en la navbar de más arriba, si quieres volver a la página en la que te encontrabas anteriormente.</h2>
            <h2 onClick={() => navigate(-1)} style={{cursor:'pointer'}}>O puedes presionar aquí</h2>
            <h3 onClick={() => navigate(-1)} style={{margin:'4rem', cursor:'pointer'}}>You shouldn't be here...</h3>
        </div>
    );
}

export default NotFoundPage;

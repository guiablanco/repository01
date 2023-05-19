
//images
import profileImage from '../../assets/images/profile.jpg';

//style
import '../../styles/profile.scss';
import TecnologiasIconos from '../../components/pure/TecnologiasIconos';

const HomeProfilePage = () => {



    return (
        <div>

            <div>
                <div className='datos'>
                    <img src={profileImage} alt='profileImage' className='profileImage'/>
                    <div>
                        <h2>Sebastián Aguirre Fernández</h2>
                        <h2>Programador Jr Full Stack</h2>
                        <h2>Magister en Educación y Gestión Universitaria</h2>
                    </div>
                </div>
                <h1 style={{margin:'4rem 0'}}>Tecnologías de Desarrollo</h1>
                <TecnologiasIconos/>
            </div>
        </div>
    );
}

export default HomeProfilePage;

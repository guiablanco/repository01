import {Routes, Route} from 'react-router-dom';
import './App.css'

//pages
import Layout from './components/container/Layout';
import HomeTaskPage from './pages/homeTask/HomeTaskPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFoundPage from './pages/404/NotFoundPage';
import HomeProfilePage from './pages/home/HomeProfilePage';
import LinkedInPage from './pages/linkedIn/LinkedInPage';
import CanalesPage from './pages/canales/CanalesPage';
import Proyectos from './pages/proyectos-personales/proyectos';



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomeProfilePage/>}/>
          <Route path='tasks/*' element={<HomeTaskPage/>} />
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='register' element={<RegisterPage/>}></Route>
          <Route path='linkedin' element={<LinkedInPage/>}></Route>
          <Route path='channels' element={<CanalesPage/>}></Route>
          <Route path='proyectos' element={<Proyectos/>}>
          </Route>


          <Route path='/*' element={<NotFoundPage/>} />
        </Route>

      </Routes>

    </>
  )
}

export default App

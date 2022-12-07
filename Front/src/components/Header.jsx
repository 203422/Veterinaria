import '../assets/styles/header.css'
import { Link } from 'react-router-dom';
import Dueño from './Dueños/Dueños';
import logo from '../assets/img/logo.png'

function Header() {
    return (

        <header className='header'>
            <div className="contenedor-nav">
                <div className="contenedor-logo">
                    <Link to='/'><img src={logo} className='logo' /></Link>
                </div>
                <nav className="navegacion">
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/Dueños' className='link' >Dueños</Link>
                    <Link to='/Mascotas' className='link'>Mascotas</Link>
                    <Link to='/Citas' className='link'>Citas</Link>
                    <Link to='/Medicamentos' className='link'>Medicamentos</Link>
                </nav>
            </div>
        </header>

    );
}

export default Header;
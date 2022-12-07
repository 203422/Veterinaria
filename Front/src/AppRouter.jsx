import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mascotas from './components/Mascotas/Mascotas';
import Dueños from './components/Dueños/Dueños';
import Citas from './components/Citas/Citas';
import Medicamentos from './components/Medicamentos/Medicamentos';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/Mascotas' element={<Mascotas />}></Route>
                <Route path='/Dueños' element={<Dueños />}></Route>
                <Route path='/Citas' element={<Citas />}></Route>
                <Route path='/Medicamentos' element={<Medicamentos />}></Route>
            </Routes>

        </>
    );
}

export default AppRouter;
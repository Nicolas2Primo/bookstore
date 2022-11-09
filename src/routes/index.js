import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { Home } from '../pages/home/index.js';
// import { FormPage } from '../pages/Formulario';
// import BasicTable from '../components/table/BasicTable';
// import Agradecimento from '../pages/Agradecimento/agradecimento';

export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas
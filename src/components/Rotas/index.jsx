import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageHome from '../PageHome';
import PageSabores from '../PageSabores';
import PageSobre from '../PageSobre';



export default function Rotas(){
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        
            <Routes>
                <Route exact path='/' element={<PageHome />} />
                <Route path='/PageSabores' element={<PageSabores />} />
                <Route path='/PageSobre' element={<PageSobre />} />
            </Routes>
        
    )
}
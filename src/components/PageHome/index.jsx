import React from "react";
import Navbar from "../Navbar";
import BannerHomePage from "../BannerHomePage";
import ConteudoHome from "../ConteudoHome"
import Footer from "../Footer";



export default function PageHome(){
    return(
        <>
            <Navbar/>
            <BannerHomePage/>
            <ConteudoHome/>
            <Footer/>
        </>
    )
}
import styles from './Pagesobre.module.css';
import Navbar from '../Navbar';
import BannerSobre from '../BannerPageSobre';
import ConteudoSobre from '../ConteudoSobre';
import Sobrefotos from '../SobreFotos';
import Footer from '../Footer';



export default function PageSobre(){
    return(
        <>
            <Navbar/>
            <BannerSobre/>
            <ConteudoSobre/>
            <Sobrefotos/>
            <Footer/>
        </>
    )
}
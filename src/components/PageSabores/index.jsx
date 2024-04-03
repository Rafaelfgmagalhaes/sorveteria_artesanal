import styles from './pageSabores.module.css';
import Navbar from '../Navbar';
import BannerPageSabores from '../BannerPageSabores';
import ConteudoPageSabores from '../ConteudoPageSabores';
import Footer from '../Footer';



export default function PageSabores(){
    return(
        <>
            <Navbar/>
            <BannerPageSabores/>
            <ConteudoPageSabores/>
            <Footer/>
        </>
    )
} 
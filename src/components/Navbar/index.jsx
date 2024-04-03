import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <header>
            <div className={styles.topo}>
               
                    <div className={styles.logo}>
                        <a href="#"><img src="/assets/logo.png" alt="logo" /></a>
                    </div>
                    <div className={styles.linha}></div>
                    <nav className={styles.menu}>
                        <Link className={styles.itemMenu} to='/' >HOME</Link>
                        <Link className={styles.itemMenu} to='/PageSabores' >SABORES</Link>
                        <Link className={styles.itemMenu} to='/PageSobre' >SOBRE</Link>
                    </nav>
                
            </div>
        </header>
    )
}
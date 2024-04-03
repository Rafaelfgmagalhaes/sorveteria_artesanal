import styles from './footer.module.css';

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.boxRodape}>
                <div className={`${styles.logoRodape} ${styles.infoRodape}`}>
                    <a href="#"><img src="/assets/logo.png" alt="logo" /></a>
                </div>
                <div className={styles.infoRodape}>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernadino de Campos, 98 São Paulo, SP 12345-678</p>
                </div>
                <div className={styles.infoRodape}>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className={styles.infoRodape}>
                    <h3>HORÁRIOS</h3>
                    <p>Aberto todos os dias 10:00 - 22:00</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Gelateria. Site desenvolvido por Rafael, no curso de React da Devmedia&#174; 2024</p>
            </div>
        </footer>
    )
}
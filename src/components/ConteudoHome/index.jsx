import styles from './conteudoHome.module.css';

export default function ConteudoHome(){
    return(
        <section className={styles.areaCards}>
            <div className={styles.card}>
                <img src="/assets/banner-sabores.jpg" alt="sabores" />
            </div>
            <div className={styles.card}>
                <div className={styles.cardConteudo}>
                    <h2>NOSSOS SABORES</h2>
                    <h3>Novos e deliciosos!</h3>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardConteudo}>
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Delícias com sorvete!</h3>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="/assets/eventos-image.jpg" alt="eventos" />
            </div>
            <div className={styles.card}>
                <img src="/assets/sobre-image.jpg" alt="sobre nós" />
            </div>
            <div className={styles.card}>
                <div className={styles.cardConteudo}>
                    <h2>SOBRE NÓS</h2>
                    <h3>Alegria em cada casquinha!</h3>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você nao pode ficar de fora dessa. Venha fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </div>
        </section>
    )
}
import Menu from "./Menu";
import "./Drama.css";

export default function Drama(){
    return(
        <>
        <Menu />
            <div className="containerDrama">
            
                <h2 className="h2Dra">TOP 3 DRAMA</h2>
                <div className="Series">
                    <h1 className="h1Series">BREAKING BAD</h1>
                    <img src="https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">JUEGO DE TRONOS</h1>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/juego-de-tronos-primera-temporada-1558599291.jpg?resize=640:*" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">LOS SOPRANO</h1>
                    <img src="https://www.lavanguardia.com/peliculas-series/images/serie/poster/1999/1/w1280/p7XPjx5jTFl32TGbbIW8exdY8QW.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
            </div>
        </>

    );
}
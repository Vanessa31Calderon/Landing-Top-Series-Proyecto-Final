import Menu from "./Menu";
import "./Terror.css";

export default function Terror(){
    return(
        <>
        <Menu />
        <div className="containerTerror">
      
                <h2 className="h2Terr">TOP 3 TERROR</h2>
                <div className="Series">
                    <h1 className="h1Series">KINGDOM</h1>
                    <img src="https://images.justwatch.com/poster/106969910/s718/kingdom.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">CHUCKY</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiDGKVL2mpqLw75L0tFh4nN3C7Khpp9QDYh5gkGy6XlVvSlQiPjleyBfYFP6aW8FCEiM&usqp=CAU" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">SLASHER</h1>
                    <img src="https://m.media-amazon.com/images/I/71MhyrjYjJL._AC_UF894,1000_QL80_.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
            </div>
        </>

    );
}
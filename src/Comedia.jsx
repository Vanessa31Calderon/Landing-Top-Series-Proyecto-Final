import Menu from "./Menu";
import "./Comedia.css";

export default function Comedia(){
    return(
        <>
            <Menu />
            <div className="containerComedia">
             
                <h2 className="h2Com">TOP 3 COMEDIA</h2>
                <div className="Series">
                    <h1 className="h1Series">(DES)ENCANTO</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0G3_MgkbHnnTJxflcl85smSuZaklyuWlxmXn-qHmUWxcrr_ljK5l6kDyjqy5ZZ46bx78&usqp=CAU" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">BOJACK HORSEMAN</h1>
                    <img src="https://i.pinimg.com/736x/8b/03/0c/8b030c285fa30a536f1f54b6080b86ee.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">RICK & MORTY</h1>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/rick-y-morty-anime-corto-youtube-6437f9a5624bb.jpg?resize=980:*" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
            </div>
        </>

    );
}
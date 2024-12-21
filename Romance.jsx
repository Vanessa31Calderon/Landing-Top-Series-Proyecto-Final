import Menu from "./Menu";
import "./Romance.css";

export default function Romance(){
    return(
        <>
        <Menu />
            <div className="containerRomance">
                
                <h2 className="h2Rom">TOP 3 ROMANCE</h2>
                <div className="Series">
                    <h1 className="h1Series">HEARTSTOPPER</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxtqZFmeviU2Svp0DG6sv2TEevdzAgKKa3J5Tj1yHOAe45KB9" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">LOVE</h1>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQosxNuhRtUrqGHAwlmISC4nzJ_kZ5ghuJIEe-mLCfN6EwowrRo" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
                <div className="Series">
                <h1 className="h1Series">OUTLANDER</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaT_KJYm89oL6jmg3QHaAXeknv6fiCEjlsopCnIxLDxJP5-dRZ" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam a blanditiis rerum suscipit similique alias repellendus, quaerat earum deserunt, unde officia dolorum! Explicabo eius, facere modi adipisci voluptas nihil?</p>
                </div>
            </div>
        </>

    );
}
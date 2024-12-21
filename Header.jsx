import { Link } from 'react-router-dom';
import './Header.css'


export default function Header(){
    return(
        <>
            <header className='header'>
                <div className='tituloHeader'>
                    <h2>SERIES DESTACADAS</h2>
                </div>
                <div className='registroHeader'>
                    <nav>
                        <a href=""><Link to='/registro'>Registro</Link></a>
                    </nav>
                </div>
            </header>
        </>
    );
}
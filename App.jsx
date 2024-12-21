import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Registro";
import Inicio from "./Inicio";
import Romance from "./Romance";
import Drama from "./Drama";
import Comedia from "./Comedia";
import Terror from "./Terror";
import Footer from "./Footer";


export default function App() {
  
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index path="/" element = { <Inicio /> } />
            <Route path="/registro" element={ <Login /> } />
            <Route path="/romance" element= { <Romance /> } />
            <Route path="/drama" element= { <Drama /> } />
            <Route path="/comedia" element= { <Comedia /> } />
            <Route path="/terror" element= { <Terror /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}


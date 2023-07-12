import { useState } from "react";

import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Categorias from './componentes/categorias/Categorias'


import './reset.css'
import './App.css'
import Produtos from './componentes/Produtos/Produtos'



function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  return (
    <div className="App">
      <Header/>
      <Categorias categoriaSelecionada={categoriaSelecionada} setCategoriaSelecionada={setCategoriaSelecionada}/>
      <Produtos categoriaSelecionada={categoriaSelecionada} setCategoriaSelecionada={setCategoriaSelecionada}/>
      <Footer></Footer>
    </div>
  );
}

export default App;

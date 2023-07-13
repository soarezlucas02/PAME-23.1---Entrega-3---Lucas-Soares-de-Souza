import { useState } from "react";

import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Categorias from './componentes/categorias/Categorias'


import './reset.css'
import './App.css'
import Produtos from './componentes/Produtos/Produtos'



function App() {

  //o valor de busca não pode ser null, porque se não vai dar erro no toLowerCase quando for filtar pelo nome.
  const [busca, setBusca] = useState('');

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  return (
    <div className="App">
      <Header setBusca={setBusca} busca={busca}/>
      <Categorias setCategoriaSelecionada={setCategoriaSelecionada}/>
      <Produtos busca={busca} categoriaSelecionada={categoriaSelecionada} />
      <Footer></Footer>
    </div>
  );
}

export default App;

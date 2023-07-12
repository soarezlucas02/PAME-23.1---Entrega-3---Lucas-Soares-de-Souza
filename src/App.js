import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer'
import Categorias from './componentes/categorias/Categorias'


import './reset.css'
import './App.css'



function App() {
  return (
    <div className="App">
      <Header/>
      <Categorias/>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

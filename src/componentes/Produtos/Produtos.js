import "./Produtos.css";
import Produto from "../Produto/Produto";
import { objetos } from "../Objetos/Objetos";

const Produtos = ({categoriaSelecionada, setCategoriaSelecionada}) => {
  

  // Filtrar os produtos com base na categoria selecionada
  const objetosFiltrados = categoriaSelecionada 
  ? objetos.filter((produto) => produto.categoria === categoriaSelecionada)
    : objetos;
  return (
    <div className="main">
        <ul className="produtos">
          {objetosFiltrados.map((produto, index) => (
            <li key={index}>
              <Produto
                nome={produto.nome}
                preco={produto.preco}
                foto={produto.imagemUrl}
              />
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Produtos;


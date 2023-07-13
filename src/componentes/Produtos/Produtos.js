import "./Produtos.css";
import Produto from "../Produto/Produto";
import { objetos } from "../Objetos/Objetos";

const Produtos = ({categoriaSelecionada, busca}) => {
  
  // Filtrar os produtos com base na categoria selecionada
  const objetosFiltrados = objetos.filter((produto) => {

    //filtrar pela categoria ao clicar nos botoes
    const atendeCategoria = !categoriaSelecionada || produto.categoria === categoriaSelecionada;

    //filtrar por nome ao digitar
    const atendeBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
    return atendeCategoria && atendeBusca;
  });

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


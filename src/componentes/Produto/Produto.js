import "./Produto.css";

const Produto = (props) => {
  return (
    <div className="produto">
      <img src="./imagens/notebook.png" alt="imagem do Produto" className="imagemProduto" />
      <p className="nome">{props.nome}</p>
      <p className="preco">R${props.preco}</p>
    </div>
  );
};

export default Produto;

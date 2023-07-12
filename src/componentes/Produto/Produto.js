import "./Produto.css";

const Produto = (props) => {
  return (
    
    <div className="produto">
      <div className="imagemProduto"><img src={props.foto}/></div>
      <p className="nome">{props.nome}</p>
      <p className="preco">R${props.preco}</p>

      <a href="" className="comprar">Comprar</a>
    </div>
  );
};

export default Produto;

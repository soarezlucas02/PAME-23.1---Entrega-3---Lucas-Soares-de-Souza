import "./Categorias.css";

const Categorias = ({setCategoriaSelecionada }) => {
  const clickCategoria = (event) => {
    event.preventDefault();
    const categoria = event.target.classList[1];
    setCategoriaSelecionada(categoria);
  };


  return (
    <ul className="categorias">
      <li>
        <a onClick={clickCategoria} className="categoria Roupas" href=".">
          Roupas
        </a>
      </li>
      <li>
        <a onClick={clickCategoria} className="categoria Acessórios" href=".">
          Acessórios
        </a>
      </li>
      <li>
        <a onClick={clickCategoria} className="categoria Calçados" href=".">
          Calçados
        </a>
      </li>
      <li>
        <a onClick={clickCategoria} className="categoria Ferramentas" href=".">
          Ferramentas
        </a>
      </li>
      <li>
        <a onClick={clickCategoria} className="categoria Eletrônico" href=".">
          Eletrônicos
        </a>
      </li>
    </ul>
  );
};

export default Categorias;

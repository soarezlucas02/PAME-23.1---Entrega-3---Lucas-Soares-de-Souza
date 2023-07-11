import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="nome_logo">TendTudo</a>

        <ul className="categorias">
          <li>
            <a className="categoria" href="">
              Categoria 1
            </a>
          </li>
          <li>
            <a className="categoria" href="">
              Categoria 2
            </a>
          </li>
          <li>
            <a className="categoria" href="">
              Categoria 3
            </a>
          </li>
        </ul>

        <input
          type="pesquisa"
          id="pesquisa"
          class="input-pesquisa"
          required
          placeholder="Pesquise aqui um produto ou categoria"
        ></input>

        <div className="autenticacao">
          <button>Login</button>
          <button>Cadastro</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import "./Header.css";

function Header({setBusca, busca}) {
  console.log(busca);
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nome_logo">TendTudo</h1>
        <input onChange={(event) => setBusca(event.target.value)}
          value={busca}
          type="text"
          id="pesquisa"
          className="input-pesquisa"
          required
          placeholder="Pesquise aqui um produto"
        ></input>

        <div className="autenticacao">
          <a href="." className="botaologin">Login</a>
          <a href="." className="botaologin">Cadastro</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

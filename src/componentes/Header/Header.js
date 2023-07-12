import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nome_logo">TendTudo</h1>
        <input
          type="pesquisa"
          id="pesquisa"
          class="input-pesquisa"
          required
          placeholder="Pesquise aqui um produto"
        ></input>

        <div className="autenticacao">
          <button className="botaologin">Login</button>
          <button className="botaologin">Cadastro</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

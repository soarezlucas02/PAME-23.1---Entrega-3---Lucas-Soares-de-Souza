import './Categorias.css'

const Categorias = () => {
    return(
        <ul className="categorias">
          <li>
            <a className="categoria" href=".">
              Roupas
            </a>
          </li>
          <li>
            <a className="categoria" href=".">
              Acessórios
            </a>
          </li>
          <li>
            <a className="categoria" href=".">
              Calçados
            </a>
          </li>
          <li>
            <a className="categoria" href=".">
              Ferramentas
            </a>
          </li>
          <li>
            <a className="categoria" href=".">
              Eletrônicos
            </a>
          </li>
         
        </ul>
    )
}

export default Categorias;
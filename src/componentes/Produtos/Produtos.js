import './Produtos.css';
import Produto from '../Produto/Produto';
import { objetos } from '../Objetos/Objetos';


const Produtos = () => {
    return(
        <ul className='produtos'>
            {objetos.map((produto,key)=>
            (<li>
                <Produto key={key} nome = {produto.nome} preco={produto.preco} foto={produto.imagemUrl}/>
            </li>))}
        </ul>
        
    )
}

export default Produtos;
import './Produtos.css';
import Produto from '../Produto/Produto';
import { objetos } from '../Objetos/Objetos';

import { objeto1, objeto2, objeto3 } from '../Objetos/Objetos';


const Produtos = () => {
    return(
        <ul className='produtos'>
            {objetos.map((produto)=>
            (<li>
                <Produto nome = {produto.nome} preco={produto.preco} foto={produto.imagemUrl}/>
            </li>))}
        </ul>
        
    )
}

export default Produtos;
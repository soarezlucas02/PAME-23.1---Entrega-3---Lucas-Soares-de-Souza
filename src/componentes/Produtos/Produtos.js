import './Produtos.css';
import Produto from '../Produto/Produto';


const Produtos = () => {
    return(
        <ul className='produtos'>
            <li>
                <Produto nome = 'Notebook' preco='1500' />
            </li>

            <li>
                <Produto nome = 'Notebook Plus' preco='2000' />
            </li>

            <li>
                <Produto nome = 'Notebook Pro Max' preco='3500' />
            </li>
        </ul>
        
    )
}

export default Produtos;
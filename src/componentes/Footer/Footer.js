import './Footer.css'

import IconeFacebook from "../imagens/facebook.png";
import IconeInstagram from '../imagens/instagram.png';
import IconeTwitter from '../imagens/Twitter.png';
import IconeEmail from '../imagens/email.png';
import IconeTelefone from '../imagens/telefone.png';

function Footer() {
    return(
        <footer className='footer'>
            <div className='informacoes'>
                <div className='contato'>
                    <h3>Contato</h3>
                    <p>Rogério Senna</p>
                    <p className='conteudoRedes'><img alt='Icone Telefone' className='icone' src={IconeTelefone}/>+55 21 9999-9999</p>
                    <a className='conteudoRedes' href='.'><img alt='Icone Email' className='icone' src={IconeEmail}/>tentudo@email.com</a>
                </div>

                <div className='localizacao'>
                    <h3>Localização</h3>
                    <p>Caxias</p>
                    <p>Nova Iguaçu</p>
                    <p>Belford Roxo</p>
                </div>

                <div className='redesSociais'>
                    <a className='conteudoRedes' href='.'><img alt='Icone Facebook' className='icone' src={IconeFacebook}/>TendTudoFacebook</a>
                    <a className='conteudoRedes' href='.'><img alt='Icone Instagram' className='icone' src={IconeInstagram}/>TendTudoInstagram</a>
                    <a className='conteudoRedes' href='.'><img alt='Icone Twitter' className='icone' src={IconeTwitter}/>TendTudoTwitter</a>
                </div>

                <p className='frase'>"Desde 1997, nossa loja de varejo é o destino perfeito para encontrar qualidade, estilo e atendimento excepcional. Mais do que uma tradição, somos uma referência!"</p>

            </div>
            <p className='direitosAutorais'>© 2023 TendTudo. Todos os direitos reservados</p>
            
        </footer>


    );
}

export default Footer;
import React,{ useState } from 'react';
import './MenuTopo.css'
import Menu from '../Menu';

const direcionar= (event)=>{
  // Número de telefone com código de país (por exemplo, +55 para o Brasil)
  let numeroTelefone = "+5511934976468";
  
  // Mensagem opcional que você deseja pré-preencher na conversa do WhatsApp
  let mensagem = "Olá, estou entrando em contato através do site.";
  
  // Construir o link do WhatsApp com o número de telefone e mensagem
  let linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
  
  // Redirecionar o usuário para o link do WhatsApp
  window.location.href = linkWhatsApp;
  
  event.preventDefault()
}




const MenuTopo = () => {
  const [menuAtivo, setMenuAtivo] = useState(false)
  const menuDeOpcao = (event) =>{
    setMenuAtivo(true)
    setTimeout(()=>{
      setMenuAtivo(false)

    },10000)
    event.preventDefault()
  }
  return(
    <div className="menu__topo__content">
       <p onClick={menuDeOpcao} id="btn__menu" >Menu</p>
       <input id="input__search" type="text" placeholder="Procure..." />
      <p onClick={direcionar} id='btn__whatsaap'>Fale com Vieira</p>
   
   
      {menuAtivo &&<Menu/>}
    </div>
  )
}
export default MenuTopo
import './Menu.css'

function enviandoParaDownloadPDF(event){

  // URL do arquivo PDF que você deseja disponibilizar para download
  let urlPDF = "./imagemDasCasasEpdf/Tons Klabin Studios Final.pdf";
  
  // Redirecionar o usuário para o link de download direto do PDF
  window.location.href = urlPDF;
  event.preventDefault()
}
const Menu = () =>{
  return(
    <div className='container__menu'>
        <p onClick={enviandoParaDownloadPDF}>download dos PDF</p>
        <p>Saiba Mais</p>
    </div>
  )
}
export default Menu
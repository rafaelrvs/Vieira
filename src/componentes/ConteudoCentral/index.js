
import ImagemDasCasas from '../ImagemDasCasas'
import './ConteudoCentral.css';

const ConteudoCentral =()=>{
  
  const imagem1 ='../ImagemDasCasasEpdf/academia.png'
  const imagem2 ='../ImagemDasCasasEpdf/apartamentoFrente.png'
  const imagem3 ='../ImagemDasCasasEpdf/apInside.png'
  const imagem4 ='../ImagemDasCasasEpdf/interna.png'
  const imagem5 ='../ImagemDasCasasEpdf/newFoto.png'
  const imagem6 ='../ImagemDasCasasEpdf/PlantaImovel.png'
  const imagem7 ='../ImagemDasCasasEpdf/tons.png'

  return(
    <div className='container-all-img'>
      <div  className='box__header'>
        <div id='Container1'><ImagemDasCasas/></div>
      </div>
        <div className='container__main'>
  
        <div id='container__particao__img' ><img id="imagem" src={imagem1} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem2} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem3} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem4} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem5} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem6} alt="" /></div>
        <div id='container__particao__img' ><img id="imagem" src={imagem7} alt="" /></div>
        </div>

    </div>
    
  )
}
export default ConteudoCentral
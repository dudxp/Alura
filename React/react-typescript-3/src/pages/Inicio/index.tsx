import style from "./Inicio.module.scss";
import styleTema from "styles/Tema.module.scss";
import cardapio from "data/cardapio.json";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

export default function Inicio(){
  const navigate = useNavigate();
  let pratosRecomendados = [...cardapio];
  
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0,3);
    
  function redirecionarVerMais(prato: Prato){
    navigate(`/prato/${prato.id}`, { state: { prato }});
  }

  return (
    <section>
      <h3 className={styleTema.titulo}>
                Recomendações da cozinha
      </h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map((item) => (
          <div className={style.recomendado} key={item.id}>
            <div className={style.recomendado_imagem}>
              <img src={item.photo} alt={item.title}/>
            </div>
            <button 
              className={style.recomendado__botao}
              onClick={() => {redirecionarVerMais(item);}}>
                            Ver mais
            </button>
          </div>
        ))}
      </div>
      <div className={style.nossaCasa}>
        <h3 className={styleTema.titulo}>
                    Nossa casa
        </h3>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={style.nossaCasa__endereco} >
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
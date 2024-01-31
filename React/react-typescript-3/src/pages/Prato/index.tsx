import style from "./Prato.module.scss";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPratos from "components/TagsPratos";
import NotFound from "components/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound/>;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao/>}>
        <Route index element={
          <>
            <button className={style.voltar} onClick={() => navigate(-1)}>
              {"< Voltar"}
            </button>
            <section className={style.container}>
              <h1 className={style.titulo}>{prato.title}</h1>
              <div className={style.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={style.conteudo}>
                <p className={style.conteudo__descricao}>{prato.description}</p>
                <TagsPratos {...prato} />
              </div>
            </section>
          </>
        }/>
      </Route>
    </Routes>
  );
}

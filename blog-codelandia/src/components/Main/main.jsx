import { useState } from "react";
import style from "./main.module.scss";
import orangeHeart from "../../assets/orange-heart.svg";
import emptyHeart from "../../assets/empty-heart.svg";

// const img = {
//   emptyHeart,
//   orangeHeart,
// };

export const Main = () => {
  const [image, setImage] = useState(emptyHeart);

  const changeImage = () => {
    setImage((state) => (state === emptyHeart ? orangeHeart : emptyHeart));
  };

  return (
    <>
      <main className={style.main}>
        <ul className={style.cards}>
          <li key={1}>
            <img
              className={style.image}
              src={image}
              alt="like/unlike"
              onClick={changeImage}
            />
            <p className={style.date}>17 de ago, 2024</p>
            <h3 className={style.title}>
              O que é a linguagem de programação? Conheça as principais
            </h3>
            <p className={style.description}>
              Uma das mais populares vertentes da tecnonlogia da informação, a
              área de programação segue tendo muita demanda de trabalho
              justamente pela velocidade com que dispositivos tecnológicos vêm
              avançando.
            </p>
          </li>

          <li key={2}>
            <img
              className={style.image}
              src={image}
              alt="like/unlike"
              onClick={() => changeImage}
            />
            <p className={style.date}>12 de jul, 2024</p>
            <h3 className={style.title}>
              GitHub agora permite fazer login sem precisar de senha
            </h3>
            <p className={style.description}>
              O GitHub anunciou nesta quarta-feira (12) o acesso a partir das
              passkeys, método de autenticação sem senhas. A novidade está
              disponível em uma versão beta pública e pode substituir a
              autenticação em dois fatores.
            </p>
          </li>

          <li key={3}>
            <img
              className={style.image}
              src={image}
              alt="like/unlike"
              onClick={changeImage}
            />
            <p className={style.date}>21 de jun, 2024</p>
            <h3 className={style.title}>
              Por que os hiperlinkss são azuis em sua maioria?
            </h3>
            <p className={style.description}>
              Quem navega na internet, certamente já percebeu que ela conta com
              diversos recursos para tornar a nossa vida mais fácil. Entre essas
              opções podemos mencionar os hiperlinks - uma palavra ou termo
              clicável que direciona o leitor.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

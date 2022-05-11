import styles from "./card.module.css";
import { useContext } from "react";
import { CarrinhoContext } from "../../Providers/carrinho";
import { ListaContext } from "../../Providers/Listadeprodutos";

const CardVitrine = () => {
  const { addCarrinho } = useContext(CarrinhoContext);
  const { produtosLista } = useContext(ListaContext);

  return (
    <>
      {produtosLista.map((item) => {
        return (
          <div className={styles.divProdutos} key={item.id}>
            <img src={item.link} alt="" className={styles.imgRoupa} />
            <h3>{item.name}</h3>
            <p>{item.cor}</p>
            <span>R${item.preco}</span>
            <button
              onClick={() => {
                addCarrinho(item);
              }}
            >
              <img className={styles.carrinho} src={item.button} alt="" />
            </button>
          </div>
        );
      })}
    </>
  );
};
export default CardVitrine;

import { useContext } from "react";
import { CarrinhoContext } from "../../Providers/carrinho";
import styles from "./carrinho.module.css";

const Carrinho = () => {
  const { carrinho, removeCarrinho } = useContext(CarrinhoContext);

  let precoTotal = 0;
  return (
    <nav className={styles.navCart}>
      <h3>Carrinho</h3>
      <div>
        {carrinho.length > 0 &&
          carrinho.map((item) => {
            precoTotal += Number(item.preco);
            return (
              <div key={item.link} className={styles.divCart}>
                <img src={item.link} alt="" className={styles.imgCarrinho} />
                <span>R${item.preco}</span>
                <button onClick={() => removeCarrinho(item)}> Excluir</button>
              </div>
            );
          })}
        <h4>Preço Total</h4>
        <span>R${precoTotal}</span>
      </div>
    </nav>
  );
};
export default Carrinho;

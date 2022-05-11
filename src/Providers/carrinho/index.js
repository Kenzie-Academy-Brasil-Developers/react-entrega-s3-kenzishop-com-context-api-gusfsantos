import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [counter, setCounter] = useState(0);
  const addCarrinho = (produto) => {
    setCarrinho([...carrinho, { ...produto, cartID: counter }]);

    setCounter(counter + 1);
  };

  const removeCarrinho = (produto) => {
    setCarrinho(
      carrinho.filter((product) => product.cartID !== produto.cartID)
    );
  };

  return (
    <CarrinhoContext.Provider value={{ addCarrinho, carrinho, removeCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

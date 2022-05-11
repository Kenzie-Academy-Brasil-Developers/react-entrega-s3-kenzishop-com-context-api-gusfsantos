import produto1 from "./juiced/Camisa_5_star_Branca.JPG";
import produto2 from "./juiced/Camisa_5_star_Preta.JPG";
import produto3 from "./juiced/juiced_branca.JPG";
import produto4 from "./juiced/juiced_preta.JPG";
import compra from "./juiced/294547.png";
import { createContext, useState } from "react";

export const ListaContext = createContext();

export const ListadeProdutosProvider = ({ children }) => {
  const [produtosLista, setProdutosLista] = useState([
    {
      id: 1,
      name: "Camisa 5 Star",
      cor: "Branca",
      preco: 149,
      link: produto1,
      button: compra,
    },
    {
      id: 2,
      name: "Camisa 5 Star",
      cor: "Preta",
      preco: 149,
      link: produto2,
      button: compra,
    },
    {
      id: 3,
      name: "Camisa Juiced",
      cor: "Branca",
      preco: 149,
      link: produto3,
      button: compra,
    },
    {
      id: 4,
      name: "Camisa Juiced",
      cor: "preta",
      preco: 149,
      link: produto4,
      button: compra,
    },
  ]);
  return (
    <ListaContext.Provider value={{ produtosLista }}>
      {children}
    </ListaContext.Provider>
  );
};

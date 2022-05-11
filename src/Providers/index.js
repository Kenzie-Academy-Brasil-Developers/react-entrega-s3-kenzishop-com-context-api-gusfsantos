import { CarrinhoProvider } from "./carrinho";
import { ListadeProdutosProvider } from "./Listadeprodutos";

const Provider = ({ children }) => {
  return (
    <ListadeProdutosProvider>
      <CarrinhoProvider>{children}</CarrinhoProvider>
    </ListadeProdutosProvider>
  );
};

export default Provider;

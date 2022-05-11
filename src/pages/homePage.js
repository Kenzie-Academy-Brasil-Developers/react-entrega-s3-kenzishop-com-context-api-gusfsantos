import Carrinho from "../components/carrinho/carrinho";
import { HeaderHome } from "../components/header/header";
import Vitrine from "../components/vitrine/vitrine";

export const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <Vitrine />
      <Carrinho />
    </>
  );
};

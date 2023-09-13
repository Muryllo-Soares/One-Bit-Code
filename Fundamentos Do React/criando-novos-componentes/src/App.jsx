/*Foi criado uma pasta components para abrigar cada componente separado por pastas assim fica mais organizado e facil de manutenção, componentes nada mais é que funções então você pode declarar funções nomeadas, anonimas e ate arrow functions */

import Soma from "./components/Soma";
import { SubTitle } from "./components/SubTitle";
import Title from "./components/Title";

export default function App() {
  return (
    <div>
      <Title />
      <SubTitle />
      <Soma />
    </div>
  );
}

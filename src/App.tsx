import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão na padaria", itsDone: false },
    { id: 2, name: "Comprar bolo na padaria", itsDone: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/*Adicionar item na lista*/}

        {list.map((item, index) => (
          <ListItem item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

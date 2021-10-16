import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddTask from "./components/AddTask";

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão na padaria", itsDone: false },
    { id: 2, name: "Comprar bolo na padaria", itsDone: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      itsDone: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddTask onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </C.Area>
    </C.Container>
  );
}

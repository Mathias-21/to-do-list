import * as C from "./style";
import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
  item: Item;
};

export default function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.itsDone);

  return (
    <C.Container itsDone={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}

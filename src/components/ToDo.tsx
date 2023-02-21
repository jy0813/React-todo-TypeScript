import React from 'react';
import {IToDO, toDoState} from "./atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}:IToDO) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory:IToDO['category']) => {
    setToDos(prev => {
      return prev.map((todo) => todo.id === id ? {...todo, category:newCategory} : todo);
    })
  }
  return (
      <li>
        <span>{text}</span>
        {category !== 'DOING' && <button onClick={() => onClick('DOING')}>Doing</button>}
        {category !== 'TO_DO' && <button onClick={() => onClick('TO_DO')}>To DO</button>}
        {category !== 'DONE' && <button onClick={() => onClick('DONE')}>Done</button>}
      </li>
  );
}

export default ToDo;
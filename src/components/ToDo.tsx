import React from 'react';
import {IToDO} from "./atoms";

function ToDo({text}:IToDO) {
  return (
      <li>
        <span>{text}</span>
        <button>To Do</button>
        <button>Doing</button>
        <button>Done</button>
      </li>
  );
}

export default ToDo;
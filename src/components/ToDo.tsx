import React from 'react';
import {IToDO} from "./atoms";

function ToDo({text}:IToDO) {
  return (
      <li>{text}</li>
  );
}

export default ToDo;
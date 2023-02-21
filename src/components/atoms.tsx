import {atom, selector} from "recoil";

export interface IToDO {
  id:number;
  text:string;
  category:'DONE' | 'DOING' | 'TO_DO';
}

export const toDoState = atom<IToDO[]>({
  key:'toDo',
  default:[],
})

export const toDoSelector = selector({
  key:'toDoSelector',
  get:({get}) => {
    const toDos =get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  }
})
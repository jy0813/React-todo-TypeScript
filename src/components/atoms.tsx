import {atom} from "recoil";

export interface IToDO {
  id:number;
  text:string;
  category:'DONE' | 'DOING' | 'TO_DO';
}

export const toDoState = atom<IToDO[]>({
  key:'toDo',
  default:[],
})
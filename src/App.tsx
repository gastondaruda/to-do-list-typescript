import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField/InputField';
import { Todo } from './Components/InputField/model';
import ToDoList from './Components/ToDoList';

// let name: string;
//let age: number | string;
//let hobbies: string[]

// type Person = {
//   name: string;
//   age: number;
// }
// let person: Person = {
//   name: "gasty",
//   age: 27
// };

//let peoples: Person[]
// name = "Gasty"

// let sayHi: (name:string) => never;



// interface Person {
//   name: string;
//   age: number;
// }

// interface guy extends Person {
//   profession: string;
// }

const App:React.FC = () => {

  const [toDo, setToDo] = useState<string>("")
  const [toDos, setToDos] = useState<Todo[]>([])

  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault();

    if(toDo) {
      setToDos([...toDos,{id:Date.now(), todo: toDo, isDone:false}])
      setToDo("")

    }
    console.log(toDos)
  }


  return (
    <>
      <div className='App'>
        <h3 className='heading'>Lista de tareas</h3>
        <InputField 
          todo={toDo}
          setTodo={setToDo}
          handleAdd={handleAdd}
        />
        <ToDoList 
          todos={toDos}
          setTodos={setToDos}
        />
      </div>
    </>
  );
}

export default App;

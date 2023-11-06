import { React, useState } from 'react';
import './styles.css';

export const ToDoWithServerMentor = () => {
  const [data, setData] = useState([]); // lista zadan to zmieniajaca sie lista wiec dodalismy useState
  const handleLoadData = () => {
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  return (
    <div>
      <h2>ToDoWithServer</h2>

      <h3>Lista zadań</h3>
      <ul>
        {data?.map((todo) => {
          return (
            <li>
              <div>{todo.title}</div>
              <div>{todo.author}</div>
              <div>{todo.note}</div>
            </li>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button onClick={handleLoadData}>Pobierz listę zadań...</button>
    </div>
  );
};

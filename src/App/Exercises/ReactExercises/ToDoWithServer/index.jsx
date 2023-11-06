import { React, useState } from 'react';
import './styles.css';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]); // lisya zadan to zmieniajaca sie lista wiec dodalismy useState
  const [addTask, setAddTask] = useState(false);

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
    <div className="todo">
      {addTask ? (
        <>
          <h3>Edycja zadania.</h3>
          <AddTask handleBack={setAddTask} />
        </>
      ) : (
        <>
          <h3>Tutaj znajdziesz listę swoich zadań</h3>
          <button className="add_button" onClick={() => setAddTask(true)}>
            +
          </button>
          <TaskList data={data} />
          <button className="add" onClick={handleLoadData}>
            Dodaj
          </button>{' '}
        </>
      )}
    </div>
  );
};

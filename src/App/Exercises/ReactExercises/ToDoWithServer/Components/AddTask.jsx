import React, { useState } from 'react';
import '../Styles/addTask.css';

const INITIAL_STATE = {
  title: '',
  task: '',
};

// tutaj gdzie mam definicję componentu AddTask
// poniej trzeba zrestukturyzowac tego propsa
// component dostaniew  w propsach funkcje handleBack

const AddTask = ({ handleBack }) => {
  const [newTask, setNewTask] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewTask(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł</label>
        <input
          id="title"
          value={newTask.title}
          type="text"
          onChange={handleChange}
          placeholder="Szczepienie kitku"
        />
      </div>
      <div>
        <label htmlFor="task">Treść</label>
        <textarea
          id="task"
          value={newTask.task}
          type="text"
          onChange={handleChange}
          placeholder="Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem. 
    Dodatkowo pamiętać o ustaleniu drugiej wizyty za rok!!!"
        />
      </div>
      <button onClick={() => handleBack(false)}>Cofnij</button>
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default AddTask;

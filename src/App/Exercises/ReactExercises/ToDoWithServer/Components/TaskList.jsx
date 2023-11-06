import React, { useState } from 'react';
import '../Styles/taskList.css';

const TaskList = ({ data }) => {
  return (
    <ul>
      {data?.map((todo, index) => (
        <li key={index}>
          <div>{todo.title}</div>
          <div>{todo.author}</div>
          <div>{todo.note}</div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

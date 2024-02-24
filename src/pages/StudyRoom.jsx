import React from 'react';
import '../styles/StudyRoom.css'
import TodoList from '../../components/TodoList';
import Whiteboard from '../../components/Whiteboard';

function StudyRoom() {
  return (
    <div className="study-room">
      <h1>Welcome to the Study Room</h1>

      <div className="todo-lists">
        {/* Separate TodoLists for each user */}
        <div className="todo-list">
          <h2>User 1's Todo List</h2>
          <TodoList userId="user1" /> {/* Pass userId prop to identify user */}
        </div>
        <div className="todo-list">
          <h2>User 2's Todo List</h2>
          <TodoList userId="user2" /> {/* Pass userId prop to identify user */}
        </div>
      </div>
     
      
      <div className="whiteboard">
      <Whiteboard />
      </div>
      <div className="study-tools">
        <h2>Study Tools</h2>
        <button>Start Timer</button>
        <button>Stop Timer</button>
      </div>
    </div>
  );
}

export default StudyRoom;

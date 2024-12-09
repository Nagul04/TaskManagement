import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });
  const [newTask, setNewTask] = useState('');
  const [newTaskTime1, setNewTaskTime1] = useState('');
  const [newTaskTime2, setNewTaskTime2] = useState('');
  const [draggedTask, setDraggedTask] = useState(null);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleTimeInputChange1(event) {
    setNewTaskTime1(event.target.value);
  }

  function handleTimeInputChange2(event) {
    setNewTaskTime2(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '' && newTaskTime1.trim() !== '' && newTaskTime2.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        {
          id: Date.now(),
          name: newTask,
          time1: newTaskTime1,
          time2: newTaskTime2,
          column: 1,
          order: tasks.filter(task => task.column === 1).length + 1,
        },
      ];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      setNewTask('');
      setNewTaskTime1('');
      setNewTaskTime2('');
    }
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
      updateOrder(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
      updateOrder(updatedTasks);
    }
  }

  function handleDragStart(event, task) {
    setDraggedTask(task);
    event.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event, targetColumn) {
    event.preventDefault();

    if (draggedTask) {
      const updatedTasks = tasks.filter(task => task.id !== draggedTask.id);
      setTasks([
        ...updatedTasks,
        { ...draggedTask, column: targetColumn.id, order: getMaxOrder(targetColumn.id) + 1 },
      ]);
      setDraggedTask(null);
      updateOrder([...updatedTasks, { ...draggedTask, column: targetColumn.id, order: getMaxOrder(targetColumn.id) + 1 }]);
    }
  }

  function getMaxOrder(columnId) {
    const tasksInColumn = tasks.filter(task => task.column === columnId);
    const maxOrder = tasksInColumn.reduce((max, task) => (task.order > max ? task.order : max), 0);
    return maxOrder;
  }

  function updateOrder(updatedTasks) {
    const updatedTasksWithOrder = updatedTasks.map((task, index) => ({ ...task, order: index + 1 }));
    setTasks(updatedTasksWithOrder);
    localStorage.setItem('tasks', JSON.stringify(updatedTasksWithOrder));
  }

  const columns = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Done' }
  ];

  return (
    <div className="to-do-list">
      <h1 style={{ opacity: 1 , marginLeft:"650px"}}>Buzz Flow</h1><br></br>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          style={{ fontSize: '1.6rem', marginBottom: '10px',marginLeft:"40px", width:"390px" }}
        />
        <input
          type="time"
          placeholder="Enter time range..."
          value={newTaskTime1}
          onChange={handleTimeInputChange1}
          style={{ fontSize: '1.6rem', marginBottom: '10px' ,marginLeft:"50px"}}
        />
        <input
          type="time"
          placeholder="Enter time range..."
          value={newTaskTime2}
          onChange={handleTimeInputChange2}
          style={{ fontSize: '1.6rem', marginBottom: '10px',marginLeft:"40px" }}
        />
        <button className="add-button" onClick={addTask} style={{marginLeft:"80px"}}>
          Add
        </button>
      </div>

      <div className="columns-container">
        {columns.map(column => (
          <div
            key={column.id}
            className="column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, column)}
          >
            <h2 style={{ fontSize: '2rem' }}>{column.title}</h2>
            <ol>
              {tasks
                .filter(task => task.column === column.id)
                .sort((a, b) => a.order - b.order)
                .map((task, index) => (
                  <li className='helll'
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                  >
                    <span className="text" style={{ fontSize: '1.8rem' }}>{task.name}</span>
                    <span className="time" style={{ fontSize: '1.8rem' }}>{task.time1}</span>
                    <span className="time" style={{ fontSize: '1.8rem' }}> - {task.time2}</span>
                    <button className="delete-button" onClick={() => deleteTask(task.id)}>
                      Delete
                    </button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>
                      ☝
                    </button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>
                      👇
                    </button>
                  </li>
                ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
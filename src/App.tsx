import React, {useState} from 'react';

//components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modal from './components/Modal';

//styles
import styles from "./App.module.css"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interface's
import {ITask} from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }
  
  return (
    <div className="App">
      <Modal />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Digite uma tarefa: </h2>
          <TaskForm btnText='Adicionar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas: </h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
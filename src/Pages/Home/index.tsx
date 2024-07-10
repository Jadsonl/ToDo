import React, { useState } from 'react'
import { Container, Main, Form } from './styles'
import { Header } from '../../Components/Header'
import { FiPlusCircle } from 'react-icons/fi'
import { Task } from '../../Components/Task'
import { DefaultTask } from '../../Components/DefaultTask'

export interface Task {
  title: string
  isComplete: boolean
}

interface HomeProps {
  TaskList: Task[]
}

export function Home({ TaskList }: HomeProps) {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState(TaskList)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleAddTask = () => {
    if (newTask !== '') {
      const newTaskItem = {
        title: newTask,
        isComplete: false, // Definir como false ao criar nova tarefa
      }
      setTasks([...tasks, newTaskItem])
      setNewTask('')
    } else {
      alert('Error: digite algo!')
      throw console.error('error')
    }
  }

  const handleTaskUpdate = (title: string, isComplete: boolean) => {
    const updatedTaskList = tasks.map((task) =>
      task.title === title ? { ...task, isComplete } : task,
    )
    setTasks(updatedTaskList)
  }

  const handleDeleteTask = (title: string) => {
    const filteredTasks = tasks.filter((task) => task.title !== title)
    setTasks(filteredTasks)
  }

  const completedTasksCount = tasks.filter((task) => task.isComplete).length

  return (
    <Container>
      <Header />
      <Main>
        <Form>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddTask}>
            Criar
            <FiPlusCircle />
          </button>
        </Form>
        <div>
          <p>
            de Tarefas criadas: <strong>{tasks.length}</strong>
          </p>

          <p>
            Concluídas:{' '}
            <strong>
              {completedTasksCount} de {tasks.length}{' '}
            </strong>
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        {tasks.length === 0 ? (
          <DefaultTask /> // Renderize o componente DefaultTask se não houver tarefas
        ) : (
          tasks.map((task) => (
            <Task
              key={task.title}
              title={task.title}
              isComplete={task.isComplete}
              onTaskUpdate={handleTaskUpdate}
              OnDeleteComment={handleDeleteTask}
            />
          ))
        )}
      </Main>
    </Container>
  )
}

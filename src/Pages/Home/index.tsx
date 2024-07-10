import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Container, Main, Form } from './styles'
import { Header } from '../../Components/Header'
import { Task } from '../../Components/Task'
import { DefaultTask } from '../../Components/DefaultTask'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from '../../App'

interface InputEventeChange extends ChangeEvent<HTMLInputElement> {}
interface KeyboardEventInput extends KeyboardEvent<HTMLInputElement> {}

interface HomeProps {
  TaskList: TaskType[]
}

export function Home({ TaskList }: HomeProps) {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState(TaskList)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (event: InputEventeChange) => {
    setNewTask(event.target.value)
    if (errorMessage) {
      setErrorMessage('') // Limpa a mensagem de erro ao digitar
    }
  }

  const handleAddTask = () => {
    if (newTask !== '') {
      const newTaskItem = {
        title: newTask,
        isComplete: false,
        id: uuidv4(),
      }
      setTasks([...tasks, newTaskItem])
      setNewTask('')
    } else {
      alert('digite algo!')
    }
  }

  const handleTaskUpdate = (id: string, isComplete: boolean) => {
    const updatedTaskList = tasks.map((task) =>
      task.id === id ? { ...task, isComplete } : task,
    )
    setTasks(updatedTaskList)
  }

  const DeleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  function handleKeyDown(event: KeyboardEventInput) {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (newTask.trim() === '') {
      setErrorMessage('Por favor, adicione uma tarefa.')
    } else {
      handleAddTask()
      setNewTask('')
    }
  }

  const completedTasksCount = tasks.filter((task) => task.isComplete).length
  const isNewTaskEmpety = newTask.length === 0
  return (
    <Container>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit}>
          <input
            maxLength={180}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            required
          />
          <button
            type="button"
            onClick={handleAddTask}
            disabled={isNewTaskEmpety}
          >
            Criar
            <PlusCircle size={18} />
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
              key={task.id}
              title={task.title}
              isComplete={task.isComplete}
              onTaskUpdate={handleTaskUpdate}
              OnDeleteTask={DeleteTask}
              id={task.id}
            />
          ))
        )}
      </Main>
    </Container>
  )
}

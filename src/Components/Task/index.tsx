import { useState } from 'react'
import { Container } from './styles'
import { Trash } from 'phosphor-react'
interface TaskProps {
  title: string
  isComplete: boolean
  id: string
  OnDeleteTask: (taks: string) => void
  onTaskUpdate: (id: string, isComplete: boolean) => void
}

export function Task({ id, title, onTaskUpdate, OnDeleteTask }: TaskProps) {
  const [task, setTask] = useState(Boolean)

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setTask(checked)
    onTaskUpdate(id, checked) // Atualiza o estado da tarefa no componente pai (Home)
  }

  function handleDeleteComment() {
    OnDeleteTask(id)
  }

  return (
    <Container>
      <label className="checkbox-container">
        <input type="checkbox" onChange={handleChecked} checked={task} />
        <span className="checkmark"></span>
        <p>{title}</p>
      </label>
      <button onClick={handleDeleteComment}>
        <Trash size={24} />
      </button>
    </Container>
  )
}

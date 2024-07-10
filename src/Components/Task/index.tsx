import { useState } from 'react'
import { Container } from './styles'
import { Trash } from 'phosphor-react'
interface TaskProps {
  title: string
  isComplete: boolean
  OnDeleteComment: (taks: string) => void
  onTaskUpdate: (title: string, isComplete: boolean) => void
}

export function Task({ title, onTaskUpdate, OnDeleteComment }: TaskProps) {
  const [task, setTask] = useState(Boolean)
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setTask(checked)
    onTaskUpdate(title, checked) // Atualiza o estado da tarefa no componente pai (Home)
  }

  function handleDeleteComment() {
    OnDeleteComment(title)
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

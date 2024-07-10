import { Home } from './Pages/Home'
export interface TaskType {
  title: string
  isComplete: boolean
  id: string
}
const taskList: TaskType[] = []
export function App() {
  return <Home TaskList={taskList} />
}

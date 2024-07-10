import { Home, Task } from './Pages/Home'

const taskList: Task[] = []
export function App() {
  return <Home TaskList={taskList} />
}

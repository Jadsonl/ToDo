import { Container } from './styles'
import clipboard from '../../assets/clipboard.svg'

export function DefaultTask() {
  return (
    <Container>
      <img src={clipboard} alt="" />
      <p> Você ainda não tem tarefas cadastradas</p>
      <p> Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}

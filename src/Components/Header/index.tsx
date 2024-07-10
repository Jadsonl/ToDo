import rocketLogo from '../../assets/rocketLogo.svg'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={rocketLogo} alt="" />
      <p>
        to<span>do</span>
      </p>
    </Container>
  )
}

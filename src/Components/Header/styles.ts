import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  > p {
    font-weight: bold;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE};
    > span {
      color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    }
  }
`

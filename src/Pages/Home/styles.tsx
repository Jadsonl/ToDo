import styled from 'styled-components'

export const Container = styled.div``
export const Main = styled.main`
  max-width: 46rem;
  margin: 0 auto;
  > div:nth-child(2) {
    margin-top: 4.375rem;
    display: flex;
    justify-content: space-between;
    p {
      color: ${({ theme }) => theme.COLORS.BLUE};
      strong {
        background-color: ${({ theme }) => theme.COLORS.GRAY_400};
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        border-radius: 8px;
        padding: 0.125rem 0.525rem;
      }
    }
  }
`
export const Form = styled.form`
  margin: -30px auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  > input {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    padding: 1rem;
    border-radius: 8px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    border-radius: 8px;
  }

  button::not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }
`

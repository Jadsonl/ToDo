import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  margin-top: 1.5rem;
  border-radius: 8px;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  p:nth-child(2) {
    font-weight: bold;
  }
`

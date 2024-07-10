import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 1rem;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  button {
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    background: transparent;
    > svg:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  label {
    display: flex;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input + span:before {
    content: '';
    margin-right: 1rem;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 50%;
    display: inline-block;
  }
  input + span:hover:before {
    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  }
  input:checked ~ p {
    text-decoration: line-through;
    color: gray;
  }

  input:checked + span::before {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342093L4.09865 4.67403L1.61618 2.19156L0.780273 3.02747L4.09865 6.34584L9.26649 1.178L8.43059 0.342093Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");

    background-repeat: no-repeat;
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  }

  input:checked + span:hover::before {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`

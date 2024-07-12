import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }

  body{
    background: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }
  
  :focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.BLUE};
  }

  a {
    text-decoration:none;
  }

  button:disabled{
    opacity: 0.7;
    background-color: ${({ theme }) => theme.COLORS.RED};
    cursor: not-allowed;
  }
  
  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:not(:disabled):hover, a:not(:disabled):hover{
    filter:brightness(0.9);
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
    .wrapper {
      grid-template-columns: 1fr;
    }
}

`

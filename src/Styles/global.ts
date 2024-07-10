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
  outline: none;
}
  a {
    text-decoration:none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
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

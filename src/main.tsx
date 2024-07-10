import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import GlobalStyles from './Styles/global.ts'
import Theme from './Styles/Theme.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

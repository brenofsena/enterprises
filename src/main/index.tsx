import * as offline from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'
import Router from './routes/router'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '@/presentation/styles/styles'

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('app'),
)

offline.install({
  onUpdateReady: () => offline.applyUpdate(),
})

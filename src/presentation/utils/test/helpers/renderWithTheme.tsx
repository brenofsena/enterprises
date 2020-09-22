import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { theme } from '@/presentation/styles/styles'

export const renderWithTheme: any = (component: React.FC) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

import { theme } from '@/theme'
import React, { ReactNode } from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

export const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

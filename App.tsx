import { theme } from '@/theme'
import { Home } from '@/screens/Home'
import { ThemeProvider } from 'styled-components/native'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App

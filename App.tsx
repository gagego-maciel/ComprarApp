import { theme } from '@/theme'
import { Home } from '@/screens/Home'
import { ThemeProvider } from 'styled-components/native'
import RNBootSplash from 'react-native-bootsplash'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const hideSplash = async () => {
      await RNBootSplash.hide({ fade: false })
    }

    hideSplash()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App

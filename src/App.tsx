import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import Light from './styles/themes/light'
import Dark from './styles/themes/dark'

import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = (): JSX.Element => {


  const [theme, setTheme] = React.useState<DefaultTheme>(Dark)


  const toggleTheme = () => {
    setTheme(theme.title === 'Light' ? Dark : Light)
  }
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
    <SearchBar />
    </ThemeProvider>
    </React.Fragment>
    
  )
}

export default App;
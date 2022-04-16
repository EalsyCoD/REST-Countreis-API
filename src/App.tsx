import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import Light from './styles/themes/light'
import Dark from './styles/themes/dark'

import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { setCountries } from './ducks/actions/CountriesAction';

import Home from './pages/main'
import Country from './pages/country'
import { Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setCountries('a'))
  }, [dispatch])

  const [theme, setTheme] = React.useState<DefaultTheme>(Dark)


  const toggleTheme = () => {
    setTheme(theme.title === 'Light' ? Dark : Light)
  }
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country/:name' element={<Country />} />
    </Routes>
    </ThemeProvider>
    </React.Fragment>
    
  )
}

export default App;
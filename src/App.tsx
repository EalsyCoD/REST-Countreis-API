import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import Light from './styles/themes/light'
import Dark from './styles/themes/dark'

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountriesList from './components/CountriesList';
import { useDispatch } from 'react-redux';
import { setCountries } from './ducks/actions/CountriesAction';

const App = (): JSX.Element => {
const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setCountries('ar'))
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
    <SearchBar />
    <CountriesList />
    </ThemeProvider>
    </React.Fragment>
    
  )
}

export default App;
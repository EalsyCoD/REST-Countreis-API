import React from 'react'

import { Container, Title, SwitcherIcon } from './styles'

interface Props {
  toggleTheme(): void
  titleTheme: string
}

const Switch: React.FC<Props> = ({ toggleTheme, titleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      <SwitcherIcon />
      <Title>{titleTheme}</Title>
    </Container>
  )
}

export default Switch
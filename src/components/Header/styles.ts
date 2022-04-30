import styled from 'styled-components'

export const Container = styled.header`
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 30px 100px 30px 35px;
  @media (min-width: 560px) {
    width: 75rem;
  }
  @media (max-width: 1024px) {
    width: 35rem;
    margin: 25px 19%;
  }
`

export const Title = styled.h1`
  font-size: 26px;
  color: ${(props) => props.theme.colors.text};
`
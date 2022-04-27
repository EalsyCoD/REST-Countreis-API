import styled from 'styled-components'

export const Container = styled.div`
margin: 0 auto;
width: 0;
`

export const ContainerSelect = styled.div`
position: absolute;
padding-left: 310px;

`

export const Select = styled.select`
  width: 200px;
  padding: 1em 1em;
  border-radius: 0.625em;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  background-repeat: no-repeat;
  background-size: 24px;
  cursor: pointer;
`
export const Option = styled.option`

`
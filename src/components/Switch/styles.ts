import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
`

export const SwitcherIcon = styled.div`
  width: 30px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.icon};
  background-image: url(${(props) => props.theme.iconSwitch});
  background-repeat: no-repeat;
  background-position: center;
`
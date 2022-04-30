import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 20%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.938em;
  @media (max-width: 1414px) {
    margin-left: 33%;
  }
  @media (max-width: 1204px) {
    margin-left: 30%;
  }
  @media (max-width: 1131px) {
    margin-left: 40%;
  }
  @media (max-width: 1024px) {
    margin-left: 35%;
  }
`
export const CountriesContainer = styled.div`
  max-width: 330px;
  margin: -5px 0 0 -47px;
  display: flex;
  padding: 0 50px 30px 0;
`
export const IconCountrie = styled.img`
  bottom: 0px;
  left: 0px;
  position: relative;
  width: 230px;
  height: 110px;
  min-width: 24px;
  background-repeat: no-repeat;
  background-position: center;
`
export const Content = styled.div`
background-color: ${(props) => props.theme.colors.backgroundColor};
padding-bottom: 3em;
margin: 20px 0 0 50px;
`
export const IconContainer = styled.div`

`
export const FullName = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
`
export const Name = styled.h3`
color: ${(props) => props.theme.colors.text};
margin: 10px 0 0 15px;
`
export const Population = styled.p`
font-weight: 600;
color: ${(props) => props.theme.colors.text};
margin: 10px 0 8px 15px;
`

export const TopicsContainer = styled.div`
font-weight: 600;
  display: flex;
  margin: 5px -6px;
`
export const Region = styled.p`
color: ${(props) => props.theme.colors.text};
  margin: -8px 5px 8px 8px;
  padding: 3px 7px;
  border-radius: 2em;
  font-weight: 600;
  cursor: pointer;
`

export const Capital = styled.div`
font-weight: 600;
color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -8px 0 0 15px;
`
export const LanguageIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f1e05a;
  margin-right: 5px;
`
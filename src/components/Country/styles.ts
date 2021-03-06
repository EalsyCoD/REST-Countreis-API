import styled from 'styled-components'

export const Container = styled.div`
margin: 40px auto;
padding: 30px 100px 30px 35px;
  @media (min-width: 560px) {
    width: 75rem;
  }
  @media (max-width: 1440px) {
    width: 85rem;
    padding: 0 0 0 50px;
  }
  @media (max-width: 1024px) {
    width: 45rem;
    padding: 0 0 0 50px;
  }
`
export const ItemContainer = styled.div`
display: flex;
@media (max-width: 1024px) {
  display: block;

}
`

export const ImageCountry = styled.img`
width: 500px;
height: 360px;
`
export const Name = styled.div`
width: 300px;
margin: 20px 0 0 100px;
@media (max-width: 1024px) {
  margin: 0 0 0 -100px;

}
`
export const MobileAdaptive = styled.div`
display: flex;
@media (max-width: 1024px) {
display: flex;
margin-left: 100px;
}
`
export const NameCountry = styled.h1`
width: 300px;
`
export const NativeName = styled.p`
margin-top: 20px;
`
export const Population = styled.p`
margin-top: 20px;
`
export const Region = styled.p`
margin-top: 20px;
`
export const SubRegion = styled.p`
margin-top: 20px;
`
export const Capital = styled.p`
margin-top: 20px;
`

export const Domain = styled.div`
margin: 80px 0 0 0;
`

export const TopLevelDomain = styled.p`

`
export const Currencies = styled.p`
margin-top: 20px;

`
export const Languages = styled.p`
margin-left: 5px;
`
export const Language = styled.div`
width: 450px;
display: flex;
margin-top: 20px;

`
export const Border = styled.div`
width: 300px;
display: flex;
margin-top: 20px;
width: 650px;
`
export const Topic = styled.div`
display: flex;
margin-top: 50px;
flex-wrap: wrap;
`
export const Topics = styled.div`
width: 100px;
height: 25px;
border: 1px solid ${(props) => props.theme.colors.backgroundColor};
background-color: ${(props) => props.theme.colors.backgroundColor};
margin: 0 0 10px 15px;
padding: 2px 0 0 30px;
`
export const Image = styled.div`

`
export const Cur = styled.div`

`
export const Button = styled.button`
margin: 5px 0 0 25px;
background-color: ${(props) => props.theme.colors.backgroundColor};
color: ${(props) => props.theme.colors.back};
`
export const Arrow = styled.img`
width: 15px;
height: 15px;
margin: 0 0 -2px 0;
`
export const Arow = styled.div`
margin: 30px 20%;
height: 30px;
align-items: center;
border: 1px solid ${(props) => props.theme.colors.backgroundColor};
background-color: ${(props) => props.theme.colors.backgroundColor};
border-radius: 8px;
color: ${(props) => props.theme.colors.back};
font-size: 12px;
@media (min-width: 560px) {
    width: 7rem;
  }
&:hover{
    cursor: pointer;
}
`
export const Contry = styled.h1`
`

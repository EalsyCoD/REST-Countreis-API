import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  border-radius: 0.938em;
  @media (min-width: 1024px) {
    width: 85em;
  }
  `
export const SearchIcon = styled.div`
  position: relative;
  width: 25px;
  left: 40px;
  background-image: url('./images/search.svg');
  background-repeat: no-repeat;
  background-position: center;

  `
export const Input = styled.input`
width: 400px;
height: 45px;
padding-left: 50px;
&:focus{
  
}

  `
export const Button = styled.div`
margin-top: 10px;
`
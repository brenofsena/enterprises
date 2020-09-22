import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: ${rem('40px')};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  align-self: center;
  box-shadow: ${props => props.theme.boxShadow};

  button {
    margin: 32px 0 0;
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.gray};
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`

import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`
export const Logo = styled.img`
  margin: ${rem('16px')} 0;
  align-self: center;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.gray};
  text-align: center;
  font-size: ${rem('24px')};
  font-weight: ${props => props.theme.font.bold};
  text-transform: uppercase;
  margin: ${rem('16px')} 0;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  text-align: center;
  font-size: ${rem('18px')};
  font-weight: ${props => props.theme.font.regular};
  margin: ${rem('16px')} 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: ${rem('40px')};
  background: transparent;
  align-self: center;

  button {
    margin: 32px 0 0;
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.bold};
  }
`

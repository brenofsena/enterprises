import styled from 'styled-components'
import { rem } from 'polished'

export const Header = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.mediumPink};
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  flex-grow: 1;
  padding: ${rem('32px')};
`
export const LogoWhite = styled.img`
  align-self: center;
  max-width: 150px;
`
export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

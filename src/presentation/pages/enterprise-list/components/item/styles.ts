import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { rem } from 'polished'

export const Item = styled.li`
  height: 215px;
  background: #fff;
  list-style: none;
  border-radius: 4.7px;
  margin-bottom: 24px;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.3);
  padding: ${rem('16px')};
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`

export const Anchor = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 100%;
  flex: 1;
`
export const Image = styled.img`
  max-width: 38%;
`

export const Description = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: ${rem('16px')} ${rem('16px')} ${rem('16px')} ${rem('32px')};
`

export const Name = styled.h2`
  font-size: ${rem('30px')};
  font-weight: ${(props) => props.theme.font.bold};
  color: #1a0e49;
`

export const TypeName = styled.span`
  font-size: ${rem('24px')};
  font-weight: ${(props) => props.theme.font.regular};
  color: #8d8c8c;
`

export const Country = styled.span`
  font-size: ${rem('18px')};
  font-weight: ${(props) => props.theme.font.regular};
  color: #8d8c8c;
`

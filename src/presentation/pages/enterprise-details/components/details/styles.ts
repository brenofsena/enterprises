import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
`

export const Content = styled.article`
  padding: ${rem('32px')};
  background: #fff;
  border-radius: 4.8px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Image = styled.img`
  margin: ${rem('16px')} 0;
`

export const Description = styled.p`
  margin: ${rem('16px')} 0;
  color: #8d8c8c;
  font-size: ${rem('24px')};
`

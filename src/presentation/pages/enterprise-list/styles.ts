import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
export const ContentWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  padding: ${rem('32px')};
`

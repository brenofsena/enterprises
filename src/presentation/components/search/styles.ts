import styled from 'styled-components'
import { rem } from 'polished'

export const SearchWrapper = styled.div`
  flex: auto;
  padding: 0 ${rem('16px')};
`

export const Wrapper = styled.div`
  position: relative;
`

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 38px;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-weight: lighter;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  background: transparent;
  font-size: 20px;
  line-height: 20px;
  padding: 0 20px 0 48px;
  margin: 0;
  border-bottom: solid 1px #fff !important;
  overflow: hidden;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    font-size: ${rem('20px')};
    color: #991237;
  }
`

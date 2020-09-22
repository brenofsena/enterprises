import styled from 'styled-components'

export const InputWrap = styled.div`
  margin: 40px 0 0;
  position: relative;
  border-bottom: 2px dashed ${props => props.theme.colors.disabledColor};

  &[data-status="valid"] {
    border-bottom-color: ${props => props.theme.colors.valid};

    &:after {
      background: ${props => props.theme.colors.valid};
    }
  }

  &[data-status="invalid"] {
    border-bottom-color: ${props => props.theme.colors.invalid};

    &:after {
      background: ${props => props.theme.colors.invalid};
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.disabledColor};
    position: absolute;
    bottom: -2px;
    left: 0;
    transform-origin: 0%;
    transform: scaleX(0);
    transition: transform 400ms ease;
  }

  &:focus-within {
    border-color: transparent;

    &::after {
      transform: scaleX(1);
    }

    label {
      transform: scale(0.9) translateY(-20px);
    }
  }

  input {
    width: 100%;
    line-height: 24px;
    padding: 0px 40px 0px 8px;

    &:not(:placeholder-shown) + label {
      transform: scale(0.9) translateY(-20px);
    }
  }

  label {
    position: absolute;
    left: 8px;
    color: ${props => props.theme.colors.disabledColor};
    cursor: text;
    transform-origin: 0%;
    transform: translateY(0);
    transition: transform 400ms ease;
  }
`

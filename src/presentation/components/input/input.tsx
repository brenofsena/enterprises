import * as S from './styles'
import React, { useContext, useRef } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  return (
    <S.InputWrap
      data-testid={`${props.name}-wrap`}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label
        data-testid={`${props.name}-label`}
        onClick={() => { inputRef.current.focus() }}
        title={error}
      >
        {props.placeholder}
      </label>
    </S.InputWrap>
  )
}

export default Input

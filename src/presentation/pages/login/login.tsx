import * as S from './styles'
import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, FormStatus, SubmitButton } from '@/presentation/components'
import { FormContext, ApiContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/useCases'
import Logo from '../../../../static/logo.png'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('password') }, [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.emailError || !!old.passwordError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading || state.isFormInvalid) return

      setState(old => ({ ...old, isLoading: true }))

      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })

      setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <S.Wrapper>
      <FormContext.Provider value={{ state, setState }}>
        <S.Form data-testid="form"  onSubmit={handleSubmit}>
          <S.Logo src={Logo} alt="Ioasys" title="Ioasys" />
          <S.Title>BEM-VINDO AO <br /> EMPRESAS</S.Title>
          <S.Description>
            Lorem ipsum dolor sit amet, contetur <br /> adipiscing elit. Nunc accumsan.
          </S.Description>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />
          <SubmitButton text="Entrar" />
          <FormStatus />
        </S.Form>
      </FormContext.Provider>
    </S.Wrapper>
  )
}

export default Login


import { Envelope } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'


import { Button, Container, FormDiv, Input, Form, InputContainer } from './styles'

export function SignIn() {
  return (
    <Container>
      <div className='flex md:gap-x-20 lg:gap-x-64 xl:gap-x-80'>
        <div className='w-1/2 md:flex hidden'>
          <img
            className='min-w-1xl'
            src={logoImage}
            alt="food explorer"
          />
        </div>

        <FormDiv>
          <h1 className='text-white font-poppins text-4xl'>
            Faça Login
          </h1>

          <Form>

            <InputContainer>
              <FiMail
                className='absolute ml-4'
                color='#7C7C8A'
                size={22}
              />
              <Input
                type='text'
                name='email'
                placeholder='Email'
              />
            </InputContainer>

            <InputContainer>
              <FiLock
                className='absolute ml-4'
                color='#7C7C8A'
                size={22} />
              <Input
                type='password'
                name='password'
                placeholder='Senha'
              />
            </InputContainer>

            <Button>
              Entrar
            </Button>
          </Form>

          <button
            className='font-poppins font-medium text-white mt-8 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset focus:ring-offset-white ease-in-out duration-300

            '
          >
            Criar conta
          </button>
        </FormDiv>
      </div>
    </Container>
  )
}


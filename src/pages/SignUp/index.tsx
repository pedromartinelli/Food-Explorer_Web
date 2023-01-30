import { Envelope } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'


import { Container, FormDiv, Input, Form, InputContainer } from './styles'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function SignUp() {
  return (
    <Container>
      <div className='flex md:gap-x-20 lg:gap-x-52 xl:gap-x-80'>
        <div className='w-1/2 lg:flex hidden'>
          <img
            className='min-w-1xl'
            src={logoImage}
            alt="food explorer"
          />
        </div>

        <FormDiv>
          <h1 className='text-white font-poppins text-4xl'>
            Faça o cadastro
          </h1>

          <Form>

            <InputContainer>
              <FiUser
                className='absolute ml-4'
                color='#7C7C8A'
                size={22}
              />
              <Input
                type='text'
                name='name'
                placeholder='Nome'
              />
            </InputContainer>

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

            <Button title='Entrar' $large={true} />
          </Form>

          <div className='mt-12 mb-6 grid grid-cols-3 items-center w-full'>
            <hr className='border-gray-500' />
            <p className='text-gray-400 text-center text-sm'>OU</p>
            <hr className='border-gray-500' />
          </div>

          <div className='w-full flex items-center justify-between border-gray-500'>
            <p className='text-gray-400 font-poppins text-sm'>
              Se você já tem <br className='lg:hidden' /> uma conta, <br className='sm:hidden lg:flex' /> vá para o login.
            </p>

            <NavButton title='Voltar para o login' />
          </div>
        </FormDiv>
      </div>
    </Container>
  )
}


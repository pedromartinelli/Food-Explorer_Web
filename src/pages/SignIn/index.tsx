import { Envelope } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'


import { Container, FormDiv, Input, Form, InputContainer } from './styles'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function SignIn() {
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

            <Button title='Entrar' icon={''} width={'auto'}


            />
          </Form>

          <div className='my-12 grid grid-cols-3 items-center w-full'>
            <hr className='border-gray-500' />
            <p className='text-gray-400 text-center text-sm'>OU</p>
            <hr className='border-gray-500' />
          </div>

          <button
            className='bg-white font-poppins rounded-3xl py-2 w-full flex gap-2 items-center justify-center hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          >
            <FcGoogle
              className=''
              size={22}
            />
            Entrar com o Google
          </button>

          <div className='w-full my-5 text-gray-400 border-b border-gray-500 py-6 font-poppins text-sm text-left '>
            <button className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300 '>
              Esqueci minha senha!
            </button>
          </div>

          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 font-poppins text-sm'>
              Se você não tem <br className='lg:hidden' /> uma conta, <br className='sm:hidden lg:flex' /> se registre!
            </p>

            <NavButton title='Criar conta' to='/register' />
          </div>
        </FormDiv>
      </div>
    </Container>
  )
}


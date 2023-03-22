import { Link } from 'react-router-dom'

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../../hooks/auth';

import logoImage from '../../assets/logo.svg'

import { FiMail, FiLock } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { RiErrorWarningFill } from 'react-icons/ri';

import { Container, FormDiv, Input, Form, InputContainer } from './styles'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function SignIn() {
  const schema = zod.object({
    email: zod.string().email({ message: 'Introduza um endereço de email válido.' }),
    password: zod.string().min(1, { message: 'Introduza a senha de usuário.' })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const { SignIn } = useAuth()

  function handleSignIn(user: any) {
    SignIn({ email: user.email, password: user.password })
  };

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

          <Form
            id='form'
            onSubmit={handleSubmit((d) => handleSignIn(d))}
          >

            <div className='flex items-center'>
              <FiMail
                className='absolute ml-4'
                color='#7C7C8A'
                size={22}
              />
              <Input
                placeholder='E-mail'
                type='text'
                {...register('email')}
              />
            </div>
            {errors.email?.message && <p className='text-xs -mt-6 mx-2 text-[#C0433D] flex items-center gap-2'> <RiErrorWarningFill /> {errors.email?.message}</p>}

            <div className='flex items-center'>
              <FiLock
                className='absolute ml-4'
                color='#7C7C8A'
                size={22} />
              <Input
                placeholder='Senha'
                type='password'
                {...register('password')}
              />
            </div>
            {errors.password?.message && <p className='text-xs -mt-6 mx-2 text-[#C0433D] flex items-center gap-2'> <RiErrorWarningFill /> {errors.password?.message}</p>}


            <Button
              title='Entrar'
            />

          </Form>

          <div className='my-12 grid grid-cols-3 items-center w-full'>
            <hr className='border-gray-500' />
            <p className='text-gray-400 text-center text-sm'>OU</p>
            <hr className='border-gray-500' />
          </div>

          <button
            className=' bg-white font-poppins rounded-3xl py-2 w-full flex gap-2 items-center justify-center hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
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


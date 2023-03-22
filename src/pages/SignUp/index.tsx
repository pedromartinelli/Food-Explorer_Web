import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Envelope } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { RiErrorWarningFill } from 'react-icons/ri';

import { Container, FormDiv, Input, Form, InputContainer } from './styles'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function SignUp() {
  const schema = zod.object({
    name: zod.string().min(1, { message: 'Introduza um nome.' }),
    email: zod.string().email({ message: 'Introduza um endereço de email válido.' }),
    password: zod.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  function handleSignUp(user: any) {
    console.log(user)
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
          <h1 className='text-white font-poppins text-4xl text-center'>
            {/* Faça <br className='sm:hidden'/> o <br className='sm:hidden'/> cadastro */}
            Cadastro
          </h1>

          <Form
            onSubmit={handleSubmit((d) => handleSignUp(d))}
          >

            <div className='flex items-center'>
              <FiUser
                className='absolute ml-4'
                color='#7C7C8A'
                size={22}
              />
              <Input
                placeholder='Nome'
                type='text'
                {...register('name')}
              />
            </div>
            {errors.name?.message && <p className='text-xs -mt-6 mx-2 text-[#C0433D] flex items-center gap-2'> <RiErrorWarningFill /> {errors.name?.message}</p>}

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
              title='Criar conta'
            />
          </Form>

          <div className='mt-12 mb-6 grid grid-cols-3 items-center w-full'>
            <hr className='border-gray-500' />
            <p className='text-gray-400 text-center text-sm'>OU</p>
            <hr className='border-gray-500' />
          </div>

          <div className='w-full flex items-center justify-between border-gray-500'>
            <p className='text-gray-400 font-poppins text-sm'>
              Se você já tem <br className='md:hidden' /> uma conta, <br className='sm:hidden md:flex' /> vá para o login.
            </p>

            <NavButton title='Voltar para o login' to='/' />
          </div>
        </FormDiv>
      </div>
    </Container>
  )
}


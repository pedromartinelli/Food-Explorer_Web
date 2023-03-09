import { useEffect, useState } from 'react'

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link } from 'react-router-dom'

import { UploadSimple, CaretLeft } from 'phosphor-react'

import { Container, Main, InputSpan, InputsLine, OrderList, Payment, OrderCard, PaymentMethod, Form, Input, InputContainer, PaymentSession, PaymentStatus } from './styles'

import { Header, Footer, Button, IngredientTag } from '../../components'

export function NewDish() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState('')

  const schema = zod.object({
    title: zod.string().min(1, { message: 'Adicione um nome para o prato.' }),
    description: zod.string().min(1, { message: 'Adicione uma descrição para o prato.' }),
    price: zod.number().min(1, { message: 'Adicione o preço do prato.' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });

  function handleAddIngredient() {
    const repeatedIngredient = ingredients.filter(ingredient => ingredient === newIngredient)

    if (repeatedIngredient.length > 0) {
      return alert('Não é possível adicionar ingredientes iguais.');
    };

    if (!newIngredient) {
      return alert('Não é possível adicionar um ingrediente vazio.');
    };

    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  };

  function handleRemoveIngredient(deleted: any) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  return (
    <Container>
      <Header />
      <Main>
        <Link
          className='text-white font-poppins font-medium text-2xl self-start flex items-center ml-7 relative w-20 hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          to='/'
        >
          <CaretLeft
            className='absolute -left-8 top-[1px]'
            size={30}
          />
          voltar
        </Link>

        <Form>
          <h1 className='text-white font-poppins text-4xl'>
            Editar prato
          </h1>

          <InputsLine className='flex flex-row'>

            <InputContainer>
              <InputSpan className='hidden sm:flex'>Imagem do prato</InputSpan>
              <InputSpan className='flex sm:hidden'>Imagem</InputSpan>

              <label
                className='border py-3 sm:px-8 rounded-full sm:rounded-lg cursor-pointer flex flex-row justify-center items-center gap-2'
                htmlFor="avatar"
              >

                <UploadSimple
                  style={{ color: '#CAC4CC' }}
                  size={32}
                />

                <Input
                  className='hidden'
                  id="avatar"
                  type="file"
                />
                <InputSpan className='hidden sm:flex'>Selecione a imagem.</InputSpan>
              </label>

            </InputContainer>

            <InputContainer className='flex-1'>
              <InputSpan>Nome</InputSpan>

              <Input
                className='py-4'
                type='text'
                name='title'
                placeholder='Ex.: Salada Caesar'
              />
            </InputContainer>
          </InputsLine>

          <InputsLine className=''>

            <InputContainer className='flex-1'>
              <InputSpan>Ingredientes</InputSpan>

              <div className='border rounded-lg p-2 flex flex-row gap-2'>
                {ingredients.map((ingredient, i) => (
                  <IngredientTag
                    key={String(i)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <IngredientTag 
                  isNew
                  placeholder='Novo Ingrediente'
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
                
                {/* <IngredientTag
                  value={newIngredient}
                  placeholder='Novo ingrediente'
                  isNew={false}
                  onChange={e => setNewIngredient(e.target.value)}
                />

                <IngredientTag
                  value={newIngredient}
                  placeholder='Novo ingrediente'
                  isNew
                  onChange={e => setNewIngredient(e.target.value)}
                /> */}
              </div>
            </InputContainer>

            <InputContainer className=''>
              <InputSpan>Preço</InputSpan>

              <Input
                type='text'
                name='title'
                placeholder='Ex.: R$ 79,90'
              />
            </InputContainer>
          </InputsLine>


        </Form>

      </Main>
      <Footer />
    </Container>
  )
}


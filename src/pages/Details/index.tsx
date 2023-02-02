import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import exampleFood from '../../assets/exampleFood.png'
import alface from '../../assets/alface.svg'
import tomate from '../../assets/tomate.svg'

import { Link } from 'react-router-dom'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowDropLeftLine } from 'react-icons/ri'

import { Container, Section, Ingredients, IngredientCard, FoodDetails } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function Details() {
  return (
    <Container>
      <Header />
      <div className='w-[1120px] ml-auto mr-auto mt-6 pr-10'>

        <Link
          className='text-white font-poppins font-medium text-2xl self-start flex items-center ml-7 relative w-20 hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          to='/'
        >
          <RiArrowDropLeftLine
            className='absolute -left-11 -top-[7.9px]'
            size={50}
          />
          voltar
        </Link>

        <Section>
          <img
            className='w-[540px]'
            src={exampleFood}
            alt="Torradas de Parma"
          />

          <FoodDetails>
            <h1 className='font-poppins font-medium text-[40px] mb-2'>
              Torradas de Parma
            </h1>
            <p className='font-poppins font-normal text-2xl '>
              Presunto de parma e rúcula em um pão com fermentação natural.
            </p>

            <Ingredients>
              <IngredientCard>
                <img
                  className='w-[54px]'
                  src={alface}
                  alt="Torradas de Parma"
                />
                <span className='font-poppins'>
                  alface
                </span>
              </IngredientCard>

              <IngredientCard>
                <img
                  className='w-[54px]'
                  src={tomate}
                  alt="Torradas de Parma"
                />
                <span className='font-poppins'>
                  tomate
                </span>
              </IngredientCard>
            </Ingredients>
            
            <div className='flex items-center gap-16'>
              <span className='text-blue text-3xl'>
                R$ 25,97
              </span>

              <div className='flex items-center'>
                <button
                  className='text-white hover:opacity-80 hover:scale-110 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
                >
                  <FiMinus size={24} />
                </button>

                <span className='text-white text-xl font-roboto font-bold mx-5 w-4'>
                  01
                </span>

                <button
                  className='text-white mr-4 hover:opacity-80 hover:scale-110 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
                >
                  <FiPlus size={24} />
                </button>

                <Button title='incluir' icon={''} width={'100px'} />
              </div>
            </div>
          </FoodDetails>

        </Section>
      </div>
      <Footer />
    </Container>
  )
}


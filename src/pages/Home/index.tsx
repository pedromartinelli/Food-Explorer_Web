import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import exampleFood from '../../assets/exampleFood.png'

import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { RiArrowDropRightLine } from 'react-icons/ri'

import { Container, Section, Card, CardWrapper } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function Home() {
  return (
    <Container>
      <Header />
      <div className='w-[1120px] ml-auto mr-auto mt-6 pr-10'>
        <img
          src={homeImg}
          alt="Sabores inigualáveis, sinta o cuidado do preparo com ingredientes selecionados."
        />

        <div>
          <Section>
            <h2 className='text-white font-poppins text-4xl'>Pratos principais</h2>
            <CardWrapper>
              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                  alt=""
                />

                <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                  Torradas de Parma
                  <RiArrowDropRightLine
                    className='text-white absolute -right-10 top-[-2px]'
                    size={38}
                  />
                </h3>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcuça em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>
              </Card>

              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                  alt=""
                />

                <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                  Torradas de Parma
                  <RiArrowDropRightLine
                    className='text-white absolute -right-10 top-[-2px]'
                    size={38}
                  />
                </h3>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcuça em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>
              </Card>
            </CardWrapper>
          </Section>

          <Section>
            <h2 className='text-white font-poppins text-4xl'>Sobremesas</h2>
            <Card>
              <FiHeart
                className='absolute top-5 right-5 z-10 text-white'
                size={25}
              />

              <img
                className='w-44 h-44 self-center mb-4 mt-2'
                src={exampleFood}
                alt=""
              />

              <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                Torradas de Parma
                <RiArrowDropRightLine
                  className='text-white absolute -right-10 top-[-2px]'
                  size={38}
                />
              </h3>

              <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                Presunto de parma e rúcuça em um pão com fermentação natural.
              </p>

              <span className='text-blue text-3xl'>
                R$ 25,97
              </span>
            </Card>
          </Section>

          <Section className='mb-0'>
            <h2 className='text-white font-poppins text-4xl'>Bebidas</h2>
            <Card>
              <FiHeart
                className='absolute top-5 right-5 z-10 text-white'
                size={25}
              />

              <img
                className='w-44 h-44 self-center mb-4 mt-2'
                src={exampleFood}
                alt=""
              />

              <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                Torradas de Parma
                <RiArrowDropRightLine
                  className='text-white absolute -right-10 top-[-2px]'
                  size={38}
                />
              </h3>

              <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                Presunto de parma e rúcuça em um pão com fermentação natural.
              </p>

              <span className='text-blue text-3xl'>
                R$ 25,97
              </span>
            </Card>
          </Section>
        </div>
      </div>
    </Container>
  )
}


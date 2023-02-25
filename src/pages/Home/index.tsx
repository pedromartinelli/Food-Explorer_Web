import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import exampleFood from '../../assets/exampleFood.png'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowDropRightLine } from 'react-icons/ri'

import { Container, Section, Card, CardWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'


export function Home() {

  return (
    <Container>
      <Header />
      {/* <div className='w-[1120px] ml-auto mr-auto mt-6 pr-10'>
        <img
          src={homeImg}
          alt="Sabores inigualáveis, sinta o cuidado do preparo com ingredientes selecionados."
        />

        <div>
          <Section >
            <h2 className='text-white font-poppins text-4xl'>Pratos principais</h2>
            <Carousel className='w-[1050px]' centerMode swipeable transitionTime={500} centerSlidePercentage={32} infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>

              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>


            </Carousel>
          </Section>

          <Section>
            <h2 className='text-white font-poppins text-4xl'>Sobremesas</h2>
            <Carousel className='w-[1050px]' centerMode swipeable transitionTime={500} centerSlidePercentage={32} infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>

              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>


            </Carousel>
          </Section>

          <Section className='mb-0'>
            <h2 className='text-white font-poppins text-4xl'>Bebidas</h2>
            <Carousel className='w-[1050px]' centerMode swipeable transitionTime={500} centerSlidePercentage={32} infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>

              <Card>
                <FiHeart
                  className='absolute top-5 right-5 z-10 text-white'
                  size={25}
                />

                <img
                  className='!w-44 h-44 self-center mb-4 mt-2'
                  src={exampleFood}
                />

                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    Exemplo2
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  Presunto de parma e rúcula em um pão com fermentação natural.
                </p>

                <span className='text-blue text-3xl'>
                  R$ 25,97
                </span>

                <div className='flex items-center mt-5'>
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
              </Card>


            </Carousel>
          </Section>
        </div>
      </div> */}
      {/* <Footer /> */}
    </Container>
  )
}


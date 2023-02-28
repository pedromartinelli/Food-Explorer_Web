import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import homeImgMobile from '../../assets/homeImgMobile.svg'
import exampleFood from '../../assets/exampleFood.png'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowDropRightLine } from 'react-icons/ri'

import { Container, Section, Card, CardWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'
import { Arrow } from '../../components/Arrow'

import { exampleFoods } from "../../constants";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from "react";


export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 36 },
        vertical: false,
      },

      "(min-width: 1020px)": {
        slides: { perView: 3, spacing: 36 },
        vertical: false,
      },
    },
    loop: true,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 20,
    },
  })

  return (
    <Container>
      <Header />
      <div className="w-full xl:max-w-[1120px] m-auto flex flex-col items-center relative">
        <div className="pr-4">
          <img
            src={homeImgMobile}
            alt="Sabores inigualáveis, sinta o cuidado do preparo com ingredientes selecionados."
          />
        </div>

        <div
          ref={slideRef}
          className='keen-slider'
        >
          {exampleFoods.map((food, i) => (
            <Card
              key={i}
              className='keen-slider__slide'
            >
              <FiHeart
                className='absolute top-5 right-8 z-10 text-white'
                size={25}
              />

              <img
                className='!w-44 h-44 self-center mb-4 mt-2'
                src={food.image}
              />


              <div className="flex flex-col items-center">
                <Link to={'/details'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
                  <h3 className='text-white font-poppins font-bold text-2xl flex items-center relative'>
                    {food.title}
                    <RiArrowDropRightLine
                      className='text-white absolute -right-10 top-[-2px]'
                      size={38}
                    />
                  </h3>
                </Link>

                <p className='text-gray_300 text-sm mt-5 mb-4 w-56'>
                  {food.description}
                </p>

                <span className='text-blue text-3xl'>
                  R$ {food.price / 100}
                </span>
              </div>

              <div className='flex items-center justify-center mt-5 ml-2'>
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

                <Button title='incluir' icon={''} />
              </div>
            </Card>
          ))}
        </div >

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>

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
      <Footer />
    </Container>
  )
}


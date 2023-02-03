import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import exampleFood from '../../assets/exampleFood.png'
import alface from '../../assets/alface.svg'
import tomate from '../../assets/tomate.svg'

import { Link } from 'react-router-dom'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowDropLeftLine } from 'react-icons/ri'

import { Container, Section, OrderList, Payment, OrderCard, PaymentMethod } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function MyOrder() {
  return (
    <Container>
      <Header />
      <div className='w-[1120px] ml-auto mr-auto mt-6 pr-10 flex-1'>
        <Section>
          <OrderList>
            <h2 className='font-poppins font-medium text-4xl mb-8'>
              Meu pedido
            </h2>

            <div className='h-[480px] border-b-2 border-red-400 border-opacity-40 pt-4 pr-12 overflow-auto mb-5'>
              <OrderCard>
                <img
                  className='w-20'
                  src={exampleFood}
                  alt="Torradas de Parma"
                />

                <div>
                  <div className='flex gap-3 items-center'>
                    <p className='font-poppins font-medium text-xl'>
                      1 x Torradas de Parma
                    </p>

                    <span className='font-roboto text-base text-gray_200'>
                      R$ 25,97
                    </span>
                  </div>

                  <button className='text-red_100 font-roboto text-lg mt-2'>
                    Excluir
                  </button>
                </div>

              </OrderCard>
              <OrderCard>
                <img
                  className='w-20'
                  src={exampleFood}
                  alt="Torradas de Parma"
                />

                <div>
                  <div className='flex gap-3 items-center'>
                    <p className='font-poppins font-medium text-xl'>
                      1 x Torradas de Parma
                    </p>

                    <span className='font-roboto text-base text-gray_200'>
                      R$ 25,97
                    </span>
                  </div>

                  <button className='text-red_100 font-roboto text-lg mt-2'>
                    Excluir
                  </button>
                </div>

              </OrderCard>
              <OrderCard>
                <img
                  className='w-20'
                  src={exampleFood}
                  alt="Torradas de Parma"
                />

                <div>
                  <div className='flex gap-3 items-center'>
                    <p className='font-poppins font-medium text-xl'>
                      1 x Torradas de Parma
                    </p>

                    <span className='font-roboto text-base text-gray_200'>
                      R$ 25,97
                    </span>
                  </div>

                  <button className='text-red_100 font-roboto text-lg mt-2'>
                    Excluir
                  </button>
                </div>

              </OrderCard>

            </div>

            <h3 className='font-poppins font-medium text-4xl'>
              Total: R$ 103,88
            </h3>
          </OrderList>

          <Payment>
            <h2 className='font-poppins font-medium text-4xl'>
              Pagamento
            </h2>

            <div className='flex ml-14 border border-blue'>
              <PaymentMethod>
                PIX
              </PaymentMethod>

              <PaymentMethod>
                Crédito
              </PaymentMethod>
            </div>
          </Payment>
        </Section>
      </div>
      <Footer />
    </Container>
  )
}


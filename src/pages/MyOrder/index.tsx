import { useState } from 'react'

import exampleFood from '../../assets/exampleFood.png'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'

import { Link } from 'react-router-dom'
import { FiCreditCard } from 'react-icons/fi'
import { RiArrowDropLeftLine } from 'react-icons/ri'

import { Container, Section, OrderList, Payment, OrderCard, PaymentMethod, Form, Input, PaymentSession } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function MyOrder() {
  const [paymentToggled, setPaymentToggled] = useState('pix')

  return (
    <Container>
      <Header />
      <div className='ml-auto mr-auto mt-6 pr-10 flex-1'>
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

            <PaymentSession className={`${paymentToggled == 'pix' ? 'rounded-tl-xl' : 'rounded-tr-xl'}`}>
              <div className='flex '>
                <PaymentMethod
                  className={`${paymentToggled == 'pix' ? 'bg-background_700 rounded-tl-xl' : ''}`}
                  onClick={() => setPaymentToggled('pix')}
                >
                  <img
                    src={pix}
                    alt="pix"
                  />
                  PIX
                </PaymentMethod>

                <PaymentMethod
                  className={`${paymentToggled == 'credit' ? 'bg-background_700 rounded-tr-xl' : ''}`}
                  onClick={() => setPaymentToggled('credit')}
                >
                  <FiCreditCard 
                    size={24}
                  />
                  Crédito
                </PaymentMethod>
              </div>

              {
                paymentToggled == 'pix'
                  ?
                  <img
                    src={qrcode}
                    alt="qr code"
                  />
                  :
                  <Form>

                    <label htmlFor="cardNumber">Número do cartão</label>
                    <Input
                      type='number'
                      name='cardNumber'
                      placeholder='0000 0000 0000 0000'
                    />

                    <div className='flex mt-9 mb-14'>
                      <div>
                        <label htmlFor="expirationDate">Data de Validade</label>
                        <Input
                          className='w-[168px]'
                          type='date'
                          name='expirationDate'
                          placeholder='04/25'
                        />
                      </div>

                      <div>
                        <label htmlFor="cvc">CVC</label>
                        <Input
                          className='w-[168px]'
                          type='password'
                          name='cvc'
                          placeholder='***'
                        />
                      </div>
                    </div>

                    <Button
                      title='Finalizar pagamento'
                      icon={''}
                      className={''}
                      iconClassName={''}
                    />
                  </Form>
              }
            </PaymentSession>
          </Payment>
        </Section>
      </div>
      <Footer />
    </Container>
  )
}


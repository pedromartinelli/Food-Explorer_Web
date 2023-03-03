import { useState } from 'react'

import exampleFood from '../../assets/exampleFood.png'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'

import { Link } from 'react-router-dom'
import { FiCreditCard, } from 'react-icons/fi'
import { BiTime, BiCheckCircle } from 'react-icons/bi'

import { Container, Section, OrderList, Payment, OrderCard, PaymentMethod, Form, Input, PaymentSession, PaymentStatus } from './styles'

import { Header, Footer, Button } from '../../components'

import { exampleFoods } from '../../constants'

export function Cart() {
  const [paymentToggled, setPaymentToggled] = useState('pix')
  const [paymentStatus, setPaymentStatus] = useState('')

  function changePaymentStatus() {
    setPaymentStatus('approved')
  }

  function handlePayment() {
    setPaymentStatus('confirming')
    setPaymentToggled('')
    setTimeout(changePaymentStatus, 1000)
  }

  let totalPrice = (exampleFoods.reduce(function (acc, obj) {
    return acc + obj.price
  }, 0)) / 100

  let formatedTotalPrice = totalPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Container>
      <Header />
      <div className='mx-auto mt-6 flex-1'> 
        <Section>
          <OrderList className=''>
            <h2 className='font-poppins font-medium text-3xl lg:text-4xl mb-8'>
              Meu pedido
            </h2>

            <div className='h-[450px] pt-4 overflow-auto w-full pr-4'>

              {exampleFoods.map((food, i) => (
                <OrderCard
                  key={`${food}-${i}`}
                  className='flex items-center justify-between'
                >
                  <img
                    className='w-20'
                    src={food.image}
                    alt="Torradas de Parma"
                  />

                  <div className='w-full'>
                    <div className='w-full flex items-center justify-between gap-3'>
                      <div className='flex items-center justify-center gap-3'>
                        <span className='tracking-[3px] font-poppins font-medium text-lg lg:text-xl'>1x</span>
                        <span className='font-poppins font-medium text-lg lg:text-xl w-[100px] sm:w-full'>{food.title}</span>
                      </div>
                      <span className='font-roboto sm:text-base text-gray_200'>R$ {food.price / 100}</span>
                    </div>

                    <button className='text-red_100 font-roboto text-lg mt-2'>
                      Excluir
                    </button>
                  </div>

                  {/* <div className='border w-full'>
                    <div className='flex gap-3 items-center px-8'>
                      <p className='font-poppins font-medium text-lg lg:text-xl'>
                        1 x {food.title}
                      </p>

                      <span className='font-roboto border sm:text-base text-gray_200'>
                        R$ {food.price / 100}
                      </span>
                    </div>

                    <button className='text-red_100 font-roboto text-lg mt-2'>
                      Excluir
                    </button>
                  </div> */}

                </OrderCard>
              ))}

            </div>

            <h3 className='font-poppins font-medium text-3xl lg:text-4xl relative mt-10 lg:mt-20'>
              Total: {formatedTotalPrice}
            </h3>
          </OrderList>

          <Payment>
            <h2 className='font-poppins font-medium text-3xl lg:text-4xl mb-8'>
              Pagamento
            </h2>

            <PaymentSession className={`mb-10 lg:mb-auto ${paymentToggled == 'pix' ? 'rounded-tl-xl' : 'rounded-tr-xl'} ${paymentStatus == 'confirming' || paymentStatus == 'approved' ? 'rounded-t-xl' : ''}`}>
              <div className='flex'>
                <PaymentMethod
                  className={`${paymentToggled == 'pix' ? 'bg-background_700 rounded-tl-xl' : ''} ${paymentStatus == 'confirming' || paymentStatus == 'approved' ? 'bg-background_900 rounded-tl-xl disabled' : ''}`}
                  disabled={paymentStatus == 'confirming' || paymentStatus == 'approved'}
                  onClick={() => setPaymentToggled('pix')}
                >
                  <img
                    src={pix}
                    alt="pix"
                  />
                  PIX
                </PaymentMethod>

                <PaymentMethod
                  className={`${paymentToggled == 'credit' ? 'bg-background_700 rounded-tr-xl' : ''} ${paymentStatus == 'confirming' || paymentStatus == 'approved' ? 'bg-background_900 rounded-tr-xl disabled' : ''}`}
                  disabled={paymentStatus == 'confirming' || paymentStatus == 'approved'}
                  onClick={() => setPaymentToggled('credit')}
                >
                  <FiCreditCard
                    size={24}
                  />
                  Crédito
                </PaymentMethod>
              </div>

              {
                paymentToggled == 'pix' ?
                  <div className='flex flex-col items-center mt-2'>
                    <img
                      src={qrcode}
                      alt="qr code"
                      className='w-52 lg:w-full'
                    />
                    <Button
                      title='Simular pagamento'
                      icon={''}
                      className={'w-full mt-[100px] lg:mt-8'}
                      iconClassName={''}
                      onClick={handlePayment}
                    />
                  </div>
                  :
                  paymentToggled == 'credit' ?
                    <Form>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <Input
                        className=''

                        type='number'
                        name='cardNumber'
                        placeholder='0000 0000 0000 0000'
                      />

                      <div className='flex flex-col sm:flex-row sm:gap-4 mt-4 mb-10 sm:mt-9 sm:mb-14'>
                        <div className='flex flex-col mb-4'>
                          <label htmlFor="expirationDate">Data de Validade</label>
                          <Input
                            className='w-[50%] sm:w-full'
                            type='date'
                            name='expirationDate'
                            placeholder='04/25'
                          />
                        </div>

                        <div className='flex flex-col sm:mb-4'>
                          <label htmlFor="cvc">CVC</label>
                          <Input
                            className='w-[50%] sm:w-full'
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
                        onClick={handlePayment}
                      />
                    </Form>
                    :
                    paymentStatus == 'confirming' ?
                      <PaymentStatus className='text-yellow-500'>
                        <BiTime
                          size={104}
                        />
                        Aguardando pagamento <br /> no caixa
                      </PaymentStatus>
                      :
                      <PaymentStatus className='text-green-500'>
                        <BiCheckCircle
                          size={104}
                        />
                        Pagamento aprovado!
                      </PaymentStatus>
              }

            </PaymentSession>
          </Payment>
        </Section>
      </div>
      <Footer />
    </Container>
  )
}


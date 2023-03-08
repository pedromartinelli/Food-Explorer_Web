import { useEffect, useState } from 'react'

import exampleFood from '../../assets/exampleFood.png'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'

import { Link } from 'react-router-dom'
import { FiCreditCard, } from 'react-icons/fi'
import { BiTime, BiCheckCircle } from 'react-icons/bi'

import { Circle, CaretDown, CaretUp } from 'phosphor-react'

import { orders } from '../../constants'

import circle from '../../assets/circle.svg'

import { Container, Section, OrderList, Payment, OrderCard, PaymentMethod, Form, Input, PaymentSession, PaymentStatus } from './styles'

import { Header, Footer, Button } from '../../components'

type OrderProps = {
  id: number;
  status: string;
  total_price: string;
  date: string;
}

export function Orders() {
  const [paymentToggled, setPaymentToggled] = useState('pix')
  const [paymentStatus, setPaymentStatus] = useState('')
  const [dropdownState, setDropdownState] = useState(new Map<number, boolean>());

  function changePaymentStatus() {
    setPaymentStatus('approved')
  }

  function handlePayment() {
    setPaymentStatus('confirming')
    setPaymentToggled('')
    setTimeout(changePaymentStatus, 1000)
  }

  // let totalPrice = (exampleFoods.reduce(function (acc, obj) {
  //   return acc + obj.price
  // }, 0)) / 100

  // let formatedTotalPrice = totalPrice.toLocaleString('pt-br', {
  //   style: 'currency',
  //   currency: 'BRL',
  // })

  const handleDropdownClick = (id: number) => {
    const isOpen = dropdownState.get(id) || false;
    setDropdownState(new Map(dropdownState.set(id, !isOpen)));
  };

  return (
    <Container>
      <Header />
      <div className='mx-auto mt-6 mb-2 lg:mb-10'>
        <Section className=''>
          <h1 className='font-poppins font-medium text-3xl lg:text-4xl mb-4 lg:mb-8 text-white'>
            Pedidos
          </h1>

          <div className='font-poppins overflow-auto h-[550px] lg:h-[630px]'>
            {orders.map((order, i) => (
              <div
                key={`${order}-${i}`}
                className='mt-5 mb-10 pr-2'
              >
                <div className='border-gray_300 px-4 pt-4 pb-2 mt-4 bg-background_700 shadow-order rounded-lg'>

                  <div className='flex justify-between'>
                    <div className='flex flex-col sm:flex-row gap-1 sm:gap-4'>
                      <span className='flex items-center gap-2 '><div className='bg-[#AB222E] rounded-full w-2 h-2' />{order.status}</span>
                      <span className='flex items-center gap-2 '><div className='bg-gray_300 rounded-full w-1 h-1' />Nº 0000000{order.id}</span>
                    </div>

                    <span className='text-sm text-gray_200'>{order.date}</span>
                  </div>

                  <hr className='w-[75%] m-auto my-4 border-gray_300 ' />

                  <button
                    className='ml-[50%] hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
                    // onClick={() => setOrderDetailsIsOpen((prev) => !prev)}
                    onClick={() => handleDropdownClick(order.id)}
                  >
                    {
                      dropdownState.get(order.id) ?
                        <CaretUp
                          className=''
                          color='#7C7C8A'
                          size={30}
                        />
                        :
                        <CaretDown
                          className=''
                          color='#7C7C8A'
                          size={30}
                        />
                    }
                  </button>

                  <div className={`${dropdownState.get(order.id) ? 'flex' : 'hidden'} flex-col text-gray_200 text-sm gap-2 `}>
                    <span>1 x Salada Radish</span>
                    <span>1 x Torradas de Parma</span>
                    <span>1 x Chá de Canela</span>
                    <span>1 x Suco de Maracujá</span>
                    <span className='font-poppins font-medium text-xl lg:text-3xl relative mt-2 '>Total: R$ 159,00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </Section>

      </div>
      <Footer />
    </Container>
  )
}


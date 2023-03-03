import { useEffect, useState } from 'react'

import exampleFood from '../../assets/exampleFood.png'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'

import { Link } from 'react-router-dom'
import { FiCreditCard, } from 'react-icons/fi'
import { BiTime, BiCheckCircle } from 'react-icons/bi'

import { Circle } from 'phosphor-react'

import circle from '../../assets/circle.svg'

import { Container, Section, OrderList, Payment, OrderCard, PaymentMethod, Form, Input, PaymentSession, PaymentStatus } from './styles'

import { Header, Footer, Button } from '../../components'

import { order_enrollment } from '../../constants'

export function Orders() {
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

  // let totalPrice = (exampleFoods.reduce(function (acc, obj) {
  //   return acc + obj.price
  // }, 0)) / 100

  // let formatedTotalPrice = totalPrice.toLocaleString('pt-br', {
  //   style: 'currency',
  //   currency: 'BRL',
  // })

  return (
    <Container>
      <Header />
      <div className='mx-auto mt-6 flex-1 mb-10'>
        <Section className=''>
          <h1 className='font-poppins font-medium text-3xl lg:text-4xl mb-8 text-white'>
            Pedidos
          </h1>

          <div className='font-poppins'>
            
            <div className='mt-5'>
              <span className='text-sm text-gray_200'>Sex 24 fevereiro 2023</span>
              <div className='border-gray_300  pl-4 py-4 mt-4 bg-background_700 shadow-order'>
                <span className='flex items-center gap-2 mb-1'><div className='bg-[#AB222E] rounded-full w-2 h-2' /> Pendente <div className='bg-gray_300 rounded-full w-1 h-1' />Nº 00000001</span>

                <hr className='w-[75%] m-auto my-4 border-gray_300' />

                <div className='flex flex-col text-gray_200 text-sm gap-2'>
                  <span>1 x Salada Radish</span>
                  <span>1 x Torradas de Parma</span>
                  <span>1 x Chá de Canela</span>
                  <span>1 x Suco de Maracujá</span>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <span className='text-sm text-gray_200'>Sex 24 fevereiro 2023</span>
              <div className='border-gray_300  pl-4 py-4 mt-4 bg-background_700 shadow-order'>
                <span className='flex items-center gap-2 mb-1'><div className='bg-[#AB222E] rounded-full w-2 h-2' /> Pendente <div className='bg-gray_300 rounded-full w-1 h-1' />Nº 00000001</span>

                <hr className='w-[75%] m-auto my-4 border-gray_300' />

                <div className='flex flex-col text-gray_200 text-sm gap-2'>
                  <span>1 x Salada Radish</span>
                  <span>1 x Torradas de Parma</span>
                  <span>1 x Chá de Canela</span>
                  <span>1 x Suco de Maracujá</span>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <span className='text-sm text-gray_200'>Sex 24 fevereiro 2023</span>
              <div className='border-gray_300  pl-4 py-4 mt-4 bg-background_700 shadow-order'>
                <span className='flex items-center gap-2 mb-1'><div className='bg-[#AB222E] rounded-full w-2 h-2' /> Pendente <div className='bg-gray_300 rounded-full w-1 h-1' />Nº 00000001</span>

                <hr className='w-[75%] m-auto my-4 border-gray_300' />

                <div className='flex flex-col text-gray_200 text-sm gap-2'>
                  <span>1 x Salada Radish</span>
                  <span>1 x Torradas de Parma</span>
                  <span>1 x Chá de Canela</span>
                  <span>1 x Suco de Maracujá</span>
                </div>
              </div>
            </div>
          
          </div>
        </Section>

      </div>
      <Footer/>
    </Container>
  )
}


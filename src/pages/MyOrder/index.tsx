import logoImage from '../../assets/logo.svg'
import homeImg from '../../assets/homeImg.svg'
import exampleFood from '../../assets/exampleFood.png'
import alface from '../../assets/alface.svg'
import tomate from '../../assets/tomate.svg'

import { Link } from 'react-router-dom'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowDropLeftLine } from 'react-icons/ri'

import { Container, Section, OrderList, Payment } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { NavButton } from '../../components/NavButton'

export function MyOrder() {
  return (
    <Container>
      <Header />
      <div className='w-[1120px] ml-auto mr-auto mt-6 pr-10'>
        <Section>
          <OrderList>
            <h2>Meu pedido</h2>

            
          </OrderList>
        </Section>
      </div>
      <Footer />
    </Container>
  )
}


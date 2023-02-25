import { navMenu } from '../../constants';
import signOut from '../../assets/signOut.svg';

import logo from '../../assets/logo.svg'
import smallLogo from '../../assets/smallLogo.svg'
import { GoSearch, GoSignOut, GoThreeBars, GoX, GoStar } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";

import { Button } from "../Button";
import { Container, Input, InputContainer, Menu } from "./styles";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMailVolumeFill } from 'react-icons/ri';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  navMenu.map((menu) => {
    console.log(menu)
  })

  return (
    <Container>
      <div className='flex xl:hidden justify-between items-center'>
        <Link
          className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          to={'/'}
        >
          <img
            className='w-8 flex md:hidden'
            src={smallLogo}
            alt="food explorer"
          />
          <img
            className='w-44 hidden md:flex'
            src={logo}
            alt="food explorer"
          />
        </Link>

        <InputContainer>
          <GoSearch
            className='absolute ml-4 z-10'
            color='#7C7C8A'
            size={22}
          />
          <Input
            className='flex lg:hidden'
            type="text"
            name='Buscar pelo prato'
            placeholder='Busque pelos pratos'
          />
          <Input
            className='hidden lg:flex'
            type="text"
            name='Buscar pelo prato'
            placeholder='Busque pelas opções de pratos'
          />
        </InputContainer>

        <button
          className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {
            isMenuOpen ?
              <GoX
                className=''
                color='#7C7C8A'
                size={30}
              />
              :
              <GoThreeBars
                className=''
                color='#7C7C8A'
                size={30}
              />
          }
        </button>

        <Menu className={`${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul>
            {navMenu.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal flex gap-3 text-white text-base ${i === navMenu.length - 1 ? 'mb-0' : 'mb-4'} hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300`}
              >
                <Link to={'/myorder'} className='text-gray_200'>
                  {nav.title}
                </Link>

                <img
                  className={`w-5 stroke-[#7C7C8A] ${i === navMenu.length - 1 ? 'flex' : 'hidden'}`}
                  style={{
                    stroke: '#7C7C8A'
                  }}
                  src={nav.icon}
                  alt={nav.title}
                />
              </li>
            ))}

          </ul>
        </Menu>
      </div>

      <div className='lg:w-[1120px] hidden xl:flex justify-between items-center'>
        <Link to={'/'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
          <img
            className='w-56'
            src={logo}
            alt="food explorer"
          />
        </Link>

        <Link to={''}>
          <button className='text-white hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
            Meus favoritos
          </button>
        </Link>

        <InputContainer>
          <GoSearch
            className='absolute ml-4 z-10'
            color='#7C7C8A'
            size={22}
          />
          <Input
            type="text"
            name='Buscar pelo prato'
            placeholder='Busque pelas opções de pratos'
          />
        </InputContainer>

        <Link to={'/myorder'}>
          <Button
            className={'w-24 h-12 text-xs lg:text-base lg:w-56'}
            iconClassName={'hidden lg:flex'}
            title='Meu pedido'
            icon={BiFoodMenu}
          />
        </Link>

        <GoSignOut
          className='cursor-pointer hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'
          color='#FFF'
          size={25}
        />
      </div>
    </Container >
  );
}

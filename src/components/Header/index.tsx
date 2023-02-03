import logoImage from '../../assets/logo.svg'
import { GoSearch, GoSignOut } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";

import { Button } from "../Button";
import { Container, Input, InputContainer } from "./styles";
import { Link } from 'react-router-dom';
export function Header() {

  return (
    <Container>
      <Link to={'/'} className='hover:opacity-80 hover:scale-105 focus:opacity-80 focus:scale-105 ease-in-out duration-300'>
        <img
          className='w-56'
          src={logoImage}
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
        <Button title='Meu pedido' icon={BiFoodMenu} width={'200px'} />
      </Link>

      <GoSignOut
        color='#FFF'
        size={25}
      />
    </Container>
  );
}

import FooterLogo from '../../assets/footerLogo.svg'
import { GoSearch, GoSignOut } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";

import { Button } from "../Button";
import { Container } from "./styles";
export function Footer() {

  return (
    <Container>
      <div className='flex w-[1120px] justify-between items-center '>
        <img
          src={FooterLogo}
          alt="food explorer"
        />

        <p className='text-white font-DMSans text-sm'>
          &copy; 2022 - Todos os direitos reservados.
        </p>

      </div>
    </Container>
  );
}

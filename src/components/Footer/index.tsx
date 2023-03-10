import FooterLogo from '../../assets/footerLogo.svg'

import { Container } from "./styles";

interface FooterProps {
  className?: any;

}

export function Footer({className}: FooterProps) {
  return (
    <Container className={`${className}`}>
      <div className='flex flex-col gap-8 sm:flex-row w-[1120px] justify-between items-center '>
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

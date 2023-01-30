import { Container } from "./styles";

interface BProps {
  title: string
}

export function NavButton({ title }: BProps) {
  return(
    <Container>
      <p
        className='lg:px-1'
      >{title}</p>
    </Container>
  );
}
import { Container } from './styles'

interface ButtonProps {
  title: string;
  $large: boolean;
}

export function Button({ title, $large }: ButtonProps) {
  
  return (
    <Container className={`${$large ? 'w-auto' : 'w-24'}`}>
      {title}
    </Container>
  );
}
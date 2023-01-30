import { Container } from "./styles";

interface BProps {
  title: string;
  to: string;
}

export function NavButton({ title, to }: BProps, { ...rest }) {
  return (
    <Container to={to} {...rest}>
      <p
        className=' sm:py-0 sm:px-5'
      >{title}</p>
    </Container>
  );
}
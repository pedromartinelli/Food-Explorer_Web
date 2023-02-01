import { Container } from "./styles";

interface BProps {
  title: string;
  to: string;
}

export function NavButton({ title, to }: BProps, { ...rest }) {
  return (
    <Container to={to} {...rest}>
      <p>
        {title}
      </p>
    </Container>
  );
}
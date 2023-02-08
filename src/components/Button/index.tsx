import React from 'react';

import { PropsWithChildren } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles'

interface ButtonProps {
  title: string;
  icon: any;
  className: any;
  iconClassName: any;
}

export function Button({ title, icon: Icon, className, iconClassName }: ButtonProps) {


  return (
    <Container
      className={`${className}`}
      type='button'
    >
      {Icon && <Icon className={`${iconClassName}`} size={25} />}
      {title}
    </Container>
  );
}

import React from 'react';

import { PropsWithChildren } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles'

interface ButtonProps {
  title: string;
  icon: any;
  width: string;
}

export function Button({ title, icon: Icon, width }: ButtonProps) {

  return (
    <Container
      // className={`${$large ? 'w-auto' : 'w-24'}`}
      className={`w-[${width}]`}
      type='button'
    >
      {Icon && <Icon size={25} />}
      {title}
    </Container>
  );
}

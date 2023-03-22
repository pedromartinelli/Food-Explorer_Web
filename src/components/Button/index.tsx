import React, { MouseEventHandler } from 'react';

import { PropsWithChildren } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles'

interface ButtonProps {
  title?: string;
  icon?: any;
  className?: any;
  iconClassName?: any;
  onClick?: MouseEventHandler;
}

export function Button({ title, icon: Icon, className, iconClassName, onClick, ...rest }: ButtonProps) {

  return (
    <Container
      className={`${className}`}
      type='submit'
      onClick={onClick}
    >
      {Icon && <Icon className={`${iconClassName}`} size={25} />}
      {title}
    </Container>
  );
}

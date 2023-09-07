import cn from 'classnames';
import type { FC, JSX } from 'react';

import styles from './NavigationButton.module.scss';

interface Props {
  className?: string;
  children: JSX.Element;
  value: string | number;
}

export const NavigationButton: FC<Props> = ({ className, children, value, ...restProps }) => (
  <button {...restProps} className={cn(styles.container, className)}>
    {' '}
    {value}
    {children}
  </button>
);

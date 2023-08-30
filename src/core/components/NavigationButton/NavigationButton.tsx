import cn from 'classnames';
import type { FC, JSX } from 'react';

import styles from './NavigationButton.module.scss';

interface Props {
  className?: string;
  children: JSX.Element | string;
}

export const NavigationButton: FC<Props> = ({ className, children, ...restProps }) => (
  <button {...restProps} className={cn(styles.container, className)}>
    {children}
  </button>
);


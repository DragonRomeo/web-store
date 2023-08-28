import cn from 'classnames';
import styles from './NavigationButton.module.scss';


const NavigationButton = ({
                              className,
                              children,
                              ...restProps
                         }) => {
    return (
        <button {...restProps} className={cn(styles.container, className)}>{children}</button>
    );
}

export default NavigationButton;
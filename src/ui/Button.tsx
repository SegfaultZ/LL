import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
    label: ReactNode
    size?: 'sm' | 'md' | 'lg'
    color?: 'danger' | 'primary' | 'secondary'
    variant?: 'normal' | 'link' | 'icon'
    disabled?: boolean
    loading?: boolean
    showIcon?: boolean
    onClick(): void
}

const Button: FC<Props> = ({
    label,
    size = 'md',
    color = 'primary',
    variant = 'normal',
    disabled = false,
    loading = false,
    onClick,
}) => {
    const handleClick = () => {
        if (!loading && !disabled) {
            onClick()
        }
    }

    return (
        <button
            className={
                cx(
                    { 'material-icons': variant === 'icon' },
                    { [styles.link]: variant === 'link'},
                    styles.button,
                    styles[color],
                    styles[size],
                    { [styles.disabled]: disabled || loading },
                )
            }
            onClick={handleClick}
        >
            {loading ? 'Loading...' : label}
        </button>
    )
}

export default Button

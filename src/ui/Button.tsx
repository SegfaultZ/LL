import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
    label: ReactNode
    size?: 'sm' | 'md' | 'lg'
    variant?: 'danger' | 'primary' | 'secondary'
    disabled?: boolean
    loading?: boolean
    showIcon?: boolean
    onClick(): void
}

const Button: FC<Props> = ({
    label,
    size = 'md',
    variant = 'primary',
    disabled = false,
    loading = false,
    showIcon = false,
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
                    { 'material-icons': showIcon },
                    styles.button,
                    styles[variant],
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

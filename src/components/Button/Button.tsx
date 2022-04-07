import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (
    {
        red, className, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${disabled ? s.disabled : s.default} ${className} ${s.button}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default Button

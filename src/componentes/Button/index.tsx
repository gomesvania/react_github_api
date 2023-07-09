import { ComponentType, ReactNode } from "react";
import '../Button/index.css';

type ButtonProps = {
    children: ReactNode
    color?: 'blue' | 'red' | 'default'
    icon?: ComponentType<{ size?: number }>
}

export function Button(props: ButtonProps) {
    let classes = 'button'

    if (props.color === 'red') {
        classes += 'red'
    }

    if (props.color === 'red') {
        classes += 'blue'
    }

    return (
        <button
            className={classes}
        >
            {props.children}
        </button>
    )
}
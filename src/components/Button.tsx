import React from "react"
interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    id?: string;
    children: any;
}

const Button: React.FC<ButtonProps> = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className={'rounded-lg p-3 px-10 text-white text-2xl bg-c-yellow font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'}>
            {children}
        </button>
    )
}

export default Button;
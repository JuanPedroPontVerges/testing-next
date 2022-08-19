import React from "react"

interface InputPropsInterface {
    placeholder?: string;
    type?: string;
}

const Input: React.FC<InputPropsInterface> = ({placeholder, type}) => {
    return (
        <input type={type} placeholder={placeholder} className={'placeholder:text-rounded-lg p-2.5 text-white text-base border-[2px] rounded-[10px] border-[#828384] bg-[#f8fafc] font-light w-full'} />
    )
}

export default Input;
import React from "react"
const Button: React.FC<{ children: any }> = (props) => {
    return (
        <button className={'rounded-lg p-3 px-10 text-white text-2xl bg-[#F88600] font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'}>
            {props.children}
        </button>
    )
}

export default Button;
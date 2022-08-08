import React from "react"
const Button: React.FC<{ children: any }> = (props) => {
    return (
        <button className={'rounded-lg p-4 px-10 text-white text-2xl bg-[#F88600] font-bold'}>
            {props.children}
        </button>
    )
}

export default Button;
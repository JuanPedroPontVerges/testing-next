import React from "react"

interface TextAreaPropsInterface {
    placeholder?: string;
    rows?: number;
    cols?: number
}

const TextArea: React.FC<TextAreaPropsInterface> = ({ placeholder, rows, cols }) => {
    return (
        <textarea rows={rows} cols={cols} placeholder={placeholder} className={'placeholder:text-rounded-lg p-2.5 text-white text-base border-[2px] rounded-[10px] border-[#828384] bg-[#f8fafc] font-light w-full'} />
    )
}

export default TextArea;
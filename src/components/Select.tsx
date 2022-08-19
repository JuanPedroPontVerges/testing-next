import React from "react"

interface SelectPropsInterface {
    options?: { label: string; value: string | number }[];
}

const Select: React.FC<SelectPropsInterface> = ({ options }) => {
    return (
        <select className={'p-2.5 text-white text-base border-[2px] rounded-[30px] border-[#828384] bg-[#343434] font-light w-full'}>
            {options?.map(({ label, value }, index) => (
                <option value={value} key={index}>{label}</option>
            ))}
        </select>
    )
}

export default Select;
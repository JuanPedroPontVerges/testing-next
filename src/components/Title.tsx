import React from "react"
interface TitleComponentProps {
    title: string;
    color: string;
    className?: string;
}
const Title: React.FC<TitleComponentProps> = ({ title, color, className }) => {
    return (
        <h3 className={`font-semibold text-[${color}] text-6xl font-extrabold ${className}`}>{title}</h3>
    )
}

export default Title;
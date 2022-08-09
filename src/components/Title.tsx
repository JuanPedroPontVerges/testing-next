import React from "react"
interface TitleComponentProps {
    children: any;
    color: string;
    className?: string;
}
const Title: React.FC<TitleComponentProps> = ({ color, className, children }) => {
    return (
        <h3 className={`font-semibold text-[${color}] text-6xl font-black ${className}`}>{children}</h3>
    )
}

export default Title;
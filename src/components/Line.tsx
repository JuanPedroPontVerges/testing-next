import React from "react"
interface LineComponentProps {
    className?: string;
}
const Line: React.FC<LineComponentProps> = ({ className }) => {
    return (
        <div className={`${className}`} />
    )
}

export default Line;
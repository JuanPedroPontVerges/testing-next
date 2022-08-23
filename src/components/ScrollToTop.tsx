import React from "react"
const ScrollToTop: React.FC<{}> = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className={'px-20'}>
            <div className={'grid justify-items-end'}>
                <button onClick={scrollToTop} className={' h-16 w-16 text-white bg-[#2E2E2E] rounded-t-lg pb-0'}>
                    Subir
                </button>
            </div>
        </div>
    )
}

export default ScrollToTop;
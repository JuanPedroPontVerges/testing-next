import React from "react"
interface CarrouselProps {
    className?: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ className }) => {
    return (
        <div className={`carrousel ${className}`}>
            <div className={'flex flex-col p-6'}>
                <div>
                    <h3 className={'font-regular text-4xl text-center text-[#343252]'}>Algunos de nuestros <strong className='font-black'>clientes</strong></h3>
                </div>
            </div>
            <div className="items">
                <div className={'p-9 text-center bg-white rounded text-black snap-start w-64'}>
                    Tal cual
                </div>
                <div className={'p-9 text-center bg-white rounded text-black snap-start w-64'}>
                    Tal cual
                </div>
                <div className={'p-9 text-center bg-white rounded text-black snap-start w-64'}>
                    Tal cual
                </div>
                <div className={'p-9 text-center bg-white rounded text-black snap-start w-64'}>
                    Tal cual
                </div>
            </div>
        </div>
    )
}

export default Carrousel;
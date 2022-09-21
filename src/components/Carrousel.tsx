import next from 'next';
import { useState, useRef, useEffect } from 'react';
import Antares from 'public/assets/customers/antares.jpg';
import Image from 'next/image';

const Carousel: React.FC<{ title?: string }> = ({ title }) => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<any>(null);

    const customers = [
        {
            id: 1,
            title: 'Tal cual',
        },
        {
            id: 2,
            title: 'Tal cual',
        },
        {
            id: 3,
            title: 'Tal cual',
        },
        {
            id: 4,
            title: 'Tal cual',
        },
    ]

    // const movePrev = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex((prevState) => prevState - 1);
    //     }
    // };

    const moveNext = () => {
        setCurrentIndex((prevState) => prevState + 1);
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = (carousel.current.offsetWidth * currentIndex) / 2;
        }
    }, [currentIndex]);

    return (
        <div>
            {/* <button onClick={moveNext} className={'p-8 bg-red-100'}>Next</button> */}
            <h2 className="text-4xl font-semibold mb-12 pt-4 text-c-blue text-center">
                {title}
            </h2>
            <div
                ref={carousel}
                className="carousel-container flex gap-1 overflow-auto scroll-smooth snap-x snap-mandatory z-0 pointer-events-none"
            >
                {customers.map(({ id, title }, index) => {
                    return (
                        <div
                            key={index}
                            className="carousel-item text-center flex w-48 h-48 snap-start border-4"
                        >
                            <a
                                // href={resource.link}
                                className="h-full w-full flex items-center justify-center aspect-square bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 text-white"
                            >
                                <Image src={Antares} alt={'Logo de Antares'} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;

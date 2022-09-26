import next from 'next';
import { useState, useRef, useEffect } from 'react';
import Antares from 'public/assets/customers/antares.jpg';
import Image from 'next/image';

const images = [
    { src: Antares, alt: 'Logo de Antares' },
    { src: Antares, alt: 'Logo de Antares' },
    { src: Antares, alt: 'Logo de Antares' },
    { src: Antares, alt: 'Logo de Antares' },
    { src: Antares, alt: 'Logo de Antares' }];
const delay = 1500;

const Carousel: React.FC<{ title?: string }> = ({ title }) => {
    const timeoutRef = useRef<any>(null);
    const [index, setIndex] = useState(0);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const slowdownFirstAndLastImage = (index: number, delay: number) => {
        return index + 1 === images.length || index === 0 ? delay + 1000 : delay
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            slowdownFirstAndLastImage(index, delay)
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="max-w-80 overflow-hidden mx-auto">
            <div
                className="transition-all ease-in duration-1000 whitespace-nowrap text-center"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map(({ src, alt }, index) => (
                    <div
                        className="w-80 inline-block drop-shadow-2xl"
                        key={index}
                    >
                        <Image src={src} alt={alt} className={'rounded-lg'} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

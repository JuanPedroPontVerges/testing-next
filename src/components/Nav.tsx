import Link from 'next/link';
import { useState } from 'react';
import LogoCacaoHorizontal from 'public/assets/logo-cacao-horizontal.svg';
import LogoCacaoVertical from 'public/assets/logo-cacao-vertical.png';
import Image from 'next/image';

const Nav: React.FC<{}> = ({ }) => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-c-blue shadow mb-[-1px] fixed z-10">
            <div className="md:flex justify-between md:items-center lg:max-w-7xl px-4 mx-auto">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div>
                            <a href="#" className="md:hidden">
                                <Image src={LogoCacaoVertical} alt={'Logo Cacao'} />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="hidden md:block">
                                <Image src={LogoCacaoHorizontal} alt={'Logo Cacao'} />
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-2xl md:text-base">
                            <li className="text-white">
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="/about-us">
                                    <a>Sobre Nosotros</a>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="/">
                                    <a>Contacto</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

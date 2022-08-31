import Image from "next/image";
import React from "react"
import LogoCacao from 'public/logo-cacao.png'
import LogoFooter from 'public/logo.png'
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import Nav from '@/components/Nav';

const Layout: React.FC<any> = (props) => {
    return (
        <div className="h-screen w-[100vh] md:w-full">
            {/* Mobile nav */}
            <Nav mobile />
            {/* Desktop nav */}
            <Nav />
            <main className="w-full">
                <div className="py-12 md:py-0" />
                {props.children}
            </main>
            <ScrollToTop />
            <footer className="p-6 md:p-4 bg-[#F1F1F1] text-black w-full">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://cacao.to/" className="flex items-center">
                            <Image src={LogoFooter} width={119} height={83} alt={'Logo footer'} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Servicios</h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Encuestas</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Whatsapp</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="https://github.com/JuanPedroPontVerges" className="hover:underline ">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Cacao™</a>. Derechos reservados.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
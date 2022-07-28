import Image from "next/image";
import React from "react"
import LogoCacao from 'public/logo-cacao.png'
import LogoFooter from 'public/logo.png'

const Layout: React.FC<any> = (props) => {
    return (
        <div className="h-screen w-screen">
            <nav className={"flex flex-row justify-between items-center w-screen px-4 shadow-xl"}>
                <div>
                    <Image src={LogoCacao} alt='Cacao' width={200} height={140} />
                </div>
                <div className="flex flex-row list-none gap-20 pr-20">
                    <li>Inicio</li>
                    <li>Sobre Nosotros</li>
                    <li>Contacto</li>
                </div>
            </nav>
            <main>
                {props.children}
            </main>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 w-full bottom-0 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://cacao.to/" className="flex items-center">
                            <Image src={LogoFooter} width={119} height={83} alt={'Logo footer'} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Servicios</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Encuestas</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Whatsapp</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/JuanPedroPontVerges" className="hover:underline ">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
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
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Cacao™</a>. Derechos reservados.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
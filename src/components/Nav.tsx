import React from "react"
import LogoCacao from 'public/logo-cacao.svg'
import Image from "next/image";
import Link from "next/link";
interface NavComponentProps {
    mobile?: boolean;
}
const Nav: React.FC<NavComponentProps> = ({ mobile }) => {
    return (
        mobile ? (
            <nav className={"md:hidden w-full flex flex-row justify-between items-center px-4 drop-shadow-2xl fixed top-0 z-50 bg-[#27253B]"} >
                <div>
                    <Image src={LogoCacao} alt='Cacao' />
                </div>
                <div className="space-y-2">
                    <div className="w-14 h-2 bg-white rounded-md" />
                    <div className="w-14 h-2 bg-white rounded-md" />
                    <div className="w-14 h-2 bg-white rounded-md" />
                </div>
            </nav >
        ) : (
            <nav className={"hidden md:flex flex-row justify-between items-center p-4 shadow-xl bg-c-blue"}>
                <div>
                    <Image src={LogoCacao} alt='Cacao' />
                </div>
                <div className="flex flex-row list-none gap-8 text-xl font-medium">
                    <Link href="/">
                        <li className="cursor-pointer">Inicio</li>
                    </Link>
                    <Link href={"/about-us"}>
                        <li className="cursor-pointer">Sobre Nosotros</li>
                    </Link>
                    <Link href={"contact"}>
                        <li className="cursor-pointer">Contacto</li>
                    </Link>
                </div>
            </nav>
        )

    )
}

export default Nav;
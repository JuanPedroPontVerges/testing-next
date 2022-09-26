import React from "react"
import Image from "next/image";
import LogoFooter from 'public/assets/logo-cacao-vertical-grande.png'
import LogoLinkedinYellow from 'public/assets/social-media/linkedin-yellow.svg'
import LogoInstagramYellow from 'public/assets/social-media/instagram-yellow.svg'
import Link from "next/link";

const Footer: React.FC<{}> = () => {
    return (
        <footer className="p-6 bg-[#F1F1F1] text-black container mx-auto">
            <div className="flex flex-col items-center gap-y-4">
                <div>
                    <a href="https://cacao.to/">
                        <Image src={LogoFooter} alt={'Logo footer'} layout={'intrinsic'} />
                    </a>
                </div>
                <div>
                    <p className="text-sm">Tu cliente, con vos</p>
                </div>
                <div className="flex items-center">
                    <div className="mx-2">
                        <a href="https://github.com/JuanPedroPontVerges">
                            <Image src={LogoLinkedinYellow} alt={'Logo Linkedin amarrillo'} />
                        </a>
                    </div>
                    <div className="mx-2">
                        <a href="https://github.com/JuanPedroPontVerges">
                            <Image src={LogoInstagramYellow} alt={'Logo Instagra amarrillo'} />
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="text-md uppercase text-c-yellow">Servicios</h6>
                    <ul className="text-center">
                        <li className="mb-4">
                            <a href="#" className="hover:underline text-sm">Encuestas</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-sm">Whatsapp</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-md uppercase text-c-yellow">Sobre Nosotros</h6>
                    <ul className="text-center">
                        <li className="mb-4">
                            <Link href={'about-us'} className="hover:underline text-sm">
                                Sobre Cacao
                            </Link>
                        </li>
                    </ul>
                </div>
                <h6 className="text-md uppercase text-c-yellow">Legal</h6>
                <ul className="text-center">
                    <li className="mb-4">
                        <Link href="#" className="hover:underline text-sm">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline text-sm">Terms &amp; Conditions</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 lg:my-8" />
            <div className="flex items-center justify-between text-center">
                <span className="text-sm dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Cacao™</a>. Derechos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;
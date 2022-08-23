import Image, { StaticImageData } from "next/image";
import React from "react"
import Instagram from 'public/instagram.png';
import Linkedin from 'public/linkedin.png';
import LinkedinSvg from 'public/linkedin.svg';
import Twitter from 'public/twitter.png';
import TwitterSvg from 'public/twitter.svg';
import Link from "next/link";
interface TeamMemberCardProps {
    imgUrl: StaticImageData;
    fullName: string
    role: string;
    twitterUrl?: any;
    linkedInUrl?: any;
    instagramUrl?: any;
    className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ className, imgUrl, fullName, role, twitterUrl, linkedInUrl, instagramUrl }) => {
    return (
        <div className={`rounded-[20px] drop-shadow-2xl border-black bg-white p-3 ${className}`}>
            <div className="flex flex-col items-center">
                <Image src={imgUrl} alt={'Foto de perfil'} />
                <div className={'py-1'} />
                <h3 className={'text-[#343434] font-bold text-2xl'}>{fullName}</h3>
                <h5 className={'text-[#F88600] font-bold text-xs'}>{role}</h5>
                <div className={'py-4'} />
                <div className={'flex flex-row justify-between w-25 align-middle'}>
                    {linkedInUrl ? (
                        <div>
                            <Link href={linkedInUrl}>
                                <Image src={LinkedinSvg} alt={'Logo de Linkedin'} width={27.98} height={22.37} />
                            </Link>
                        </div>
                    ) : (null)
                    }
                    {twitterUrl ? (
                        <div>
                            <Link href={twitterUrl}>
                                <Image src={TwitterSvg} alt={'Logo de Twitter'} width={27.98} height={22.37}  />
                            </Link>
                        </div>
                    ) : (
                        null
                    )
                    }
                    {instagramUrl ? (
                        <div>
                            <Link href={instagramUrl}>
                                <Image src={Instagram} alt={'Logo de Instagram'} width={27.98} height={22.37} />
                            </Link>
                        </div>
                    ) : (null)
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;
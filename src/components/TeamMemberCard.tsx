import Image, { StaticImageData } from "next/image";
import React from "react"
import Instagram from 'public/instagram.png';
import Linkedin from 'public/linkedin.png';
import Twitter from 'public/twitter.png';
import Link from "next/link";
interface TeamMemberCardProps {
    imgUrl: StaticImageData;
    fullName: string
    role: string;
    twitterUrl?: any;
    linkedInUrl?: any;
    instagramUrl?: any;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imgUrl, fullName, role, twitterUrl, linkedInUrl, instagramUrl }) => {
    return (
        <div className={'rounded-[20px] drop-shadow-2xl border-black'}>
            <div className="flex flex-col items-center">
                <Image src={imgUrl} alt={'Foto de perfil'} />
                <h3>{fullName}</h3>
                <h5>{role}</h5>
                <div className={'flex flex-row'}>
                    {linkedInUrl ? (
                        <Link href={linkedInUrl}>
                            <Image src={Linkedin} alt={'Logo de Linkedin'} />
                        </Link>
                    ) : (null)
                    }
                    {twitterUrl ? (
                        <Link href={twitterUrl}>
                            <Image src={Twitter} alt={'Logo de Twitter'} />
                        </Link>

                    ) : (
                        null
                    )
                    }
                    {instagramUrl ? (
                        <Link href={instagramUrl}>
                            <Image src={Instagram} alt={'Logo de Instagram'} />
                        </Link>
                    ) : (null)
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;
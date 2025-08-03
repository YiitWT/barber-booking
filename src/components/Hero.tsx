import React from 'react'
import { Button } from './Button';


export const Hero = (props: { videoSrc: string; title: string, socials: { icon: React.ReactNode, link: string }[], services: { icon: React.ReactNode, title: string }[] }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <video
                src={props.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover blur-sm opacity-65"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                <h1 className="text-7xl font-bold m-12 w-1/2 text-center">{props.title}</h1>
                <Button Text="Get Started" />
                <div className="flex m-12">
                    {props.services.map((service, index) => (
                        <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-lg px-10 py-5 m-2 rounded-lg flex flex-col items-center w-40 hover:-translate-y-1 transition-all hover:cursor-default" key={index}>
                            {service.icon}
                            <h3 className='mt-2 text-md'>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-24 left-12 transform text-white ">
                <ul className='flex space-x-4'>
                    {props.socials.map((social, index) => (
                        <li key={index} className="text-6xl">
                            <a href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ">
                                {social.icon}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="absolute bottom-24 right-12 transform text-white ">
                <h1 className='font-bold'>barberSoft<span className='text-xs font-thin align-top'>©</span> {new Date().getFullYear()}</h1>
            </div>
        </div>

    )
}

"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import WspLogo from '@/public/wsp.png';
import Link from 'next/link';

const WhatsappLive = ({ encodedMessage }) => {

    const whatsappNumber = "+5493816659628";
    const baseUrl = "https://api.whatsapp.com/send";
    let encodedMessageVariable = encodedMessage;
    const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessageVariable}&type=phone_number&app_absent=0`;

    useEffect(() =>{
        const handleScroll = () =>{
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            if(window.scrollY > 75) {
                whatsappLinkElement?.classList.add("visible");
            } else {
                whatsappLinkElement?.classList.remove("visible")
            }
        }; 

        const checkScrollVisibility = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if(scrollHeight > clientHeight) {
                handleScroll();
                window.addEventListener("scroll", handleScroll);
            } else {
                whatsappLinkElement?.classList.add("visible");
            }
        }

        checkScrollVisibility();

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])
    


    return <div>
        <Link
        className='whatsapp-link relative'
        href={whatsappLink}
        target='_blank'
        rel='nonereferrer noopener'>
            <span className='absolute left-[7px] top-[8px] -z-50 size-10'>
                <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75'></span>
            </span>
            <Image 
            src={WspLogo} 
            alt='whatsapp' 
            width={55} 
            height={55}
            className='z-60'
            />
        </Link>

    </div>;
};

export default WhatsappLive;
import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

import { t, defineMessage } from '@lingui/macro';
import { i18n, MessageDescriptor } from '@lingui/core';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';

import SideMenu from '@/components/sideMenu';
import Sidebar from '@/components/sidebar';
import { sidebarLinks } from '@/data/serviceData';
import ActiveLink from '@/components/common/activeLink/activeLink';

export default function TabSectionLayout({
    title,
    children,
    categories
}: {
    title: MessageDescriptor;
    children: ReactElement | ReactElement[];
    categories: {
        title: MessageDescriptor;
        href: string;
    }[];
}) {
    //const i18n = useLingui();
    return (
        <div>
            <div className='flex py-10'>
                <h1 className='w-full text-center text-3xl'>{i18n._(title)}</h1>
            </div>
            <div className='w-full'>
                <div className='stretch flex items-center justify-evenly'>
                    {categories.map(({ title, href }, i) => (
                        <ActiveLink
                            className='text-md flex h-full max-h-[60px] w-full items-center justify-center border-b-4 border-zinc-300/75 pt-5 pb-10 text-center font-medium tracking-normal hover:text-secondary/25 md:text-xl md:tracking-widest'
                            href={href}
                            activeClassName='border-[#de12f7] border-solid border-b-4 text-tertiary hover:text-tertiary'
                            scroll={false}
                            key={i}>
                            {i18n._(title)}
                        </ActiveLink>
                    ))}
                </div>
                <div className='pb-10'>{children}</div>
                <div
                    className='fixed bottom-0 right-0 z-10 mr-[10vw] mb-[6vh] w-fit animate-bounce rounded-full border-2 border-secondary p-1 md:hidden'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }>
                    <AiOutlineArrowUp className='h-12 w-12' />
                </div>
            </div>
        </div>
    );
}

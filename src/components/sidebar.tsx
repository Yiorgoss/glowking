import { useRef, useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { i18n, MessageDescriptor } from '@lingui/core';

import ActiveLink from '@/components/common/activeLink/activeLink';

const Sidebar = ({
    title,
    navLinks
}: {
    title: MessageDescriptor;
    navLinks: {
        title: MessageDescriptor;
        path: string;
        subPaths?: { title: MessageDescriptor; href: string }[];
    }[];
}) => {
    return (
        <div className='flex flex-col py-[50px] text-lg'>
            <h3 className='mb-5 pl-10 text-xl font-semibold '>
                {i18n._(title)}
            </h3>
            {navLinks.map((link, i) => (
                <div className='my-1 py-3 ' key={i}>
                    <ActiveLink
                        className='pl-10 text-left'
                        activeClassName='border-l-4 ml-2 border-tertiary text-tertiary'
                        href={link.path}
                        scroll={false}
                        containLevel={2}>
                        {i18n._(link.title)}
                    </ActiveLink>
                    <div className='pl-10'>
                        {link.subPaths &&
                            link.subPaths.map((subPath, index) => (
                                <div className='my-1 py-3' key={index}>
                                    <ActiveLink
                                        className='pl-10 text-left'
                                        activeClassName='border-l-4 ml-2 border-tertiary text-tertiary'
                                        href={subPath.href}
                                        scroll={false}>
                                        {i18n._(subPath.title)}
                                    </ActiveLink>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

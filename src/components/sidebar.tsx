import { useRef, useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import {i18n,MessageDescriptor} from "@lingui/core"

import ActiveLink from '@/components/common/activeLink/activeLink';

const Sidebar = ({
    title,
    navLinks
}: {
    title: MessageDescriptor;
    navLinks: { title: MessageDescriptor; path: string }[];
}) => {


    return (
        <div className="flex flex-col py-[50px]">
            <h3 className=" pl-10 mb-5 text-xl font-md">{i18n._(title)}</h3>
            {navLinks.map(({ title, path }, i) => (
                <div className="my-3" key={i}>
                    <ActiveLink
                        className="pl-10 text-left"
                        activeClassName="border-l-4 ml-2 border-tertiary text-tertiary"
                        href={path}
                        scroll={false}
                        containlevel={1}
                    >
                        {i18n._(title)}
                    </ActiveLink>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

import { ReactElement, useEffect } from 'react';
import { t } from '@lingui/macro';
import { i18n, MessageDescriptor } from '@lingui/core';

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
            <h1 className='w-full py-10 text-center text-3xl'>
                {i18n._(title)}
            </h1>
            <div className='w-full'>
                <div className='stretch flex items-center justify-evenly'>
                    {categories.map(({ title, href }, i) => (
                        <ActiveLink
                            className='flex h-full w-full items-center justify-center border-b-4 border-zinc-300/75 pt-5 pb-10 text-lg font-medium tracking-wider hover:text-secondary/25'
                            href={href}
                            activeClassName='border-tertiary border-solid border-b-6 text-tertiary hover:text-tertiary'
                            scroll={false}
                            key={i}>
                            {i18n._(title)}
                        </ActiveLink>
                    ))}
                </div>
                <div className='pb-10'>{children}</div>
            </div>
        </div>
    );
}

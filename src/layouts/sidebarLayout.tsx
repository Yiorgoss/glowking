import { ReactElement } from 'react';

import { defineMessage } from '@lingui/macro';

import Sidebar from '@/components/sidebar';
import {sidebarLinks}  from  '@/data/serviceData'

export default function ServiceLayout({
    children
}: {
    children: ReactElement | ReactElement[];
}) {

    return (
        <div className='container mt-[100px] my-10 mx-auto grid grid-cols-1 md:grid-cols-3'>
            <div className='mt-[20vh]'>
                <Sidebar title={defineMessage({id:`service-sidebar.title`, message:`Our Services`})} navLinks={sidebarLinks} />
            </div>
            <div className='order-first col-span-full md:order-last md:col-span-2'>
                {children}
            </div>
        </div>
    );
}

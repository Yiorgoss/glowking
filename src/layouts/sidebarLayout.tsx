import { ReactElement, useState } from 'react';

import { defineMessage } from '@lingui/macro';
import { AiOutlineMenu } from 'react-icons/ai';

import SideMenu from '@/components/sideMenu';
import Sidebar from '@/components/sidebar';
import { sidebarLinks } from '@/data/serviceData';

export default function ServiceLayout({
    children
}: {
    children: ReactElement | ReactElement[];
}) {
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <>
            <div className='container my-10 mx-auto mt-[100px] grid grid-cols-1 md:grid-cols-3'>
                <div className=' mt-0 md:mt-[20vh]'>
                    <div className='hidden md:block'>
                        <Sidebar
                            title={defineMessage({
                                id: `service-sidebar.title`,
                                message: `Our Services`
                            })}
                            navLinks={sidebarLinks}
                        />
                    </div>
                </div>
                <div className='col-span-full md:order-last md:col-span-2'>
                    <div
                        className='float-left my-auto mx-4 mt-10 p-1 hover:cursor-pointer md:hidden'
                        onClick={() => {
                            setActiveMenu(true);
                        }}>
                        <AiOutlineMenu className='h-12 w-12' />
                    </div>
                    {children}
                </div>
            </div>
            <SideMenu active={activeMenu} setActive={setActiveMenu}>
                <Sidebar
                    title={defineMessage({
                        id: `service-sidebar.title`,
                        message: `Our Services`
                    })}
                    navLinks={sidebarLinks}
                />
            </SideMenu>
        </>
    );
}

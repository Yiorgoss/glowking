import { ReactElement, useEffect, useState } from "react";
import { t, defineMessage } from "@lingui/macro";

import Footer from "@/components/footer";
import Header from "@/components/header";

interface HeaderLayoutProps {
    children?: ReactElement | ReactElement[];
}

//title: t({id:`llayout.home`, message:'Home'}),

const NAV_LINKS = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Services",
        path: "/services",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
];

export default function LandingLayout({ children }: HeaderLayoutProps) {
    return (
        <div className=" text-secondary">
            <Header navLinks={NAV_LINKS}/>
            <div className="-mt-[100px]">{children}</div>
            <Footer  />
        </div>
    );
}

//TODO: change add getLayout function as a property of layout and then bind statically to page component instead of as a static function on a perpage basis
//TODO: change the stackign order for header, by passing content through as props, ie enclose the content within the haeder

//export const getLayout = (page: ReactElement ) => {
//    <HeaderLayout>{page}</HeaderLayout>
//}

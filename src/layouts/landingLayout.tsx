import { ReactElement, useEffect, useState } from "react";
import { t, defineMessage } from "@lingui/macro";

import Footer from "@/components/footer";
import Header from "@/components/header";

interface HeaderLayoutProps {
    children?: ReactElement | ReactElement[];
}

//title: t({id:`llayout.home`, message:'Home'}),


export default function LandingLayout({ children }: HeaderLayoutProps) {
const NAV_LINKS = [
    {
        title: t({id:'navlinks.home',message:"Home"}),
        path: "/",
    },
    {
        title: t({id:'navlinks.services',message:"Services"}),
        path: "/services",
    },
    {
        title: t({id:'navlinks.contact',message:"Contact"}),
        path: "/contact",
    },
    {
        title: t({id:'navlinks.portfolio',message:"Portfolio"}),
        path: "/portfolio",
    },
];
    return (
        <div className="text-secondary">
            <Header navLinks={NAV_LINKS}/>
                <div className="-mt-[100px]">{children}</div>
            <Footer navLinks={NAV_LINKS}/>
        </div>
    );
}

//TODO: change add getLayout function as a property of layout and then bind statically to page component instead of as a static function on a perpage basis
//TODO: change the stackign order for header, by passing content through as props, ie enclose the content within the haeder

//export const getLayout = (page: ReactElement ) => {
//    <HeaderLayout>{page}</HeaderLayout>
//}

import Image from "next/image";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { RxCalendar, RxHamburgerMenu } from "react-icons/rx";

import { t } from "@lingui/macro";

import ActiveLink from "@components/common/activeLink/activeLink";
import { navLinkType } from "@cTypes/inputTypes";
import LangSwitcher from "@/components/langSwitcher";
import Button from "@components/common/button/button";

export default function Header({
    navLinks,
    //bgColor must be tailwind background color
    bgColor,
}: {
    navLinks: { title: string; path: string }[];
    bgColor?: string;
}): JSX.Element {
    //TODO: refactor and split code up
    //TODO: add clickListener to close on surrounding click

    const node = useRef<HTMLUListElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickOutside = (e: MouseEvent) => {
        if(node.current && node.current.contains(e.target as Node)){
            return
        }
        setIsOpen(false)
    }

    useEffect(() => {
        if(isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])
    return (
        <div className={`${bgColor ? bgColor : "bg-transparent"} `}>
            <div className=" grid h-[100px] w-full grid-flow-row-dense grid-cols-2 uppercase md:grid-cols-5">
                <div className="my-auto md:pl-10 pl-4">
                    <Link href="/">
                        <Image
                            src="/media/images/glowking_logo.png"
                            alt="glowking logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>
                <div className="md:hidden my-auto flex flex-reverse h-full mr-10 ml-auto items-center justify-center gap-8 text-center text-sm">
                    <Link
                        href="tel:6980000015"
                        className=""
                    >
                        <CgPhone className="h-10 w-10 " />
                    </Link>
                    <Link href="/contact" className="">
                        <RxCalendar className="h-10 w-10" />
                    </Link>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <RxHamburgerMenu className="h-10 w-10"/>
                    </div>
                </div>
                <div className={` mx-auto my-auto md:pb-0 text-sm font-medium text-secondary md:col-span-3 md:pt-4 md:text-base md:font-semibold ${isOpen ? "bg-slate-800/40 h-screen z-50 fixed  w-screen" : "hidden md:block"}`}  >
                    <ul className={`${isOpen ? "h-screen z-50 fixed bg-primary items-center justify-center gap-2  text-secondary text-xl font-semibold flex flex-col w-8/12" : "hidden"} md:block`} ref={node}>
                        <LangSwitcher  className="py-4"/>
                        {navLinks.map((link, i) => (
                            <li className="inline my-4" key={i} onClick={() => setIsOpen(!open)}>
                                <ActiveLink
                                    href={link.path}
                                    activeClassName="text-tertiary"
                                    className="py-6 px-2 md:px-6"

                                >
                                    {link.title}
                                </ActiveLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid-auto hidden md:block md:float-right my-auto mr-2 w-fit whitespace-nowrap md:float-none ">
                    <Button href="/contact">
                        {t({ id: "headerButton", message: "Book Now" })}
                    </Button>
                </div>
            </div>
        </div>
    );
}

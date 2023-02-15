import Link from "next/link";
import Image from "next/image";

import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { Trans } from '@lingui/macro'

import { navLinkType } from "@cTypes/inputTypes";
import Divider from "./divider";
import LangSwitcher from "@/components/langSwitcher"

interface headerProps {
    navLinks: navLinkType[];
}
export default function Header({ navLinks }: headerProps): JSX.Element {
    //TODO: refactor and split code up
    //TODO: add clickListener to close on surrounding click


    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="md:shadow-layered">
            <div className=" grid grid-cols-2 md:grid-cols-3 items-center justify-items-center">
                <div className="text-xl md:text-5xl font-bold">69 123 456 78
                    <div className="">
                        <LangSwitcher />
                    </div></div>
                <div className="py-2 pt-2 text-lg font-medium md:col-auto col-span-full"><Trans id="header_text">Needs to be translated</Trans></div>
                <div className="relative m-5 h-[150px] w-[150px] row-start-1 col-start-2 md:row-start-auto md:col-start-auto">
                    <Image
                        className="h-auto w-auto"
                        src="https://via.placeholder.com/150"
                        alt="logo"
                        fill
                    />
                </div>
                <ul className="col-span-full my-3 text-2xl">
                    <div className="py-1 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu className="mx-auto font-black text-secondary text-2xl" />
                    </div>
                    {navLinks.map((link, index) => (
                        <li className={` ${isOpen && 'hidden'} md:block rounded-md hover:-translate-y-1 transition-transform hover:shadow-inset-color md:float-left mx-3 p-3 `} key={index}>
                            <div className=" p-1 relative after:absolute after:content-['.'] after:bg-secondary after:w-0 after:transition-width after:duration-150 hover:after:w-3/4 after:h-[2px] after:m-auto after:text-transparent after:left-0 after:right-0 after:bottom-0">
                                <Link
                                    className=" relative p-2"
                                    href={link.path}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {link.title}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

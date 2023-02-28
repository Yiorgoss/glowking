import Image from "next/image";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";

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

    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className={`${bgColor ? bgColor : "bg-transparent"} `}>
            <div className=" grid h-[100px] w-full grid-flow-row-dense grid-cols-4 uppercase md:grid-cols-5">
                <div className="my-auto md:pl-10">
                    <Image
                        src="/media/images/glowking_logo.jpg"
                        alt="glowking logo"
                        width={80}
                        height={80}
                    />
                </div>
                <Link
                    href="tel:6980000013"
                    className=" col-span-2 my-auto flex h-full w-full items-center justify-center gap-2 text-center text-sm md:hidden"
                >
                    <CgPhone className="h-8 w-8 " />
                    <div className="my-auto">6980 000 015</div>
                </Link>
                <div className="col-span-full mx-auto my-auto text-sm font-medium text-secondary md:col-span-3 md:pt-4 md:text-base md:font-semibold">
                    <ul>
                        <LangSwitcher />
                        {navLinks.map((link, i) => (
                            <li className="inline px-2 md:px-6" key={i}>
                                <ActiveLink
                                    href={link.path}
                                    activeClassName="text-tertiary"
                                >
                                    {link.title}
                                </ActiveLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid-auto float-right my-auto mr-2 w-fit whitespace-nowrap md:float-none ">
                    <Button href="/contact">
                        {t({ id: "headerButton", message: "Book Now" })}
                    </Button>
                </div>
            </div>
        </div>
    );
}

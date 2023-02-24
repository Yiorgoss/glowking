import Image from "next/image";

import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
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
        <div className={`${bgColor ? bgColor : "bg-transparent"}`}>
            <div className=" grid h-[100px] grid-cols-5 uppercase">
                <div className="my-auto pl-10">
                    <Image
                        src="/images/glowking_logo.jpg"
                        alt="glowking logo"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="col-span-3 mx-auto my-auto text-base font-semibold text-secondary">
                    <ul>
                        <LangSwitcher />
                        {navLinks.map((link, i) => (
                            <li className="inline px-6" key={i}>
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
                <div className="my-auto w-fit">
                    <Button href="/contact">
                        {t({ id: "headerButton", message: "Book Now" })}
                    </Button>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
}: {
    navLinks: { title: string; path: string }[];
}): JSX.Element {
    //TODO: refactor and split code up
    //TODO: add clickListener to close on surrounding click

    const node = useRef<HTMLUListElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { asPath } = useRouter();
    const isHomePage = asPath === "/";

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current && node.current.contains(e.target as Node)) {
            return;
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return (
        <div>
            <div className=" grid h-[100px] w-full grid-flow-row-dense grid-cols-2 uppercase text-primary md:grid-cols-5">
                <div className="my-auto cursor-pointer pl-4 md:pl-10">
                    <Link href="/">
                        <Image
                            src="/media/images/glowking_logo.png"
                            alt="glowking logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>
                <div className="flex-reverse my-auto mr-10 ml-auto flex h-full items-center justify-center gap-8 text-center text-sm md:hidden">
                    <Link href="tel:6980000015" className="">
                        <CgPhone className="h-10 w-10 " />
                    </Link>
                    <Link href="/contact" className="">
                        <RxCalendar className="h-10 w-10" />
                    </Link>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <RxHamburgerMenu className="h-10 w-10 cursor-pointer" />
                    </div>
                </div>
                <div
                    className={`mx-auto my-auto text-sm font-medium ${isHomePage ? 'text-primary':'text-secondary'} md:col-span-3 md:pb-0 md:pt-4 md:text-base md:font-semibold ${
                        isOpen
                            ? "fixed z-50 h-screen w-screen  bg-slate-800/40"
                            : "hidden md:block"
                    }`}
                >
                    <ul
                        className={`${
                            isOpen
                                ? "fixed z-50 flex h-screen w-8/12 flex-col items-center justify-center gap-2 bg-primary text-xl font-semibold text-secondary"
                                : "hidden"
                        } md:block`}
                        ref={node}
                    >
                        <LangSwitcher className="py-4" />
                        {navLinks.map((link, i) => (
                            <li
                                className="my-4 inline"
                                key={i}
                                onClick={() => setIsOpen(!open)}
                            >
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
                <div className="grid-auto my-auto mr-2 hidden w-fit whitespace-nowrap md:float-right md:float-none md:block ">
                    <Button href="/contact">
                        {t({ id: "headerButton", message: "Book Now" })}
                    </Button>
                </div>
            </div>
        </div>
    );
}

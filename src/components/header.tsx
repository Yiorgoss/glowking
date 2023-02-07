import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import { navLinkType } from "@cTypes/inputTypes";
import Divider from "./divider";

interface headerProps {
    navLinks: navLinkType[];
}
export default function Header({ navLinks }: headerProps): JSX.Element {
    //TODO: refactor and split code up
    //TODO: add clickListener to close on surrounding click
    //TODO: refactor the different headings for responsive and normal view

    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center">
            <div className="text-xl md:text-5xl font-bold">69 123 456 78</div>
            <div className="py-2 pt-2 text-lg font-medium md:col-auto col-span-full">* snappy * motto * or * TLDR *</div>
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
                  <li className={` ${isOpen && 'hidden'} md:block md:float-left mx-3 p-3 hover:text-primary hover:bg-secondary`} key={index}>
                        <Link
                            className="after:content-['.'] hover:after:w-3/4 after:transition-width after:h-[2px] relative p-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:m-auto after:w-0 after:bg-primary after:text-transparent after:duration-500"
                            href={link.path}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
//         <div className="relative top-0 flex w-full flex-wrap ">
//            <div className=" flex h-[200px] w-full flex-wrap justify-between bg-primary">
//                <div className="text-md my-auto text-2xl mr-auto pl-10 text-secondary ">
//                    {" "}
//                    691 111 1111{" "}
//                </div>
//                <Image
//                    className="mr-10 mt-5"
//                    src="https://via.placeholder.com/150.png?text=glowking.com"
//                    alt="logo"
//                    height={150}
//                    width={150}
//                />
//                <div className="m-auto basis-full text-center text-secondary">
//                    {" "}
//                    * Dry * Buff * Vacuum * Valet *{" "}
//                </div>
//            </div>
//            <div className="basis-full bg-secondary md:hidden">
//                <div className="py-1" onClick={() => setOpen(!open)}>
//                    <AiOutlineMenu className="mx-auto text-primary" />
//                </div>
//                <div className="sm:hidden w-full relative">
//                  <div className="">
//                    <ul>
//                        {navLinks.map((link, index) => (
//                            <li className="" key={index}>
//                                <Link className=" ml-14 pt-2" href={link.path} onClick={() => setOpen(!open)}>
//                                    {link.title}
//                                </Link>
//                            </li>
//                        ))}
//                    </ul>
//
//                  </div>
//                </div>
//                <div className={`${open && "hidden"} h-full my-5 text-primary`}>
//                    <ul>
//                        {navLinks.map((link, index) => (
//                            <li className="" key={index}>
//                                <Divider color='primary' />
//                                <Link className=" ml-14 pt-2" href={link.path} onClick={() => setOpen(!open)}>
//                                    {link.title}
//                                </Link>
//                            </li>
//                        ))}
//</ul>
//</div>
//</div>
//</div>
//

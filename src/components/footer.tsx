import Link from "next/link";
import Image from "next/image";

import SocialsTab from "./socialsTab";
import { navLinkType } from "@cTypes/inputTypes";

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

const HELP_LINKS = [
    {
        title: "How does it work?",
        path: "/contact#faq",
    },
    {
        title: "Where to ask Questions",
        path: "/contact#faq",
    },
    {
        title: "How to pay",
        path: "/contact#faq",
    },
    {
        title: "What is needed for this",
        path: "/contact#faq",
    },
];

const CONTACT_DETAILS = [
    "69 123 456 78",
    "Address Line 1",
    "Address Line 2",
    "16675",
];

export default function Footer(): JSX.Element {
    return (
        <div className="bg-slate-800 py-10">
            <div className="container mx-auto grid grid-cols-2 gap-10 text-white">
                <div className="p-4">
                    <div className="relative my-4">
                        <Image
                            src="/images/glowking_logo.jpg"
                            width={100}
                            height={100}
                            alt="glowking logo"
                        />
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vitae erat luctus, venenatis tortor sit amet,
                        aliquam ipsum. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Proin vitae
                        erat luctus, venenatis tortor sit amet, aliquam ipsum.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac
                    </div>
                    <SocialsTab className="mt-5 " />
                </div>
                <div className="my-auto grid grid-cols-3 gap-4">
                    <div className="">
                        <h4 className="mb-8 text-xl font-semibold">Sitemap</h4>
                        <ul>
                            {HELP_LINKS.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className=" py-1 ">{link.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="pl-10">
                        <h4 className="mb-8 text-xl font-semibold">Help</h4>
                        <ul>
                            {NAV_LINKS.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className="py-1">{link.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="mb-8 text-xl font-semibold">
                            Where to find us
                        </h4>
                        <ul>
                            {CONTACT_DETAILS.map((line, i) => (
                                <li className="py-1" key={i}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

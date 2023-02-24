import Link from "next/link";
import Image from "next/image";

import { t } from "@lingui/macro";

import SocialsTab from "./socialsTab";

const CONTACT_DETAILS = [
    "69 123 456 78",
    "Address Line 1",
    "Address Line 2",
    "16675",
];

export default function Footer({
    navLinks,
}: {
    navLinks: { title: string; path: string }[];
}): JSX.Element {
    const contactDetails = [
        "6980 000 015",
        t({ id: "Footer.contact.one", message: "Street of YOUR choice" }),
        t({ id: "Footer.contact.two", message: "Voula, Vouligmenis" }),
        t({ id: "Footer.contact.three", message: "Glyfada, Varkiza" }),
        t({ id: "Footer.contact.four", message: "Illioupoli, Argyroupoli" }),
    ];
    const helpLinks = [
        {
            title: t({ id: "helpLinks.one", message: "How does it work?" }),
            path: "/contact#faq",
        },
        {
            title: t({
                id: "helpLinks.two",
                message: "Where to ask Questions",
            }),
            path: "/contact#faq",
        },
        {
            title: t({ id: "helpLinks.three", message: "How to pay" }),
            path: "/contact#faq",
        },
        {
            title: t({
                id: "footer.helpLinks.four",
                message: "What is needed for this",
            }),
            path: "/contact#faq",
        },
    ];
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
                        {t({
                            id: "Footer.aboutUs",
                            message:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vitae erat luctus, venenatis tortor sit amet,aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac Lorem ipsumjdolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac",
                        })}
                    </div>
                    <SocialsTab className="mt-5 " />
                </div>
                <div className="my-auto grid grid-cols-3 gap-4">
                    <div className="">
                        <h4 className="mb-8 text-xl font-semibold">
                            {t({ id: "Footer.sitemap", message: "Sitemap" })}
                        </h4>
                        <ul>
                            {helpLinks.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className=" py-1 ">{link.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="pl-10">
                        <h4 className="mb-8 text-xl font-semibold">
                            {t({ id: "Footer.help", message: "Help" })}
                        </h4>
                        <ul>
                            {navLinks.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className="py-1">{link.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="mb-8 text-xl font-semibold">
                            {t({
                                id: "Footer.location",
                                message: "Where to find us",
                            })}
                        </h4>
                        <ul>
                            {contactDetails.map((line, i) => (
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

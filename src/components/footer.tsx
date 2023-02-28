import Link from "next/link";
import Image from "next/image";

import { t } from "@lingui/macro";

import SocialsTab from "./socialsTab";

export default function Footer({
    navLinks,
}: {
    navLinks: { title: string; path: string }[];
}): JSX.Element {
    const contactDetails = [
        "6980 000 015",
        t({ id: "Footer.contact.one", message: "Street of YOUR choice" }),
        t({ id: "Footer.contact.two", message: "Glyfada, Voula" }),
        t({ id: "Footer.contact.three", message: "Vouligmenis, Varkiza" }),
        t({ id: "Footer.contact.four", message: "Illioupoli, Argyroupoli" }),
    ];
    const helpLinks = [
        {
            title: t({ id: "footer.helpLinks.one", message: "How does it work?" }),
            path: "/contact#faq",
        },
        {
            title: t({
                id: "footer.helpLinks.two",
                message: "Where to ask Questions?",
            }),
            path: "/contact#faq",
        },
        {
            title: t({ id: "footer.helpLinks.three", message: "How to pay?" }),
            path: "/contact#faq",
        },
        {
            title: t({
                id: "footer.helpLinks.four",
                message: "What is needed for this?",
            }),
            path: "/contact#faq",
        },
    ];
    return (
        <div className="bg-slate-800 pb-[400px] md:py-10">
            <div className="container mx-auto grid grid-cols-2 gap-10 text-white">
                <div className="col-span-full p-4 md:col-span-1">
                    <div className="relative float-left mx-4 my-4 md:float-none ">
                        <Image
                            src="/images/glowking_logo.jpg"
                            width={100}
                            height={100}
                            alt="glowking logo"
                            className=""
                        />
                    </div>
                    <div className=" mx-4 my-4 break-all">
                        {t({
                            id: "Footer.aboutUs",
                            message:
                                "GLOW KING ATHENS is an innovative idea that annihilates distances! It started in 2019 and in the middle of the pandemic it covered all the southern suburbs. Complete cleaning services of the vehicle, the property, the pavement and everything else you need! GLOW KING ATHENS operates with the environment and people as its main focus, next to your every need. Glow King Athens starring... you!",
                        })}
                    </div>
                    <SocialsTab className="mx-auto mt-5" />
                </div>
                <div className="grid-col-1 col-span-full mx-auto my-auto grid gap-4 md:divide-none divide-y md:col-span-1 md:grid-cols-3">
                    <div className="">
                        <h4 className="mb-8 text-xl font-semibold">
                            {t({ id: "Footer.sitemap", message: "Sitemap" })}
                        </h4>
                        <ul>
                            {navLinks.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className="py-0 md:py-1">
                                        {link.title}
                                    </li>
                                </Link>
                            ))}

                        </ul>
                    </div>
                    <div className="pt-4 pl-0 md:pt-0 ">
                        <h4 className="mb-5 text-xl font-semibold md:mb-8">
                            {t({ id: "Footer.help", message: "Help" })}
                        </h4>
                        <ul>
                            {helpLinks.map((link, i) => (
                                <Link href={link.path} key={i}>
                                    <li className="py-0 md:py-1 ">
                                        {link.title}
                                    </li>
                                </Link>
                            ))}

                        </ul>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <h4 className="mb-8 text-xl font-semibold">
                            {t({
                                id: "Footer.location",
                                message: "Where to find us",
                            })}
                        </h4>
                        <ul>
                            {contactDetails.map((line, i) => (
                                <li className="py-0 md:py-1" key={i}>
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

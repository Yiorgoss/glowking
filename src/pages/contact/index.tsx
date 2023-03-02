import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'

import { ReactElement, useState } from "react";

import LayoutLayout from "@layouts/landingLayout";
import { t } from "@lingui/macro";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

import { GetServerSideProps, GetStaticProps } from "next";
import { loadTranslation } from "@/utils/utils";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === "production"
    );

    return {
        props: {
            translation,
        },
    };
};

const Contact: PageWithHeaderLayout = () => {
    //TODO: refactor form into compound component
    //TODO: remove form elements and instead use react and axios/fetch

    return (
        <div className="mx-auto mt-[100px]">
            <Head><title>{t({id:"Contact.head.title", message:"Glowking | Mobile Industrial Cleaning | Location Of your Choice"})}</title></Head>
            <div className="my-10 pb-20">
                <div className="relative mt-[100px] h-[300px] w-screen overflow-hidden ">
                    <Image
                        className="object-cover"
                        src="/media/images/banner_4.jpg"
                        alt="banner image of a black lamborghini"
                        fill
                    />
                    <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                        {t({ id: "Contact.contactUs", message: "Contact Us" })}
                    </h2>
                </div>

                <div className="grid grid-cols-1 divide-y md:divide-x md:divide-y-0 p-8 tracking-wider md:mt-20 md:grid-cols-2 ">
                    <div className="py-6 text-right text-6xl md:pr-10 ">
                        {t({
                            id: "Contact.welovetohelp",
                            message: "We love to",
                        })}
                        <br />
                        <span className="font-bold  uppercase text-tertiary md:text-7xl">
                            {" "}
                            {t({
                                id: "Contact.welovetohelphelp",
                                message: "help",
                            })}
                        </span>
                    </div>
                    <div className="my-auto flex flex-col pt-10 pl-10 text-2xl">
                        <div className="text-lg md:text-2xl ">
                            <span className="text-xl font-semibold md:text-3xl">
                                {t({ id: "Contact.phone", message: "Phone:" })}
                            </span>{" "}
                            <Link href="tel:6980000015">6980 000 015</Link>
                        </div>
                        <div className="my-8 pl-10 text-xl font-bold md:text-6xl">
                            {t({ id: "Contact.orBy", message: "Or By" })}
                        </div>
                        <div className="text-lg md:text-2xl">
                            <span className="text-xl font-semibold md:text-3xl">
                                Email:
                            </span>{" "}
                            glowkingath@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <LayoutLayout>{page}</LayoutLayout>;
};

export default Contact;

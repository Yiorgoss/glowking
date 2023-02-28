import LayoutLayout from "@layouts/landingLayout";
import Image from "next/image";
import { ReactElement, useState } from "react";

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
            <div className="my-10 pb-20">
                <div className="relative mt-[100px] h-[300px] w-screen overflow-hidden ">
                    <Image
                        className="object-cover"
                        src="/images/red_lambo.jpg"
                        alt="banner image of a black lamborghini"
                        fill
                    />
                    <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                        {t({ id: "Contact.contactUs", message: "Contact Us" })}
                    </h2>
                </div>

                <div className="mt-20 grid grid-cols-2 tracking-wider ">
                    <div className="pr-20 text-right text-6xl">
                        {t({
                            id: "Contact.welovetohelp",
                            message: "We love to",
                        })}
                        <br />
                        <span className="text-9xl  font-bold uppercase text-tertiary">
                            {" "}
                            {t({
                                id: "Contact.welovetohelphelp",
                                message: "help",
                            })}
                        </span>
                    </div>
                    <div className="my-auto flex flex-col text-2xl">
                        <div className="text-2xl ">
                            <span className="text-3xl font-semibold">
                                {t({ id: "Contact.phone", message: "Phone:" })}
                            </span>{" "}
                            6980 000 015
                        </div>
                        <div className="my-8 pl-10 text-6xl font-bold">
                            {t({ id: "Contact.orBy", message: "Or By" })}
                        </div>
                        <div className="text-2xl">
                            <span className="text-3xl font-semibold">
                                {t({ id: "Contact.email", message: "Email:" })}
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

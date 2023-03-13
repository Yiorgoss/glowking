import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { ReactElement } from "react";

import { t, Trans } from "@lingui/macro";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";
import LandingLayout from "@layouts/landingLayout";
import ImageEffect from "@components/imageEffect";

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

const ImageGallery = [
    {
        title: "1.",
        href: "/portfolio/soapy_taillight_2.jpg",
        imageData: { url: "/media/images/soapy_taillight_2.jpg" },
    },

    {
        title: "2.",
        href: "/portfolio/collage_2.jpg",
        imageData: { url: "/media/images/collage_2.jpg" },
    },

    {
        title: "3.",
        href: "/portfolio/in_out_jeep.jpg",
        imageData: { url: "/media/images/in_out_jeep.jpg" },
    },

    {
        title: "4.",
        href: "/portfolio/close_up_wheel.jpg",
        imageData: { url: "/media/images/close_up_wheel.jpg" },
    },

    {
        title: "5.",
        href: "/portfolio/clean_jeep.jpg",
        imageData: { url: "/media/images/clean_jeep.jpg" },
    },
    {
        title: "6.",
        href: "/portfolio/collage_2.jpg",
        imageData: { url: "/media/images/collage_2.jpg" },
    },

    {
        title: "7.",
        href: "/portfolio/in_out_jeep.jpg",
        imageData: { url: "/media/images/in_out_jeep.jpg" },
    },

    {
        title: "8.",
        href: "/portfolio/close_up_wheel.jpg",
        imageData: { url: "/media/images/close_up_wheel.jpg" },
    },
];

const Portfolio: PageWithHeaderLayout = () => {
    //TODO: if masonry layout wanted height and width must be calculated onload
    //      check for details
    //      https://stackoverflow.com/questions/66353475/how-to-use-image-component-in-next-js-with-unknown-width-and-height

    return (
        <div className=" container mx-auto mt-[100px]">
            <Head>
                <title>
                    {t({
                        id: "Portfolio.head.title",
                        message:
                            "South Athens car cleaning services at your door",
                    })}
                </title>
            </Head>
            <h1 className="px-10 pt-10 text-center text-6xl font-bold tracking-wider">
                <Trans id="Portfolio.header">Our Portfolio</Trans>
            </h1>
            <div className="">
                <ImageEffect effectData={ImageGallery} mobileUseImage={true} />
            </div>
        </div>
    );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Portfolio;
/*

 */

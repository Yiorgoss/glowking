import Image from "next/image";
import {GetServerSideProps} from "next"

import { ReactElement } from "react";

import { Trans } from "@lingui/macro";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";
import LandingLayout from "@layouts/landingLayout";

import {loadTranslation} from "@/utils/utils"

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

    "/media/images/soapy_taillight_2.jpg",

    "/media/images/collage_2.jpg",

    "/media/images/in_out_jeep.jpg",

    "/media/images/close_up_wheel.jpg",

    "/media/images/clean_jeep.jpg",
];

const Portfolio: PageWithHeaderLayout = () => {
    //TODO: if masonry layout wanted height and width must be calculated onload
    //      check for details
    //      https://stackoverflow.com/questions/66353475/how-to-use-image-component-in-next-js-with-unknown-width-and-height

    const overlayClasses = "fixed z-50 bg-contain bg-no-repeat w-4/5 h-4/5";

    return (
        <div className=" container mx-auto mt-[100px]">
            <h1 className="text-center pt-10 px-10 text-6xl font-bold tracking-wider">
                <Trans id="Portfolio.header">
                    Our Portfolio
                </Trans>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 ">
                {ImageGallery.map((pic, i) => (
                    <div
                        className="relative h-[300px] w-full overflow-hidden rounded-lg"
                        key={i}
                    >
                        <Image
                            src={pic}
                            alt=""
                            className="object-cover duration-500 hover:scale-110"
                            fill
                        />
                    </div>
                ))}
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

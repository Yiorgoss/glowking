import Image from "next/image";
import Head from 'next/head'

import { GetServerSideProps } from "next";

import { ReactElement } from "react";

import { t } from "@lingui/macro";

import LandingLayout from "@layouts/landingLayout";

import ServiceSection from "@components/serviceSection";
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

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

const Services: PageWithHeaderLayout = () => {
    const servicesList = [
        {
            title: t({
                id: "Services.servicesList.header.one",
                message: "External Cleaning",
            }),
            content: t({
                id: "Services.serviceslist.content.one",
                message:
                    "External cleaning is done without the use of a brush or sponge, but only with the use of hot water for less damage to the car's exterior paint.At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the domes and rims, removing insects, protective wax and rinsing the car with deionized water!The vehicle is then thoroughly wiped.",
            }),
            image: "/media/images/soapy_merc.jpg",
        },
        {
            title: t({
                id: "Services.servicesList.header.two",
                message: "Internal Cleaning",
            }),
            content: t({
                id: "Services.servicesList.content.two",
                message:
                    "In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.",
            }),
            image: "/media/images/internal.jpg",
        },
        {
            title: t({
                id: "Services.servicesList.header.three",
                message: "Boat Washing",
            }),
            content: t({
                id: "Services.servicesList.content.three",
                message: "Your boat has found its master! Our company undertakes both the interior and exterior cleaning of your boat. Our trusted staff combined with the top quality of our products will make your boat shine!",
            }),
            image: "/media/images/boat_deck.jpg",
        },
        {
            title: t({
                id: "Services.serviceslist.header.four",
                message: "Pavement/Garage Washing",
            }),
            content: t({
                id: "Services.servicesList.content.four",
                message: "A garage full of dust, mud and clutter? Our company undertakes a complete cleaning of your garage. Our trusted staff combined with the top of our products will make your garage shine!",
            }),
            image: "/media/images/pavement.jpg",
        },
    ];
    return (
        <div className="-z-10 mt-[100px]">
            <Head><title>{t({id:"Services.head.title", message:"We clean anything, anywhere in South Athens"})}</title></Head>
            <div className="">
                <div className="relative mt-[100px] h-[300px] w-screen ">
                    <div className="relative mt-[100px] h-[300px] w-screen overflow-hidden ">
                        <Image
                            className="object-cover"
                            src="/media/images/banner_lambo.jpeg"
                            alt="banner image of a black lamborghini"
                            fill
                        />
                        <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                            {t({
                                id: "Services.services.header",
                                message: "services",
                            })}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <ul className="container mx-auto">
                    {servicesList.map((service, i) => (
                        <ServiceSection
                            isLeft={i % 2 == 0 ? true : false}
                            key={i}
                            {...service}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

Services.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Services;

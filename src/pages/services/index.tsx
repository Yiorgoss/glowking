import Link from "next/link";
import Image from "next/image";

import { ReactElement } from "react";

import { t } from "@lingui/macro";

import LandingLayout from "@layouts/landingLayout";

import ServiceSection from "@components/serviceSection";
import CardMain from "@components/cardMain";
import Button from "@components/common/button/button";
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

const Services: PageWithHeaderLayout = () => {
    const servicesList = [
        {
            title: t({
                id: "Services.servicesList.header.one",
                message: "External Cleaning",
            }),
            content: t({
                id: "Services.servicesList.content.one",
                message:
                    "External cleaning is done without the use of a brush or sponge, but only with the use of hot water for less damage to the car's exterior paint.At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the domes and rims, removing insects, protective wax and rinsing the car with deionized water!The vehicle is then thoroughly wiped.",
            }),
            image: "/images/car_1.png",
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
            image: "/images/car_2.png",
        },
        {
            title: t({
                id: "Services.servicesList.header.three",
                message: "Service 3",
            }),
            content: t({
                id: "Services.servicesList.content.three",
                message: "",
            }),
            image: "/images/car_3.png",
        },
        {
            title: t({
                id: "Services.servicesList.header.four",
                message: "Service 4",
            }),
            content: t({
                id: "Services.servicesList.content.four",
                message: "",
            }),
            image: "/images/car_5.png",
        },
    ];
    return (
        <div className="mt-[100px]">
            <div className="">
                <div className="relative mt-[100px] h-[300px] w-screen ">
                    <div className="relative mt-[100px] h-[300px] w-screen overflow-hidden ">
                        <Image
                            className="object-cover"
                            src="/images/red_lambo.jpg"
                            alt="banner image of a black lamborghini"
                            fill
                        />
                        <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                            {t({
                                id: "Services.services.header",
                                message: "Services",
                            })}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <ul className="container mx-auto">
                    {servicesList.map((service, i) => (
                        <ServiceSection
                            isLeft={i % 2 == 1 ? true : false}
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

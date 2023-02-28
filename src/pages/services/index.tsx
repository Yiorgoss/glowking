import Image from "next/image";

import { ReactElement } from "react";

import { t } from "@lingui/macro";

import LandingLayout from "@layouts/landingLayout";

import ServiceSection from "@components/serviceSection";
import type { PageWithHeaderLayout } from "@ctypes/layoutTypes";

const services: PageWithHeaderLayout = () => {
    const servicesList = [
        {
            title: t({
                id: "services.serviceslist.header.one",
                message: "service 1",
            }),
            content: t({
                id: "services.serviceslist.content.one",
                message:
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit. proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac lorem ipsum dolor sit amet, consecteturadipiscing elit. proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/media/images/car_1.png",
        },
        {
            title: t({
                id: "services.serviceslist.header.two",
                message: "service 2",
            }),
            content: t({
                id: "services.serviceslist.content.two",
                message:
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit. proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac lorem ipsum dolor sit amet, consecteturadipiscing elit. proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/media/images/car_2.png",
        },
        {
            title: t({
                id: "services.serviceslist.header.three",
                message: "service 3",
            }),
            content: t({
                id: "services.serviceslist.content.three",
                message:
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit. proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac lorem ipsum dolor sit amet, consecteturadipiscing elit. proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/media/images/car_3.png",
        },
        {
            title: t({
                id: "services.serviceslist.header.four",
                message: "service 4",
            }),
            content: t({
                id: "services.serviceslist.content.four",
                message:
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit. proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac lorem ipsum dolor sit amet, consecteturadipiscing elit. proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/media/images/car_5.png",
        },
    ];
    return (
        <div className="-z-10 mt-[100px]">
            <div className="">
                <div className="relative mt-[100px] h-[300px] w-screen ">
                    <div className="relative mt-[100px] h-[300px] w-screen overflow-hidden ">
                        <Image
                            className="object-cover"
                            src="/media/images/red_lambo.jpg"
                            alt="banner image of a black lamborghini"
                            fill
                        />
                        <h2 className="absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary">
                            {t({
                                id: "services.services.header",
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

services.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default services;

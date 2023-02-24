import Link from "next/link";
import Image from "next/image";
import LandingLayout from "@layouts/landingLayout";

import { ReactElement } from "react";

import ServiceSection from "@components/serviceSection";
import CardMain from "@components/cardMain";
import Button from "@components/common/button/button";
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

const SERVICES_LIST = [
    {
        title: "Service 1",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "/images/car_1.png",
    },
    {
        title: "Service 2",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "/images/car_2.png",
    },
    {
        title: "Service 3",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "/images/car_3.png",
    },
    {
        title: "Service 4",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "/images/car_5.png",
    },
];
const Services: PageWithHeaderLayout = () => {
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
                            Services
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <ul className="container mx-auto">
                    {SERVICES_LIST.map((service, i) => (
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

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
        title: "Service",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "https://via.placeholder.com/1000x1000.png",
    },
    {
        title: "Service",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "https://via.placeholder.com/1000x1000.png",
    },
    {
        title: "Service",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "https://via.placeholder.com/1000x1000.png",
    },
    {
        title: "Service",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
        image: "https://via.placeholder.com/1000x1000.png",
    },
];
const Services: PageWithHeaderLayout = () => {
    return (
        <div className="mt-[100px]">
            <div className="">
                <div className="relative h-[300px] w-screen ">
                    <Image
                        src="https://via.placeholder.com/1000x400.png"
                        alt="banner"
                        fill
                    />
                    <h2 className="absolute inset-x-0 bottom-0 pb-20  text-center text-4xl font-bold tracking-wider">
                        Our <span className="text-tertiary">Services</span>
                    </h2>
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

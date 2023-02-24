//import { getLayout as getSiteLayout } from "@layouts/headerLayout"
import Image from "next/image";
import Link from "next/link";

import { GetServerSideProps, GetStaticProps } from "next";
import { ReactElement } from "react";

import { t, Trans, defineMessage } from "@lingui/macro";

import { loadTranslation } from "@/utils/utils";
import LandingLayout from "@layouts/landingLayout";
import CardMain from "@components/cardMain";
import SocialsTab from "@components/socialsTab";
import ServiceSection from "@components/serviceSection";
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === "production"
    );

    //    const res = await fetch("/data/featureList.ts");
    //    const featureList = await res.json();

    return {
        props: {
            translation,
        },
    };
};

const Home: PageWithHeaderLayout = ({}) => {
    //ugly but works
    const serviceList = [
        {
            header: t({
                id: `Home.servicesList.one.header`,
                message: "Car Wash",
            }),
            content: t({
                id: `Home.servicesList.one.content`,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/black_lambo_2.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.two.header`,
                message: "Boat Wash",
            }),
            content: t({
                id: `Home.servicesList.two.content`,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/clean_jeep.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.three.header`,
                message: "Road Cleaning",
            }),
            content: t({
                id: `Home.servicesList.two.content`,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/van_lambo.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.four.header`,
                message: "Property Cleaning",
            }),
            content: t({
                id: `Home.servicesList.four.content`,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/clean_mustang.jpg",
        },
    ];

    const featureList = [
        {
            header: t({
                id: "Home.featureList.one.header",
                message: "Extra Careful",
            }),
            content: t({
                id: "Home.featureList.one.content",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/lambo_orange_clean.jpg",
        },
        {
            header: t({
                id: "Home.feature.two.header",
                message: "Eco Friendly",
            }),
            content: t({
                id: "Home.feature.two.content",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/glowking_van_1.jpg",
        },
        {
            header: t({ id: "Home.feature.three.header", message: "Discrete" }),
            content: t({
                id: "Home.feature.three.content",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/black_lambo_2.jpg",
        },
        {
            header: t({ id: "Home.feature.four.header", message: "Effective" }),
            content: t({
                id: "Home.feature.four.content",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum.Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin vitae erat luctus, venenatis tortor sitamet, aliquam ipsum. Pellentesque habitant morbi tristiquesenectus et netus et malesuada fames ac",
            }),
            image: "/images/soapy_wheel.jpg",
        },
    ];
    return (
        <div className="overflow-hidden ">
            <div className="h-screen w-screen ">
                <div className="relative -z-10 h-full w-full">
                    <Image
                        className="object-cover"
                        src="/images/landing_page_2.jpg"
                        alt="landing page image"
                        fill
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 pb-10 text-center text-8xl font-semibold text-secondary">
                    <div className="">{t`More Than Just a Car`}</div>
                    <div className="text-center text-6xl font-medium text-secondary">{t`It's a Lifestyle`}</div>
                </div>
                <div className="absolute bottom-0 right-0 pr-10 pb-5 ">
                    <SocialsTab isVert={true} />
                </div>
            </div>
            <div className="container mx-auto">
                <div className="py-10">
                    <h1 className="my-10 text-center text-6xl font-bold tracking-wider">{t`Features`}</h1>
                    <div className="grid grid-cols-4">
                        {featureList.map((feature, i) => (
                            <CardMain
                                href="/service"
                                header={feature.header}
                                content={feature.content}
                                image={feature.image}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20">
                <ServiceSection
                    isLeft={false}
                    content={t({
                        id: "Home.serviceSelection.title",
                        message:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae epsum dolor sit amet, consectetur adipiscing elit. Proin vitae epsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum  ac",
                    })}
                    image="/images/soapy_merc.jpg"
                />
            </div>
            <div className="container mx-auto my-20">
                <h3 className="my-10 text-center text-5xl font-semibold tracking-wider">{t`Who Are We?`}</h3>
                <div className="my-auto mx-auto h-[600px] w-full rounded-lg bg-black text-white">
                    Video Goes Here
                </div>
            </div>
            <div className="container mx-auto my-20">
                <div className="py-10">
                    <h1 className="my-10 text-center text-5xl">{t`Our Services`}</h1>
                    <div className="grid grid-cols-4">
                        {serviceList.map((service, i) => (
                            <CardMain
                                href="/services"
                                header={service.header}
                                content={service.content}
                                image={service.image}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    //TODO: see other todo about getlayout function
    return (
        <LandingLayout>
            <div className="mt-[-100px]">{page}</div>
        </LandingLayout>
    );
};

export default Home;

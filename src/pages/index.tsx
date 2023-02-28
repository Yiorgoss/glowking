//import { getLayout as getSiteLayout } from "@layouts/headerLayout"
import Image from "next/image";
import Link from "next/link";

import { GetServerSideProps, GetStaticProps } from "next";
import { ReactElement } from "react";

import { t, Trans } from "@lingui/macro";

import LandingLayout from "@layouts/landingLayout";
import CardMain from "@components/cardMain";
import SocialsTab from "@components/socialsTab";
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

const Home: PageWithHeaderLayout = ({}) => {
    //ugly but works
    const serviceList = [
        {
            header: t({
                id: `Home.servicesList.one.header`,
                message: "External Wash",
            }),
            content: t({
                id: `Home.servicesList.one.content`,
                message:
                    "External cleaning is done without the use of a brush or sponge, but only with the use of hot water for less damage to the car's exterior paint.At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the domes and rims, removing insects, protective wax and rinsing the car with deionized water!The vehicle is then thoroughly wiped.",
            }),
            image: "/media/images/black_lambo_2.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.two.header`,
                message: "Internal Cleaning",
            }),
            content: t({
                id: `Home.servicesList.two.content`,
                message:
                    "In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.",
            }),
            image: "/media/images/clean_jeep.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.three.header`,
                message: "Boat Washing",
            }),
            content: t({
                id: `Home.servicesList.three.content`,
                message: "Your boat has found its master! Our company undertakes both the interior and exterior cleaning of your boat. Our trusted staff combined with the top quality of our products will make your boat shine!",
            }),
            image: "/media/images/van_lambo.jpg",
        },
        {
            header: t({
                id: `Home.servicesList.four.header`,
                message: "Pavement/Garage Washing",
            }),
            content: t({
                id: `Home.servicesList.four.content`,
                message: "A garage full of dust, mud and clutter? Our company undertakes a complete cleaning of your garage. Our trusted staff combined with the top of our products will make your garage shine!",
            }),
            image: "/media/images/clean_mustang.jpg",
        },
    ];

    const featureList = [
        {
            header: t({
                id: "Home.featureList.one.header",
                message: "Location Of Your Choice",
            }),
            content: t({
                id: "Home.featureList.one.content",
                message:
                    "Professional washing and cleaning for your car!The mobile car wash GLOW KING a mobile business that deals exclusively with the cleaning and care of cars, gives a new dimension to the space, comes to where you are, zeroing out the distances and taking care of your own car as if it were unique.",
            }),
            image: "/images/lambo_orange_clean.jpg",
        },
        {
            header: t({
                id: "Home.feature.two.header",
                message: "Biological Cleaning",
            }),
            content: t({
                id: "Home.feature.two.content",
                message:
                    "In biological cleaning, we remove from the cabin area, stains, fungi, bacteria and any other organic matter. We disinfect the seats, the sky, floors, luggage compartment and side upholstery. We also disinfect the air ducts of the car, removing the stench from the use of the air conditioner.",
            }),
            image: "/images/glowking_van_1.jpg",
        },
        {
            header: t({
                id: "Home.feature.three.header",
                message: "Safe and Effective",
            }),
            content: t({
                id: "Home.feature.three.content",
                message:
                    "The products used for cleaning and disinfection are certified and friendly to humans and the environment, complying with eu standards and regulations. Our products and machines are of the utmost quality, including AUTOGLYM and KARCHER.",
            }),
            image: "/images/black_lambo_2.jpg",
        },
        {
            header: t({
                id: "Home.feature.four.header",
                message: "Privacy Focused",
            }),
            content: t({
                id: "Home.feature.four.content",
                message:
                    "Glow King Athens and its staff will never share your personal information or vehicle information without your consent.",
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
                <div className="absolute inset-x-0 bottom-0 pb-10 text-center text-6xl font-semibold text-secondary">
                    <div className="mx-auto w-fit -skew-y-3 rounded-lg bg-fuchsia-800 px-6 ">
                        <Trans id="Home.motto">One Call at Your Door</Trans>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 pr-10 pb-5 ">
                    <SocialsTab isVert={true} />
                </div>
            </div>
            <div className="container mx-auto">
                <div className="py-10">
                    <h1 className="my-10 text-center text-6xl font-bold tracking-wider">
                        {t({ id: "Home.Features", message: "Features" })}
                    </h1>
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
            <div className="container mx-auto my-20 h-full">
                <ServiceSection
                    isLeft={false}
                    title={t({
                        id: "Home.serviceSection.title",
                        message: "Who Are We?",
                    })}
                    content={t({
                        id: "Home.serviceSection.content",
                        message:
                            "GLOW KING ATHENS is an innovative idea that annihilates distances! It started in 2019 and in the middle of the pandemic it covered all the southern suburbs. Complete cleaning services of the vehicle, the property, the pavement and everything else you need! GLOW KING ATHENS operates with the environment and people as its main focus, next to your every need. Glow King Athens starring... you!",
                    })}
                    image="/images/soapy_merc.jpg"
                />
            </div>
            <div className="container mx-auto my-20">
                <div className="my-auto mx-auto h-[600px] w-full rounded-lg bg-black text-white">
                    Video Goes Here
                </div>
            </div>
            <div className="container mx-auto my-20">
                <div className="py-10">
                    <h1 className="my-10 text-center text-5xl">
                        {t({ id: "Home.Services", message: "Our Services" })}
                    </h1>
                    <div className="grid grid-cols-4">
                        {serviceList.map((service, i) => (
                            <CardMain
                                href="/services"
                                header={service.header}
                                content={service.content}
                                image={service.image}
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

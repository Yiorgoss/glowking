import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement, useState, useEffect } from 'react';

import { PrismaClient, Category } from '@prisma/client';
import { t } from '@lingui/macro';

import MultiStepFormStart from '@/components/multiStepFormStart';
import LandingLayout from '@layouts/landingLayout';
import CardMain from '@components/cardMain';
import SocialsTab from '@components/socialsTab';
import ServiceSection from '@components/serviceSection';
import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';

import { serviceData } from '@/data/serviceData';

import { loadTranslation } from '@/utils/utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === 'production'
    );
    const prisma = new PrismaClient();
    const categories = JSON.stringify(
        await prisma.category.findMany({ where: {} })
    );
    return {
        props: {
            translation,
            categories
        }
    };
};

const Home = ({ categories }: { categories:string }) => {
    //ugly but works

    const featureList = [
        {
            header: t({
                id: 'Home.featureList.one.header',
                message: 'Location Of Your Choice'
            }),
            content: t({
                id: 'Home.featureList.one.content',
                message:
                    'Professional washing and cleaning for your car!The mobile car wash GLOW KING a mobile business that deals exclusively with the cleaning and care of cars, gives a new dimension to the space, comes to where you are, zeroing out the distances and taking care of your own car as if it were unique.'
            }),
            image: '/media/images/location.jpeg'
        },
        {
            header: t({
                id: 'Home.feature.two.header',
                message: 'Biological Cleaning'
            }),
            content: t({
                id: 'Home.feature.two.content',
                message:
                    'In biological cleaning, we remove from the cabin area, stains, fungi, bacteria and any other organic matter. We disinfect the seats, the sky, floors, luggage compartment and side upholstery. We also disinfect the air ducts of the car, removing the stench from the use of the air conditioner.'
            }),
            image: '/media/images/biological.jpeg'
        },
        {
            header: t({
                id: 'Home.feature.three.header',
                message: 'Safe and Effective'
            }),
            content: t({
                id: 'Home.feature.three.content',
                message:
                    'The products used for cleaning and disinfection are certified and friendly to humans and the environment, complying with eu standards and regulations. Our products and machines are of the utmost quality, including AUTOGLYM and KARCHER.'
            }),
            image: '/media/images/safe-effective.jpeg'
        },
        {
            header: t({
                id: 'Home.feature.four.header',
                message: 'Privacy Focused'
            }),
            content: t({
                id: 'Home.feature.four.content',
                message:
                    'Glow King Athens and its staff will never share your personal information or vehicle information without your consent.'
            }),
            image: '/media/images/carwash-portfolio/portfolio_9.png',
            href: '/legal'
        }
    ];

    const [responsiveImage, setResponsiveImage] = useState(
        <Image
            className='object-cover'
            src='/media/images/mobile_landing_image.jpeg'
            alt=''
            fill
        />
    );
    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth >= 800) {
                setResponsiveImage(
                    <Image
                        className='object-cover'
                        src='/media/images/landing_image.jpeg'
                        alt=''
                        fill
                    />
                );
            } else {
                setResponsiveImage(
                    <Image
                        className='object-cover'
                        src='/media/images/mobile_landing_image.jpeg'
                        alt=''
                        fill
                    />
                );
            }
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array heightensures that effect is only run on mount

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>
                    {t({
                        id: 'Home.head.title',
                        message:
                            'Glowking | Car, Boat, Garage, Pavement Cleaning Services'
                    })}
                </title>
            </Head>

            <div className='h-screen w-screen '>
                <div className='relative -z-10 h-full w-full'>
                    {responsiveImage}
                </div>
                <MultiStepFormStart categories={JSON.parse(categories)} />
                <div className='absolute bottom-0 right-0 pr-10 pb-5 '>
                    <SocialsTab isVert={true} />
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='py-10'>
                    <h1 className='my-10 text-center text-3xl font-semibold tracking-wider'>
                        {t({ id: 'Home.Features', message: 'Features' })}
                    </h1>
                    <div className='mx-auto grid w-4/5 grid-cols-1 justify-center gap-y-8 gap-x-4 md:grid-cols-2 2xl:w-full 2xl:grid-cols-4 2xl:justify-between '>
                        {featureList.map((feature, i) => (
                            <CardMain
                                href={
                                    feature.href
                                        ? feature.href
                                        : '/services/wash-car-detailing/car-cleaning'
                                }
                                header={feature.header}
                                content={feature.content}
                                image={feature.image}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-10 h-full'>
                <ServiceSection
                    isLeft={false}
                    title={t({
                        id: 'Home.serviceSection.title',
                        message: 'Who Are We?'
                    })}
                    content={t({
                        id: 'Home.serviceSection.content',
                        message:
                            'GLOW KING ATHENS is an innovative idea that annihilates distances! It started in 2019 and in the middle of the pandemic it covered all the southern suburbs. Complete cleaning services of the vehicle, the property, the pavement and everything else you need! GLOW KING ATHENS operates with the environment and people as its main focus, next to your every need. Glow King Athens starring... you!'
                    })}
                    image='/media/images/glowking_van_1.jpg'
                />
            </div>
            <div className='container mx-auto'>
                <div className='py-10'>
                    <h1 className='my-10 text-center text-3xl font-semibold'>
                        {t({ id: 'Home.Services', message: 'Our Services' })}
                    </h1>
                    <div className='mx-auto grid w-4/5 grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3 '>
                        {serviceData.map((service, i) => (
                            <CardMain
                                href='/services/wash-car-detailing/car-cleaning'
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
            <div className=''>{page}</div>
        </LandingLayout>
    );
};

export default Home;

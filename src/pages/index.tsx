import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement, useState } from 'react';

import { t, Trans } from '@lingui/macro';

import LandingLayout from '@layouts/landingLayout';
import CardMain from '@components/cardMain';
import SocialsTab from '@components/socialsTab';
import ServiceSection from '@components/serviceSection';
import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';

import { loadTranslation } from '@/utils/utils';
import useWindowSize from '@/utils/useWindowSize';

import mobileLandingImage from '/media/images/mobile_landing_imge.jpeg';
import landingImage from '/media/images/landing_image.jpeg';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === 'production'
    );

    return {
        props: {
            translation
        }
    };
};

const Home: PageWithHeaderLayout = ({}) => {
    //ugly but works
    const serviceList = [
        {
            header: t({
                id: `Home.servicesList.one.header`,
                message: 'External Wash'
            }),
            content: t({
                id: `Home.servicesList.one.content`,
                message:
                    "External cleaning is done without the use of a brush or sponge, but only with the use of hot water for less damage to the car's exterior paint.At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the domes and rims, removing insects, protective wax and rinsing the car with deionized water!The vehicle is then thoroughly wiped."
            }),
            image: '/media/images/external.jpeg'
        },
        {
            header: t({
                id: `Home.servicesList.two.header`,
                message: 'Internal Cleaning'
            }),
            content: t({
                id: `Home.servicesList.two.content`,
                message:
                    'In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.'
            }),
            image: '/media/images/internal.jpeg'
        },
        {
            header: t({
                id: `Home.servicesList.three.header`,
                message: 'Boat Washing'
            }),
            content: t({
                id: `Home.servicesList.three.content`,
                message:
                    'Your boat has found its master! Our company undertakes both the interior and exterior cleaning of your boat. Our trusted staff combined with the top quality of our products will make your boat shine!'
            }),
            image: '/media/images/yatch.jpg'
        },
        {
            header: t({
                id: `Home.servicesList.four.header`,
                message: 'Pavement/Garage Washing'
            }),
            content: t({
                id: `Home.servicesList.four.content`,
                message:
                    'A garage full of dust, mud and clutter? Our company undertakes a complete cleaning of your garage. Our trusted staff combined with the top of our products will make your garage shine!'
            }),
            image: '/media/images/pavement.png'
        }
    ];

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

    const size = useWindowSize();
    const getImage = (): string => {
        if (size && size['width'] < 800) {
            console.log(size);
            return '/media/images/mobile_landing_image.jpeg';
        }

        console.log('abc', size);
        return '/media/images/landing_image.jpeg';
    };

    return (
        <div className='overflow-hidden '>
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
                    <Image
                        className='object-cover'
                        src={getImage()}
                        alt='landing page image'
                        fill
                    />
                </div>
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
                                href={feature.href ? feature.href : '/services'}
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
                    <div className='mx-auto grid w-4/5 grid-cols-1 justify-center gap-y-8 gap-x-4 md:grid-cols-2 2xl:w-full 2xl:grid-cols-4 2xl:justify-between '>
                        {serviceList.map((service, i) => (
                            <CardMain
                                href='/services'
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
            <div className='mt-[-100px]'>{page}</div>
        </LandingLayout>
    );
};

export default Home;

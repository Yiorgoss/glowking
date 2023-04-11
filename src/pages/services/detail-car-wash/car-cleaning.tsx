import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement, useState } from 'react';

import { t, defineMessage } from '@lingui/macro';

import {AiOutlineArrowUp} from 'react-icons/ai'

import SidebarLayout from '@/layouts/sidebarLayout';
import TabSectionLayout from '@/layouts/tabSectionLayout';
import LandingLayout from '@/layouts/landingLayout';

import CardExtra from '@/components/cardExtra';
import { loadTranslation } from '@/utils/utils';

import { carServiceSubCategory } from '@/data/serviceData';
import { carServiceExtras } from '@/data/serviceData';

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
const ServicesCarCleaning = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `detail-car-wash.car-cleaning.title`,
                    message: `Car Services`
                })}
            </h1>
            <div>
                <h2 className='pt-5 text-2xl font-medium'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.title`,
                        message: `External + Internal Cleaning`
                    })}
                </h2>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.2`,
                        message: `The external cleaning is done without the use of a brush or sponge but only with the use of hot water for less damage to the car's exterior paint.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.3`,
                        message: `At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the fog lights and rims, removing insects, protective wax and rinsing the car with deionized water!`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.4`,
                        message: `The vehicle is then thoroughly wiped.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.5`,
                        message: `In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.6`,
                        message: `Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.7`,
                        message: `Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.`
                    })}
                </div>
                <div className='pt-5 pl-10 text-2xl font-semibold'>30,00 €</div>
            </div>
            <div>
                <h2 className='pt-10 text-2xl font-medium'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.title`,
                        message: `Organic Matter Cleaning`
                    })}
                </h2>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.1`,
                        message: `In biological cleaning, we remove from the cabin area, apart from stains, we clean fungi, bacteria and anything that burdens the human body.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.2`,
                        message: `We disinfect the seats, the sky, floors, luggage compartment and side upholstery.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.3`,
                        message: `We also compulsorily disinfect the air ducts of the car, removing the stench from the use of the air conditioner.`
                    })}
                </div>
                <div className='pt-5 pl-3 font-semibold'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.4`,
                        message: `The products used for cleaning and disinfection are certified and friendly to humans and the environment, complying with EU standards.`
                    })}
                </div>
                <div className='pt-5 pl-10 text-2xl font-semibold'>80,00 €</div>
            </div>
            <div>
                <div className='py-10 font-semibold'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.5`,
                        message: `We also offer a large list of aditional optional cleaning services for your car`
                    })}
                </div>
                <div className='grid grid-cols-1 mx-5 md:mx-0 md:grid-cols-3 gap-5'>
                    {carServiceExtras.map(
                        ({ title, content, price, href, src }, index) => (
                            <div className='h-full w-full' key={index}>
                                <CardExtra
                                    href={href}
                                    header={title}
                                    content={content}
                                    price={price}
                                    src={src}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

ServicesCarCleaning.getLayout = function getLayout(page: ReactElement) {
    return (
        <LandingLayout>
            <SidebarLayout>
                <TabSectionLayout
                    title={defineMessage({
                        id: `detail-car-wash.title`,
                        message: `Car Cleaning and Detailing Services`
                    })}
                    categories={carServiceSubCategory}>
                    {page}
                </TabSectionLayout>
            </SidebarLayout>
        </LandingLayout>
    );
};

export default ServicesCarCleaning;

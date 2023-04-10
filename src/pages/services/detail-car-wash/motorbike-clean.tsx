import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement, useState } from 'react';

import { t, defineMessage } from '@lingui/macro';

import SidebarLayout from '@/layouts/sidebarLayout';
import TabSectionLayout from '@/layouts/tabSectionLayout';
import LandingLayout from '@/layouts/landingLayout';

import { loadTranslation } from '@/utils/utils';

import { carServiceSubCategory } from '@/data/serviceData';

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
const ServicesMotorbikeClean = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `detail-car-wash.motorbike.title`,
                    message: `Motorbike Cleaning`
                })}
            </h1>
            <div>
                {t({
                    id: `detail-car-wash.motorbike.p-1.1`,
                    message: `The cleaning is done without the use of a brush or sponge but only with the use of hot water for less damage to the car's exterior paint.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `detail-car-wash.motorbike.p-1.2`,
                    message: `At Glow King we offer you a complete cleaning with pre-washing and mainly washing the machine with active foam, cleaning the fog lights and rims, removing insects, protective wax and rinsing the car with deionized water!`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `detail-car-wash.motorbike.p-1.3`,
                    message: `Your machine is then thoroughly wiped.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `detail-car-wash.motorbike.p-1.4`,
                    message: `In cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `detail-car-wash.motorbike.p-1.5`,
                    message: `We blow the inside of your machine to remove the dust and then clean with a vacuum cleaner. Finally, we proceed with cleaning and maintenance of all plastic surfaces, dry cleaning and perfuming the saddle of your machine.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `detail-car-wash.motorbike.p-1.6`,
                    message: `Minimum charge to come to your place: €30.00`
                })}
            </div>
        </div>
    );
};

ServicesMotorbikeClean.getLayout = function getLayout(page: ReactElement) {
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

export default ServicesMotorbikeClean;

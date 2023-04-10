import { ReactElement, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';

import LandingLayout from '@layouts/landingLayout';
import SidebarLayout from '@/layouts/sidebarLayout';
import TabSectionLayout from '@/layouts/tabSectionLayout';

import { loadTranslation } from '@/utils/utils';

import { t, defineMessage } from '@lingui/macro';
import Button from '@/components/common/button/button';

import { homeServiceSubCategory } from '@/data/serviceData';

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

const ServicesHomeCleaningCarpets = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `home-cleaning-couches.carpets.title`,
                    message: `Carpets`
                })}
            </h1>
            <div>
                {t({
                    id: `home-cleaning-couches.carpets.p-1.1`,
                    message: `The Biological Carpet Cleaning we apply destroys harmful micro-organisms such as mites, fungi and bacteria, so you can step and touch without fear on a healthy carpet!`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `home-cleaning-couches.carpets.p-1.2`,
                    message: `At the same time, we apply all the necessary actions to eliminate any stains and dirt on your carpet to achieve a nice aesthetic result. In order to perform a Complete Carpet Cleaning there are 2 methods we follow: Dry Biological Carpet Cleaning which concerns the extermination of the microbial load & Wet Biological Carpet Cleaning which concerns the aesthetic part.`
                })}
            </div>
            <div>
                <h1 className='pb-5 pt-10 text-xl font-medium'>
                    {t({
                        id: `home-cleaning-couches.carpets.p2.title`,
                        message: `Categories`
                    })}
                </h1>
                <ul className='list-disc pl-10'>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-1`,
                            message: `Cleaning Handmade Carpets `
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-2`,
                            message: `Cleaning Woolen Carpets `
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-3`,
                            message: `Cleaning Synthetic Carpets`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-4`,
                            message: `Dry Cleaning Carpets`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-5`,
                            message: `Cleaning Carpets from Mites`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.carpets.p-2.item-6`,
                            message: `Cleaning Carpets from Stains`
                        })}
                    </li>
                </ul>
                <div className='py-5 font-medium'>
                    {t({
                        id: `home-cleaning-couches.carpets.p-3`,
                        message: `Cost: €10.00 per square meter`
                    })}
                </div>
                <div className=' pt-5 font-semibold'>
                    <Button
                        href='/contact'
                        className='w-fit rounded-lg bg-primary p-3 text-tertiary outline outline-2 outline-tertiary hover:bg-tertiary hover:text-primary'>
                        {t({
                            id: `services.request-an-offer`,
                            message: `REQUEST AN OFFER`
                        })}
                    </Button>
                </div>
            </div>
        </div>
    );
};

ServicesHomeCleaningCarpets.getLayout = function getLayout(page: ReactElement) {
    return (
        <LandingLayout>
            <SidebarLayout>
                <TabSectionLayout
                    title={defineMessage({
                        id: `home-cleaning-couches.title`,
                        message: `Home Cleaning Services`
                    })}
                    categories={homeServiceSubCategory}>
                    {page}
                </TabSectionLayout>
            </SidebarLayout>
        </LandingLayout>
    );
};

export default ServicesHomeCleaningCarpets;

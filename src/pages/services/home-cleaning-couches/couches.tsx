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
const ServicesHomeCleaningCouches = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-medium'>
                {t({
                    id: `home-cleaning-couches.couches.title`,
                    message: `Couches`
                })}
            </h1>
            <div className=''>
                {t({
                    id: `home-cleaning-couches.couches.p-1.1`,
                    message: `Sofas and living areas usually receive the most use of all other areas of the house. The living room is cleaned with hypoallergenic Karcher products and Karcher washing-rinsing machines. Your precious furniture can lose the vibrancy of its colors and become a breeding ground for germs. Exhaust gas, smoking, dust, etc. are key factors in this wear and tear.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `home-cleaning-couches.couches.p-1.2`,
                    message: `And of course the case (sofas in the same space as our little angels) is more or less known to all of us. Markers, paints, milk and many others are stains that need professional care. Do nothing in these cases except call clean4u. Remember that if a stain is destabilized by your attempt to clean it, it can become permanent on your sofa.`
                })}
            </div>
            <div className='pt-3'>
                <h3 className='pt-10 text-xl font-medium'>
                    {t({
                        id: `home-cleaning-couches.couches.p-2.title`,
                        message: `Categories`
                    })}
                </h3>
                <ul className='list-disc pl-10'>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-1`,
                            message: `Bio-cleaning of a two-seater sofa: 60,00 €`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-2`,
                            message: `Bio-cleaning three-seater sofa: €75.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-3`,
                            message: `Bio-cleaning per additional seat: €20.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-4`,
                            message: `Bio-cleaning of a leather sofa: €38.00`
                        })}
                    </li>
                    <li className='pt-2'>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-5`,
                            message: `Armchair bio-cleaning: €20.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-6`,
                            message: `Berzera bio-cleaning: €20.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-7`,
                            message: `Chair bio-cleaning: €12.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.couches.p-2.item-8`,
                            message: `Chair bio-cleaning (back & seat): €18.00`
                        })}
                    </li>
                </ul>
                <div className='text-sm'>
                    {t({
                        id: `home-cleaning-couches.couches.p-3.1`,
                        message: `* All our prices include the chemical compound that aims to extend the life of your products.`
                    })}
                </div>
                <div className='pt-5 font-semibold'>
                    <Button
                        href='/contact'
                        className='w-fit rounded-lg bg-primary p-3 text-tertiary outline outline-2 outline-tertiary hover:bg-tertiary hover:text-primary'>
                        {t({
                            id: `services.book-an-appointment-now`,
                            message: `BOOK AN APPOINTMENT NOW`
                        })}
                    </Button>
                </div>
            </div>
        </div>
    );
};
ServicesHomeCleaningCouches.getLayout = function getLayout(page: ReactElement) {
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

export default ServicesHomeCleaningCouches;

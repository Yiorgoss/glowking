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

const ServicesHomeCleaningMattresses = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `home-cleaning-couches.mattresses.title`,
                    message: `Mattresses`
                })}
            </h1>
            <div>
                {t({
                    id: `home-cleaning-couches.mattresses.p-1.2`,
                    message: `Mites always carry with them their tool, which has just that name, namely Aspergillus Repens, the fungus we mentioned earlier. In this way, the fungus is dispersed with each movement of the mite and the skin scales become more palatable to the mites. The danger, however, is not the mite itself, but their droppings. These droppings contain ingredients that cause allergies. That is, when they are exhaled as fine dust, they cause allergies, such as the allergy that comes from house dust. Want to know how much feces a mite can produce per day?`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `home-cleaning-couches.mattresses.p-1.1`,
                    message: `A house dust mite produces about 20 pellets of feces per day. If you consider that its lifespan is about 42 days, it means that it produces a total of 840 pieces of them. This amount is actually 200 times greater than the weight of the mite itself (Dermatophagoldes pteronyssinus). Even a clean pillow contains many tens of thousands of "domestic animals" of about 0.3 thousand. In fact, when pillows have not been cleaned for years (usually only the cover is washed), up to 400,000 mites can live there`
                })}
            </div>
            <div>
                <h1 className='pb-5 pt-10 text-xl font-medium'>
                    {t({
                        id: `home-cleaning-couches.mattresses.p-2.title`,
                        message: `Categories`
                    })}
                </h1>
                <ul className='list-disc pl-10'>
                    <li>
                        {t({
                            id: `home-cleaning-couches.mattresses.p-2.item-1`,
                            message: `Single layer price: €32.00`
                        })}
                    </li>
                    <li>
                        {t({
                            id: `home-cleaning-couches.mattresses.p-2.item-2`,
                            message: `Double layer price: €60.00`
                        })}
                    </li>
                </ul>
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

ServicesHomeCleaningMattresses.getLayout = function getLayout(
    page: ReactElement
) {
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

export default ServicesHomeCleaningMattresses;

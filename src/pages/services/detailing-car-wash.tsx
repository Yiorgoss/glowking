import { ReactElement, useState } from 'react';

import SidebarLayout from '@/layouts/sidebarLayout';
import TabSectionLayout from '@/layouts/tabSectionLayout';
import LandingLayout from '@/layouts/landingLayout';

import { loadTranslation } from '@/utils/utils';
import { GetServerSideProps, GetStaticProps } from 'next';

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
const ServicesDetailingCarWash = () => {
    return <div>rsta</div>;
};

ServicesDetailingCarWash.getLayout = function getLayout(page: ReactElement) {
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

export default ServicesDetailingCarWash;

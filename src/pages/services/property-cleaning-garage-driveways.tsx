import { ReactElement, useState } from 'react';

import LandingLayout from '@layouts/landingLayout';
import SidebarLayout from '@/layouts/sidebarLayout';

import { loadTranslation } from '@/utils/utils';
import { GetServerSideProps, GetStaticProps } from 'next';

import { t } from '@lingui/macro';

import Button from '@/components/common/button/button';

const getServerSideProps: GetServerSideProps = async (ctx) => {
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
const ServicesPropertyCleaningGarageDriveways = () => {
    return (
        <div>
            <h1 className='py-10 text-3xl font-semibold'>
                Property Cleaning Services
            </h1>
            <div>
                <h2 className='font-md pt-5 text-xl'>Sidewalk Cleaning</h2>
                <div className='pt-5 '>
                    At Glow King we undertake to clean your sidewalk. Beside you
                    in every need!
                </div>
                <div className='pt-3'>Cost: €6.00 ​​per m2</div>
                <h2 className='font-md pt-12 text-xl'>Service Area Cleaning</h2>
                <div className='font-md pt-5'>
                    At Glow King we undertake to clean your plot. Beside you in
                    every need!
                </div>
                <div className='pt-5 font-semibold'>
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

ServicesPropertyCleaningGarageDriveways.getLayout = function getLayout(
    page: ReactElement
) {
    return (
        <LandingLayout>
            <SidebarLayout>{page}</SidebarLayout>
        </LandingLayout>
    );
};

export default ServicesPropertyCleaningGarageDriveways;

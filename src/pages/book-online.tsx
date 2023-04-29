import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { PrismaClient, Category } from '@prisma/client';
import useSWR from 'swr';

import LandingLayout from '@/layouts/landingLayout';

import { loadTranslation } from '@/utils/utils';
import MultiStepForm from '@/components/multiStepForm';

import { server } from '@/config';

export const getStaticProps: GetStaticProps = async (ctx) => {
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

const BookOnline = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <MultiStepForm />
        </div>
    );
};

BookOnline.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default BookOnline;

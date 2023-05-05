import { useRouter } from 'next/router';

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
    const {query} = useRouter()
    let category
    if (query.category){
        category = +query.category
    }
    return (
        <div className='container mx-auto mt-[100px]'>
            <MultiStepForm categoryId={category}/>
        </div>
    );
};

BookOnline.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default BookOnline;

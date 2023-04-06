import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ReactElement } from 'react';

import { t, Trans } from '@lingui/macro';

import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';
import LandingLayout from '@layouts/landingLayout';
import ImageEffect from '@components/imageEffect';
import OverlayImage from '@components/overlayImage';

import { loadTranslation } from '@/utils/utils';

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

const Portfolio: PageWithHeaderLayout = () => {
    const ImageGallery = [
        {
            src: '/media/images/carwash-portfolio/portfolio_10.jpeg',
            alt: 'frontal picture of a soapy lamborghini'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_9.png',
            alt: 'rear shot of a clean lamborghini'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_8.jpeg',
            alt: 'wheel being washed'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_6.jpeg',
            alt: 'side view of a glistening car post wash'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_5.jpeg',
            alt: 'freshly washed car interior'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_3.jpeg',
            alt: 'car full of soap'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_2.jpeg',
            alt: 'mercedes logo closeup with soap'
        },
        {
            src: '/media/images/carwash-portfolio/portfolio_4.jpeg',
            alt: 'soap on a car being whiped off'
        },
        {
            src: '/media/images/carwash-portfolio/collage_wash.jpg',
            alt: 'a picture showing the inside and outside of a car before and after a carwash'
        }
    ];

    return (
        <div className=' container mx-auto mt-[100px]'>
            <Head>
                <title>
                    {t({
                        id: 'Portfolio.head.title',
                        message:
                            'South Athens car cleaning services at your door'
                    })}
                </title>
            </Head>
            <h1 className='px-10 pt-10 text-center text-6xl font-bold tracking-wider'>
                <Trans id='Portfolio.header'>Our Portfolio</Trans>
            </h1>
            <div className='grid grid-cols-3 gap-5 pt-10'>
                {ImageGallery.map(({ src, alt }, index) => (
                    <div className='' key={index}>
                        <OverlayImage src={src} alt={alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Portfolio;
/*

 */

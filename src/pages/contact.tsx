import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { ReactElement, useState, useEffect } from 'react';

import LandingLayout from '@layouts/landingLayout';
import { t } from '@lingui/macro';

import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';

import FAQSection from "@/components/faqSection"
import BookingForm from '@/components/bookingForm';

import { loadTranslation } from '@/utils/utils';
import { GetServerSideProps, GetStaticProps } from 'next';
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

const Contact: PageWithHeaderLayout = () => {
    //TODO: refactor form into compound component
    //TODO: remove form elements and instead use react and axios/fetch

    const [responsiveImage, setResponsiveImage] = useState(
        <Image
            className='object-cover'
            src='/media/images/banner_mobile.png'
            alt=''
            fill
        />
    );

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth >= 800) {
                setResponsiveImage(
                    <Image
                        className='object-cover'
                        src='/media/images/banner_desktop.jpeg'
                        alt=''
                        fill
                    quality={1}
                    />
                );
            } else {
                setResponsiveImage(
                    <Image
                        className='object-cover'
                        src='/media/images/banner_mobile.png'
                        alt=''
                        fill
                    quality={1}
                    />
                );
            }
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array heightensures that effect is only run on mount
    return (
        <div className='mx-auto mt-[100px]'>
            <Head>
                <title>
                    {t({
                        id: 'Contact.head.title',
                        message:
                            'Mobile Industrial Cleaning | Location Of your Choice'
                    })}
                </title>
                <meta
                    name='description'
                    content={t({
                        id: 'Contact.head.meta.description',
                        message:
                            "Want a professional car wash but don't want to leave your house? Call us or arrange a booking now. Anywhere in south athens!!"
                    })}
                />
            </Head>
            <div className='my-10 pb-20'>
                <div className='relative mt-[100px] h-[300px] w-screen overflow-hidden '>
                    {responsiveImage}
                    <h2 className='absolute inset-x-0 bottom-0 my-20 pb-10 pt-10 text-center text-5xl font-semibold tracking-wider text-primary'>
                        {t({ id: 'Contact.contactUs', message: 'Contact Us' })}
                    </h2>
                </div>
                <div className='grid grid-cols-1 divide-y p-8 tracking-wider md:mt-20 md:grid-cols-2 md:divide-x md:divide-y-0 '>
                    <div className='py-6 text-right text-6xl md:pr-10 '>
                        {t({
                            id: 'Contact.welovetohelp',
                            message: 'We love to'
                        })}
                        <br />
                        <span className='font-bold  uppercase text-tertiary md:text-7xl'>
                            {' '}
                            {t({
                                id: 'Contact.welovetohelphelp',
                                message: 'help'
                            })}
                        </span>
                    </div>
                    <div className='my-auto flex flex-col pt-10 pl-10 text-2xl'>
                        <div className='text-lg md:text-2xl '>
                            <span className='text-xl font-semibold md:text-3xl'>
                                {t({ id: 'Contact.phone', message: 'Phone:' })}
                            </span>{' '}
                            <Link href='tel:6980000015'>6980 000 015</Link>
                        </div>
                        <div className='my-8 pl-10 text-xl font-bold md:text-6xl'>
                            {t({ id: 'Contact.orBy', message: 'Or Via' })}
                        </div>
                        <div className='text-lg md:text-2xl'>
                            <span className='text-xl font-semibold md:text-3xl'>
                                Email:
                            </span>{' '}
                            glowkingath@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 container mx-auto">
                <FAQSection />
            </div>
        </div>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Contact;

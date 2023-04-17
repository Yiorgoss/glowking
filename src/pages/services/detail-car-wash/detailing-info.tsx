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
const ServicesDetailingInfo = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `detail-car-wash.detailing.title`,
                    message: `Detailing Information`
                })}
            </h1>
            <div>
                <h2 className=' py-5 text-xl font-medium'>
                    {t({
                        id: `detail-car-wash.detailing.p-1.title`,
                        message: `Shock absorber + Wheel arch + Disc cleaning`
                    })}
                </h2>
                <div className='pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-1.1.content`,
                        message: `The suspension is the system that regulates the contact and grip of the car through the tires and shock absorbers with the road surface and is one of the basic systems that the car has for our safe and stable movement. Shock absorbers and springs are the main components of the suspension system, they are responsible for adjusting and absorbing the shocks that contribute to the "hold" of the car. Timely cleaning of the shock absorber is imperative for the safety of the car.`
                    })}
                </div>
                <div className='pt-3 pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-1.2.content`,
                        message: `Oil and Spray of excellent quality are the secret to properly cleaning your disc. Front and rear discs are one of the most important parts of your vehicle, and for that reason alone, you deserve only the best. Our experienced staff, our excellent materials, our specialized staff are the answer to your questions and the solution to your problems.`
                    })}
                </div>
                <h2 className=' py-5 text-xl font-medium'>
                    {t({
                        id: `detail-car-wash.detailing.p-2.title`,
                        message: `Rims`
                    })}
                </h2>
                <div className='pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-2.1.content`,
                        message: `Aluminum wheels on a car are among the places that get dirty very quickly. Sand, mud, dust and anything else that may be on the road surface will stick to and stain the tire rim. Without systematic cleaning, in fact, these impurities can lead to the destruction of the aluminum. For this reason, cleaning the rims at least 1-2 times a month is imperative and we can do it for you. Learn how!`
                    })}
                </div>
                <h2 className=' py-5 text-xl font-medium'>
                    {t({
                        id: `detail-car-wash.detailing.p-3.title`,
                        message: `Polishing in places inaccessible by the human hand`
                    })}
                </h2>
                <div className='pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-3.1.content`,
                        message: `We also have specialized staff and specialized machinery to be able to polish in detail every point inaccessible by the human hand, every difficulty for you...a challenge for us!`
                    })}
                </div>
                <h2 className=' py-5 text-xl font-medium'>
                    {t({
                        id: `detail-car-wash.detailing.p-4.title`,
                        message: `Nanotechnology`
                    })}
                </h2>
                <div className='pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-4.1.content`,
                        message: `Nanotechnology is a science that has the ability to control the dimensions of materials at the nanometer scale and has demonstrated the impressive properties they acquire when their dimensions are only a few nanometers.`
                    })}
                </div>
                <div className='pt-3 pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-4.2.content`,
                        message: `The interest of science has turned to nanotechnology materials. Through research, they found that the particles of such materials have very different properties during their formation compared to the large particles that are visible to the naked eye or with a simple optical microscope.`
                    })}
                </div>
                <div className='pt-3 pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-4.3.content`,
                        message: `Nanotechnology products are specially designed to offer protection to your favorite fabrics, wooden surfaces, glass, plastic items or stainless steel, even your floors, tiles, car rims.`
                    })}
                </div>
                <div className='pt-3 pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-4.4.content`,
                        message: `Everything is protected from stains, bacteria, water, moisture and everything stays intact for a much longer time. Absolute protection is achieved by avoiding the use of harmful chemicals.`
                    })}
                </div>
                <h2 className='py-5 text-xl'>
                    {t({
                        id: `detail-car-wash.detailing.p-5.title`,
                        message: `Underbody washing / Chassis`
                    })}
                </h2>
                <div className='pt-3 pl-3'>
                    {t({
                        id: `detail-car-wash.detailing.p-5.1.content`,
                        message: `Another point that we will often have to maintain is the bottom of the car, especially for cars that are exposed to sea or snow. The lower part of the car is washed after using the special chassis washing machine. Then we spray the cleaner and rinse thoroughly to clean everywhere inside the wheels and all the mechanical parts that are exposed underneath.`
                    })}
                </div>
            </div>
            <h2 className='pt-10 text-2xl font-semibold tracking-wider '>
                {t({
                    id: `detailing-car-wash.list.title`,
                    message: `Our Process`
                })}
            </h2>
            <ol className='list-decimal pt-5'>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-1.title`,
                            message: `Exterior paint care and polishing`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-1.content`,
                            message: `Perfectly detailed, the paint on your vehicle draws the most attention. Primarily, the exterior is pressure washed to remove dirt and then hand dried. Finally, a hand or machine polish gives the surface an even shine and removes fine scratches to give the result you deserve.`
                        })}
                    </div>
                </li>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-2.title`,
                            message: `CLEANING AND POLISHING OF EXTERNAL SURFACES`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-2.content`,
                            message: `Exterior surfaces and finishes such as plastic, rubber and chrome can fade and crack without proper care or under other adverse conditions. During a full detailing, the exterior surfaces are cleaned and then protected. A plastic sealer can be applied to rubber or vinyl and the chrome tones will be polished.`
                        })}
                    </div>
                </li>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-3.title`,
                            message: `WHEELS AND TIRES DETAILS`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-3.content`,
                            message: `Brake dust, dirt and grime from the road collects on your wheels and, over time, these blemishes become difficult to remove. A full service detail will completely restore your vehicle's wheels, remove those stubborn stains and polish the chrome, steel or aluminum. The tires will also be protected with rubber sealant, which gives them a glossy finish.`
                        })}
                    </div>
                </li>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-4.title`,
                            message: `BIOLOGICAL CLEANING IN THE INTERIOR OF THE CAR`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-4.content`,
                            message: `Every corner of your vehicle's interior tends to collect dust and dirt. The retailer's job is to remove dirt and dust from hard-to-reach cracks and crevices. This service includes all surfaces including the dashboard, entertainment console, inside doors, under the seats and any other interior surface. Once the dirt is removed, sealants are applied, which give these surfaces a high-quality shine.`
                        })}
                    </div>
                </li>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-5.title`,
                            message: `INTERIOR DETAIL`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-5.content`,
                            message: `Leather requires special preparation and handling when cleaning. Some traditional car cleaning products are very caustic to the skin and may even do more harm than good. During an interior detail, any leather surfaces on your vehicle will be properly cleaned and conditioned. This will help restore the skin's natural glow, as well as protect it from stains and damage from water and salt or other dirt.`
                        })}
                    </div>
                </li>
                <li className='py-5 pl-2 '>
                    <h3 className='font-md text-xl uppercase'>
                        {t({
                            id: `detailing-car-wash.list-6.title`,
                            message: `CARPET DEEP CLEANING`
                        })}
                    </h3>
                    <div className='pt-5 pl-5'>
                        {t({
                            id: `detailing-car-wash.list-6.content`,
                            message: `Most automotive retailers do not have the equipment to properly clean, deodorize and wash carpet. A full detail service restores the carpet, first with a deep vacuum. The carpet is then washed with shampoo and deodorized.`
                        })}
                    </div>
                </li>
            </ol>
        </div>
    );
};

ServicesDetailingInfo.getLayout = function getLayout(page: ReactElement) {
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

export default ServicesDetailingInfo;

import { GetServerSideProps, GetStaticProps } from 'next';
import { ReactElement, useState } from 'react';

import { t, defineMessage } from '@lingui/macro';

import { AiOutlineArrowUp } from 'react-icons/ai';

import SidebarLayout from '@/layouts/sidebarLayout';
import TabSectionLayout from '@/layouts/tabSectionLayout';
import LandingLayout from '@/layouts/landingLayout';

import CardExtra from '@/components/cardExtra';
import Card from '@/components/common/card/card';
import { loadTranslation } from '@/utils/utils';

import { carServiceSubCategory } from '@/data/serviceData';
import { carServiceExtras } from '@/data/serviceData';

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
const ServicesCarCleaning = () => {
    return (
        <div className='py-5 text-lg'>
            <h1 className='py-10 text-3xl font-semibold tracking-wider'>
                {t({
                    id: `detail-car-wash.car-cleaning.title`,
                    message: `Car Services`
                })}
            </h1>
            <div>
                <h2 className='pt-5 text-2xl font-medium'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.title`,
                        message: `External + Internal Cleaning`
                    })}
                </h2>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.2`,
                        message: `The external cleaning is done without the use of a brush or sponge but only with the use of hot water for less damage to the car's exterior paint.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.3`,
                        message: `At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the fog lights and rims, removing insects, protective wax and rinsing the car with deionized water!`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.4`,
                        message: `The vehicle is then thoroughly wiped.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.5`,
                        message: `In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.6`,
                        message: `Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-1.7`,
                        message: `Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.`
                    })}
                </div>
                <div className='pt-5 pl-10 text-2xl font-semibold'>30,00 €</div>
            </div>
            <div>
                <h2 className='pt-10 text-2xl font-medium'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.title`,
                        message: `Organic Matter Cleaning`
                    })}
                </h2>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.1`,
                        message: `In biological cleaning, we remove from the cabin area, apart from stains, we clean fungi, bacteria and anything that burdens the human body.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.2`,
                        message: `We disinfect the seats, the sky, floors, luggage compartment and side upholstery.`
                    })}
                </div>
                <div className='pt-5 pl-3'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.3`,
                        message: `We also compulsorily disinfect the air ducts of the car, removing the stench from the use of the air conditioner.`
                    })}
                </div>
                <div className='pt-5 pl-3 font-semibold'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.4`,
                        message: `The products used for cleaning and disinfection are certified and friendly to humans and the environment, complying with EU standards.`
                    })}
                </div>
                <div className='pt-5 pl-10 text-2xl font-semibold'>80,00 €</div>
            </div>
            <div className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
                <div className='rounded-lg outline outline-2 outline-secondary '>
                    <Card className='h-full bg-gradient-to-tl from-gray-100 via-gray-400 to-gray-700'>
                        <Card.Header className=' text-center'>
                            Silver Wash
                        </Card.Header>
                        <Card.Content className='p-5 text-base'></Card.Content>
                    </Card>
                </div>
                <div className='rounded-lg outline outline-2 outline-secondary '>
                    <Card className='h-full bg-gradient-to-tl from-yellow-100 via-yellow-400 to-yellow-600'>
                        <Card.Header className='py-4 text-center text-2xl font-semibold'>
                            Gold Wash
                        </Card.Header>
                        <Card.Content></Card.Content>
                    </Card>
                </div>
                <div className='rounded-lg outline outline-2 outline-secondary '>
                    <Card className='h-full bg-gradient-to-tl from-purple-100 via-purple-400 to-purple-700'>
                        <Card.Header className='py-4 text-center text-2xl font-semibold'>
                            Detailing Wash
                        </Card.Header>
                        <Card.Content>
                            <ol className=' pt-2 text-base'>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-1.title`,
                                            message: `Exterior paint care and polishing`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-1.content`,
                                            message: `Perfectly detailed, the paint on your vehicle draws the most attention. Primarily, the exterior is pressure washed to remove dirt and then hand dried. Finally, a hand or machine polish gives the surface an even shine and removes fine scratches to give the result you deserve.`
                                        })}
                                    </div>
                                </li>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-2.title`,
                                            message: `CLEANING AND POLISHING OF EXTERNAL SURFACES`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-2.content`,
                                            message: `Exterior surfaces and finishes such as plastic, rubber and chrome can fade and crack without proper care or under other adverse conditions. During a full detailing, the exterior surfaces are cleaned and then protected. A plastic sealer can be applied to rubber or vinyl and the chrome tones will be polished.`
                                        })}
                                    </div>
                                </li>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-3.title`,
                                            message: `WHEELS AND TIRES DETAILS`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-3.content`,
                                            message: `Brake dust, dirt and grime from the road collects on your wheels and, over time, these blemishes become difficult to remove. A full service detail will completely restore your vehicle's wheels, remove those stubborn stains and polish the chrome, steel or aluminum. The tires will also be protected with rubber sealant, which gives them a glossy finish.`
                                        })}
                                    </div>
                                </li>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-4.title`,
                                            message: `BIOLOGICAL CLEANING IN THE INTERIOR OF THE CAR`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-4.content`,
                                            message: `Every corner of your vehicle's interior tends to collect dust and dirt. The retailer's job is to remove dirt and dust from hard-to-reach cracks and crevices. This service includes all surfaces including the dashboard, entertainment console, inside doors, under the seats and any other interior surface. Once the dirt is removed, sealants are applied, which give these surfaces a high-quality shine.`
                                        })}
                                    </div>
                                </li>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-5.title`,
                                            message: `INTERIOR DETAIL`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-5.content`,
                                            message: `Leather requires special preparation and handling when cleaning. Some traditional car cleaning products are very caustic to the skin and may even do more harm than good. During an interior detail, any leather surfaces on your vehicle will be properly cleaned and conditioned. This will help restore the skin's natural glow, as well as protect it from stains and damage from water and salt or other dirt.`
                                        })}
                                    </div>
                                </li>
                                <li className='py-5 pl-2 '>
                                    <h3 className='font-md text-lg uppercase'>
                                        {t({
                                            id: `detailing-car-wash.list-6.title`,
                                            message: `CARPET DEEP CLEANING`
                                        })}
                                    </h3>
                                    <div className='pt-2 pl-5'>
                                        {t({
                                            id: `detailing-car-wash.list-6.content`,
                                            message: `Most automotive retailers do not have the equipment to properly clean, deodorize and wash carpet. A full detail service restores the carpet, first with a deep vacuum. The carpet is then washed with shampoo and deodorized.`
                                        })}
                                    </div>
                                </li>
                            </ol>
                        </Card.Content>
                    </Card>
                </div>
            </div>
            <div className='mt-10 border-t-4 border-secondary pb-4'>
                <div className='py-10 font-semibold'>
                    {t({
                        id: `detail-car-wash.car-cleaning.p-2.5`,
                        message: `We also offer a large list of aditional optional cleaning services for your car`
                    })}
                </div>
                <div className='mx-5 grid grid-cols-1 gap-5 md:mx-0 md:grid-cols-3'>
                    {carServiceExtras.map(
                        ({ title, content, price, href, src }, index) => (
                            <div className='h-full w-full' key={index}>
                                <CardExtra
                                    href={href}
                                    header={title}
                                    content={content}
                                    price={price}
                                    src={src}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

ServicesCarCleaning.getLayout = function getLayout(page: ReactElement) {
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

export default ServicesCarCleaning;

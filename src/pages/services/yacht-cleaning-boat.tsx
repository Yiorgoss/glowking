import { ReactElement } from 'react';

import LandingLayout from '@layouts/landingLayout';
import SidebarLayout from '@/layouts/sidebarLayout';

import { loadTranslation } from '@/utils/utils';
import { GetServerSideProps } from 'next';
import Button from '@/components/common/button/button';

import { t, Trans } from '@lingui/macro';

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
const ServicesYachtCleaningBoat = () => {
    return (
        <div className='container mx-auto px-5 text-lg'>
            <h1 className='py-10 text-3xl font-medium'>
                {t({
                    id: `yacht-cleaning-boat.title`,
                    message: `Yatch Cleaning`
                })}
            </h1>
            <div className='pt-5'>
                {t({
                    id: `yacht-cleaning-boat.p-1.1`,
                    message: `The cleaning is done without the use of a brush or sponge but only with the use of hot water for less damage to the car's exterior paint.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `yacht-cleaning-boat.p-1.2`,
                    message: `At Glow King we offer you a complete cleaning with pre-washing and mainly washing the machine with active foam, cleaning the fog lights and rims, removing insects, protective wax and rinsing the car with deionized water!`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `yacht-cleaning-boat.p-1.3`,
                    message: `Your machine is then thoroughly wiped.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `yacht-cleaning-boat.p-1.4`,
                    message: `In cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.`
                })}
            </div>
            <div className='pt-5'>
                {t({
                    id: `yacht-cleaning-boat.p-1.5`,
                    message: `We blow the inside of your machine to remove the dust and then clean with a vacuum cleaner. Finally, we proceed with cleaning and maintenance of all plastic surfaces, dry cleaning and perfuming the saddle of your machine.`
                })}
            </div>
            <div className='text-md pt-3'>
                {t({
                    id: `yacht-cleaning-boat.p-1.6`,
                    message: `Minimum fee to come to your place: €30.00`
                })}
            </div>
            <ul className='pt-5'>
                <div>
                    <h1 className='pt-8 text-2xl font-medium'>
                        {t({
                            id: `yacht-cleaning-boat.p-2.title`,
                            message: `Biological Boat Cleaning`
                        })}
                    </h1>
                    <div className='pt-5'>
                        {t({
                            id: `yacht-cleaning-boat.p-2.desc`,
                            message: `We undertake the biological cleaning of your boat, specifically:`
                        })}
                    </div>
                    <ul className=' list-disc pl-10 pt-5'>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-2.item-1`,
                                message: `Cleaning materials and professional equipment meet all modern standards.`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-2.item-2`,
                                message: `Carpets`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-2.item-3`,
                                message: `Lounges`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-2.item-4`,
                                message: `Mattresses`
                            })}
                        </li>
                    </ul>
                    <div className='pt-8 font-semibold'>
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
                <div>
                    <h1 className='pt-5 text-2xl font-medium'>
                        {t({
                            id: `yacht-cleaning-boat.p-3.title`,
                            message: `Biological Boat Cleaning`
                        })}
                    </h1>
                    <div className='pt-5'>
                        {t({
                            id: `yacht-cleaning-boat.p-3.1`,
                            message: `Our company has been offering cleaning services since 1994 to professional and private boats, motor & sailing yachts / power boats / inflatables, knowing very well the requirements of a boat, the materials to be used for each surface and the attention to be paid to transportation of machinery.`
                        })}
                    </div>
                    <div className='pt-3'>
                        {t({
                            id: `yacht-cleaning-boat.p-3.2`,
                            message: `Services we offer are the following:`
                        })}
                    </div>
                    <ul className='mt-5 list-disc pl-10'>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-1`,
                                message: `Internal cleaning`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-2`,
                                message: ` Internal biological with steam`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-3`,
                                message: ` External Cleaning`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-4`,
                                message: ` Exterior Cleaning detaling*`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-5`,
                                message: `Biological cleaning of fabrics / mattresses & carpets`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-6`,
                                message: `Washing carpets with rotary machine & extraction`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-7`,
                                message: `Clothing laundry`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-8`,
                                message: ` Stainless steel polishing`
                            })}
                        </li>
                        <li>
                            {t({
                                id: `yacht-cleaning-boat.p-3.item-9`,
                                message: `Tender cleanings`
                            })}
                        </li>
                    </ul>
                    <div className=' pt-5 font-semibold'>
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
            </ul>
        </div>
    );
};

ServicesYachtCleaningBoat.getLayout = function getLayout(page: ReactElement) {
    return (
        <LandingLayout>
            <SidebarLayout>{page}</SidebarLayout>
        </LandingLayout>
    );
};

export default ServicesYachtCleaningBoat;

import { Component, SetStateAction, Dispatch } from 'react';
import Image from 'next/image';

import { i18n, MessageDescriptor } from '@lingui/core';

import { AiFillPlusCircle, AiFillCheckCircle } from 'react-icons/ai';

import Card from '@/components/common/card/card';

import { carServiceExtras } from '@/data/serviceData';

const OptionalExtras = ({
    extras,
    setExtras
}: {
    extras: Map<string, number>;
    setExtras: Dispatch<SetStateAction<Map<string, number>>>;
}) => {
    const addExtra = (
        price: number | MessageDescriptor,
        title: MessageDescriptor
    ) => {
        const parsedPrice = typeof price === 'number' ? price : 0; // will always be a number
        const name = i18n._(title); // guys only speak greek

        if (extras.has(name)) {
            const tmpMap = extras;
            tmpMap.delete(name);
            setExtras(new Map(tmpMap));
        } else {
            setExtras((map) => new Map(map.set(name, parsedPrice)));
        }
    };
    return (
        <>
            <div className='mb-10 grid grid-cols-3 gap-5'>
                <div
                    className='rounded-lg outline outline-2 outline-secondary '
                    onClick={() =>
                        setExtras((map) => new Map(map.set('Base Wash', 30)))
                    }>
                    <Card
                        className='h-full py-4'
                        colorPreset={Card.ColorPreset.Silver}>
                        <Card.Header className=' text-center'>
                            Silver Wash
                        </Card.Header>
                        <Card.Content className='p-5 text-base'>
                           hr
                        </Card.Content>
                        <Card.Price price={30} />
                    </Card>
                </div>
                <div
                    className='rounded-lg outline outline-2 outline-secondary hover:scale-[1.04] '
                    onClick={() =>
                        setExtras((map) => new Map(map.set('Base Wash', 50)))
                    }>
                    <Card
                        className=' h-full py-4'
                        colorPreset={Card.ColorPreset.Gold}>
                        <Card.Header className='py-4 text-center text-2xl font-semibold'>
                            Gold Wash
                        </Card.Header>
                        <Card.Content>test</Card.Content>
                        <Card.Price price={50} />
                    </Card>
                </div>
                <div
                    className='overflow-hidden rounded-lg outline outline-2 outline-secondary transition transition-transform duration-1000 hover:scale-[1.04] '
                    onClick={() =>
                        setExtras((map) => new Map(map.set('Base Wash', 80)))
                    }>
                    <Card
                        className='h-full py-4'
                        colorPreset={Card.ColorPreset.Detailing}>
                        <Card.Header className='py-4 text-center text-2xl font-semibold'>
                            Detailing Wash
                        </Card.Header>
                        <Card.Content className='px-3 py-4'>
                            Εξωτερικό πακέτο γυαλίσματος και κεραμικής
                            επίστρωσης αυτοκινήτου, περιλαμβάνει: Εξωτερικό
                            πλύσιμο (αμάξωμα, ζάντες) Συντήρηση εξωτερικών
                            πλαστικών & ελαστικών Αφαίρεση επικαθίσεων και ρύπων
                            με πλαστελίνη (detailing clay bar) Εφαρμογή με το
                            χέρι ειδικής αλοιφής γυαλίσματος που αποκαθιστά τη
                            γυαλάδα του χρώματος Κεραμική επίστρωση CERAMIC,
                            προσφέροντας μια super υδροφοβική προστασία και ένα
                            απίθανο γυάλισμα & φινίρισμα (3 μήνες διάρκεια)
                        </Card.Content>
                        <Card.Price price={80} />
                    </Card>
                </div>
            </div>
            <div className='mx-2 grid grid-cols-2 gap-5 md:mx-0 md:grid-cols-4 '>
                {carServiceExtras.map(({ price, title, content }, index) => (
                    <div
                        className=''
                        key={index}
                        onClick={() => addExtra(price, title)}>
                        <Card
                            className={`h-full rounded-lg p-2 outline outline-4 transition-transform duration-300 hover:scale-[1.02] ${
                                extras.has(i18n._(title))
                                    ? 'outline-green-400'
                                    : 'outline-tertiary'
                            }`}>
                            <div className='flex h-full flex-col justify-between'>
                                <Card.Header className='py-5 text-xl font-semibold'>
                                    {title}
                                </Card.Header>
                                <Card.Content className='mx-2'>
                                    {content}
                                </Card.Content>
                                <div className='mt-5 flex h-[40px] justify-between '>
                                    <Card.Price price={price} />
                                    <div>
                                        {extras.has(i18n._(title)) ? (
                                            <AiFillCheckCircle className='inline h-10 w-10 text-green-400 hover:scale-110' />
                                        ) : (
                                            <AiFillPlusCircle className='inline h-10 w-10 text-tertiary hover:scale-110' />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OptionalExtras;

import { Component, SetStateAction, Dispatch } from 'react';
import Image from 'next/image';

import { i18n, MessageDescriptor } from '@lingui/core';
import {Extra} from "@prisma/client"
import { AiFillPlusCircle, AiFillCheckCircle } from 'react-icons/ai';

import Card from '@/components/common/card/card';

import { carServiceExtras } from '@/data/serviceData';

const OptionalExtras = ({
    extras,
    setExtras,
    data
}: {
    extras: Map<string, number>;
    setExtras: Dispatch<SetStateAction<Map<string, number>>>;
    data: Extra[]
}) => {
    const addExtra = (
        price: number | MessageDescriptor,
        title: string | MessageDescriptor
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
            <div className='mx-2 grid grid-cols-2 gap-5 md:mx-0 md:grid-cols-3 '>
                {data.map(({ price, title, description }, index) => (
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
                                <div>
                                <Card.Header className='py-5 text-xl font-semibold'>
                                    {title}
                                </Card.Header>
                                <Card.Content className='mx-2'>
                                    {description}
                                </Card.Content>
                                </div>
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

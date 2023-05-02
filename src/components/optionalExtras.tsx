import { useEffect, Component, SetStateAction, Dispatch } from 'react';
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
    extras: Map<number, Extra>;
    setExtras: Dispatch<SetStateAction<Map<number, Extra>>>;
    data: Extra[]
}) => {
    const addExtra = (
        extra: Extra
    ) => {
        //const parsedPrice = typeof price === 'number' ? price : 0; // will always be a number
        //const name = extra.title; // guys only speak greek

        if (extras.has(extra.id)) {
            const tmpMap = extras;
            tmpMap.delete(extra.id);
            setExtras(new Map(tmpMap));
        } else {
            setExtras((map) => new Map(map.set(extra.id, extra)));
        }
    };

    //useEffect(() => (
    //    console.log(extras)
    //), [extras, setExtras])

    return (
        <>
            <div className='mx-2 grid grid-cols-2 gap-5 md:mx-0 md:grid-cols-3 '>
                {data.map((extra, index) => (
                    <div
                        className=''
                        key={index}
                        onClick={() => addExtra(extra)}>
                        <Card
                            className={`h-full rounded-lg p-2 outline outline-4 transition-transform duration-300 hover:scale-[1.02] ${
                                extras.has(extra.id)
                                    ? 'outline-green-400'
                                    : 'outline-tertiary'
                            }`}>
                            <div className='flex h-full flex-col justify-between'>
                                <div>
                                <Card.Header className='py-5 text-xl font-semibold'>
                                    {extra.title}
                                </Card.Header>
                                <Card.Content className='mx-2'>
                                    {extra.description}
                                </Card.Content>
                                </div>
                                <div className='mt-5 flex h-[40px] justify-between '>
                                    <Card.Price price={extra.price} />
                                    <div>
                                        {extras.has(extra.id) ? (
                                            <AiFillCheckCircle className='inline h-10 w-10 text-green-400' />
                                        ) : (
                                            <AiFillPlusCircle className='inline h-10 w-10 text-tertiary' />
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

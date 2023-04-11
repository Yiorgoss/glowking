import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';

import Card from '@components/common/card/card';

import { i18n, MessageDescriptor } from '@lingui/core';

const CardMain = ({
    href,
    header,
    content,
    image,
    className = '',
    price,
    src
}: {
    href: string;
    price: number | MessageDescriptor;
    header?: string | MessageDescriptor;
    content?: string | MessageDescriptor;
    image?: string;
    className?: string | undefined;
    src?: string;
}) => {
    const headerStr = header
        ? typeof header === 'string'
            ? header
            : i18n._(header!)
        : '';
    const contentStr = content
        ? typeof content === 'string'
            ? content
            : i18n._(content!)
        : '';

    return (
        <Link href={href} className='h-full'>
            <Card
                className={`mx-auto flex h-full flex-row overflow-hidden rounded-xl p-4 text-secondary outline outline-4  outline-tertiary transition-transform duration-300 md:hover:scale-[1.05] ${
                    className ?? ''
                }`}>
                <div className='h-[50px] min-w-[60px] max-w-[60px] '>
                    <div className='relative h-full w-full '>
                        <Image
                            src={src as string}
                            alt=''
                            fill
                            sizes='width:60px'
                        />
                    </div>
                </div>
                <div className='mt-2 flex flex-col justify-between pl-3'>
                    <Card.Header className='mb-2 text-lg font-semibold '>
                        {headerStr}
                    </Card.Header>
                    <Card.Content className='overflow-hidden text-ellipsis py-2 text-base'>
                        {contentStr}
                    </Card.Content>
                    <Card.Price price={price} className='mt-auto self-end' />
                </div>
            </Card>
        </Link>
    );
};

export default CardMain;

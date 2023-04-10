import Link from 'next/link';
import { ReactElement } from 'react';

import Card from '@components/common/card/card';

import { i18n, MessageDescriptor } from '@lingui/core';

const CardMain = ({
    href,
    header,
    content,
    image,
    className = '',
    price
}: {
    href: string;
    price: number | MessageDescriptor;
    header?: string | MessageDescriptor;
    content?: string | MessageDescriptor;
    image?: string;
    className?: string | undefined;
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
                className={`mx-auto flex h-full flex-col justify-between overflow-hidden rounded-xl bg-slate-300 p-4 drop-shadow-lg transition-transform duration-300 md:hover:scale-[1.05] ${
                    className ?? ''
                }`}>
                <Card.Header className='mt-8 text-center text-2xl font-medium'>
                    {headerStr}
                </Card.Header>
                <Card.Content className='overflow-hidden text-ellipsis p-5'>
                    {contentStr}
                </Card.Content>
                <Card.Price price={price} className='mt-auto self-end' />
            </Card>
        </Link>
    );
};

export default CardMain;

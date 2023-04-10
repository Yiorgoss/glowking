import Link from 'next/link';
import { ReactElement } from 'react';

import Card from '@components/common/card/card';

import { i18n, MessageDescriptor } from '@lingui/core';

const CardMain = ({
    href,
    header,
    content,
    image,
    className = ''
}: {
    href: string;
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
        <Card
            className={`mx-auto h-full w-fit w-fit overflow-hidden rounded-xl bg-slate-300 p-4 drop-shadow-lg transition-transform md:hover:scale-[1.05] ${className}`}>
            <Link href={href}>
                <Card.Graphic
                    className='max-h-[400px] min-h-[300px] w-full'
                    src={image}
                />

                <Card.Header className='mt-8 text-center text-2xl font-medium'>
                    {headerStr}
                </Card.Header>
                <Card.Content className='overflow-hidden text-ellipsis p-5'>
                    {contentStr}
                </Card.Content>
            </Link>
        </Card>
    );
};

export default CardMain;

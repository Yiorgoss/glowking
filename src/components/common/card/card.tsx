import Image from 'next/image';
import Link from 'next/link';

import { ReactElement, createContext, useState, ReactNode } from 'react';

import { MessageDescriptor, i18n } from '@lingui/core';

import { SlWallet } from 'react-icons/sl';

import { isMessageDescriptor } from '@/utils/utils';
//const CardContext = createContext({});

const Graphic = ({
    src,
    alt = '',
    h,
    w,
    className
}: {
    src?: string;
    alt?: string;
    h?: number;
    w?: number;
    className?: string;
}) => {
    if (!src) {
        return <></>;
    }

    let imageProps;
    // fill nextjs image if height and width not provided
    if (h != null && w != null) {
        imageProps = { height: h, width: w };
    } else {
        imageProps = { fill: true };
    }
    if (src == null) {
        return <></>;
    }
    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            <Image
                className='object-cover'
                src={src}
                alt={alt}
                {...imageProps}
                sizes='(max-width:768px) 100wv,
            20vw'
            />
        </div>
    );
};

//Content and Header seperate for SEO reasons
const Header = ({
    children,
    className
}: {
    children: string | MessageDescriptor;
    className?: string;
}) => {
    return <h3 className={className}> {i18n._(children)} </h3>;
};

const Content = ({
    children,
    className
}: {
    children: string | MessageDescriptor;
    className?: string;
}) => {
    return <div className={className}>{i18n._(children)}</div>;
};
const Price = ({
    price,
    className
}: {
    price: number | MessageDescriptor;
    className?: string;
}) => {
    let useWallet = false;
    const formatPrice = (price: number) => {
        useWallet = true;
        return '' + price + '.00 €';
    };
    const priceStr = price
        ? typeof price === 'number'
            ? formatPrice(price)
            : i18n._(price! as string)
        : '';

    return (
        <div className={`${className} text-right`}>
            {useWallet ? (
                <SlWallet className='my-auto mr-2 inline h-6 w-6' />
            ) : (
                <></>
            )}
            {priceStr}
        </div>
    );
};

enum ColorPreset {
    Silver = 'bg-gradient-to-tl from-gray-100 via-gray-400 to-gray-700',
    Gold = 'bg-gradient-to-tl from-yellow-100 via-yellow-400 to-yellow-600',
    Detailing = 'bg-gradient-to-tl from-purple-100 via-purple-400 to-purple-700',
    Custom = ''
}
const Card = ({
    children,
    className,
    colorPreset = ColorPreset.Custom
}: {
    children: ReactElement | ReactElement[];
    className?: string;
    colorPreset?: ColorPreset;
}) => {
    return (
        <div
            className={`flex flex-col justify-between ${colorPreset} ${className}`}>
            {children}
        </div>
    );
};

Card.Header = Header;
Card.Content = Content;
Card.Graphic = Graphic;
Card.Price = Price;
Card.ColorPreset = ColorPreset;

export default Card;

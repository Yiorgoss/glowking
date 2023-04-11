import Image from 'next/image';
import Link from 'next/link';

import { ReactElement, createContext, useState } from 'react';

import { MessageDescriptor, i18n } from '@lingui/core';

import { SlWallet } from 'react-icons/sl';

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
    children?: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
    if (!children) {
        return <></>;
    }
    return <h3 className={className}> {children} </h3>;
};

const Content = ({
    children,
    className
}: {
    children?: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
    if (!children) {
        return <></>;
    }
    return <p className={className}>{children}</p>;
};
const Price = ({
    price,
    className
}: {
    price: number | MessageDescriptor;
    className: string;
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

const Card = ({
    children,
    className
}: {
    children: ReactElement | ReactElement[];
    className?: string;
}) => {
    return <div className={className}>{children}</div>;
};

Card.Header = Header;
Card.Content = Content;
Card.Graphic = Graphic;
Card.Price = Price;

export default Card;

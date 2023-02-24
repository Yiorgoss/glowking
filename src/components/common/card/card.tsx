import Image from "next/image";
import Link from "next/link";

import { ReactElement, createContext } from "react";

//const CardContext = createContext({});

const Graphic = ({
    src,
    alt = "",
    h,
    w,
    className,
}: {
    src?: string;
    alt?: string;
    h?: number;
    w?: number;
    className?: string;
}) => {
        if (!src) {
            return <></>
        }

    let imageProps;
    // fill nextjs image if height and width not provided
    if (h != null && w != null) {
        imageProps = { height: h, width: w };
    } else {
        imageProps = { fill: true };
    }
    if (src ==null) {
        return <></>
    }
    return (
        <div className={`relative ${className}`}>
            <Image className="object-cover" src={src} alt={alt} {...imageProps} />
        </div>
    );
};

//Content and Header seperate for SEO reasons
const Header = ({
    children,
    className,
}: {
    children?: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
    if (!children) {
        return <></>
    }
    return <h3 className={className}> {children} </h3>;
};

const Content = ({
    children,
    className,
}: {
    children?: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
    if (!children) {
        return <></>
    }
    return <div className={className}>{children}</div>;
};

const Card = ({
    children,
    className,
}: {
    children: ReactElement | ReactElement[];
    className?: string;
}) => {
    return <div className={className}>{children}</div>;
};

Card.Header = Header;
Card.Content = Content;
Card.Graphic = Graphic;

export default Card;

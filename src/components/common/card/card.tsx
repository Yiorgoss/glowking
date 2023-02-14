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
    src: string;
    alt?: string;
    h?: number;
    w?: number;
    className?: string;
}) => {
    let imageProps;
    // fill nextjs image if height and width not provided
    if (h != null && w != null) {
        imageProps = { height: h, width: w };
    } else {
        imageProps = { fill: true };
    }
    return (
        <div className={`relative ${className}`}>
            <Image src={src} alt={alt} {...imageProps} />
        </div>
    );
};

//Content and Header seperate for SEO reasons
const Header = ({
    children,
    className,
}: {
    children: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
    return <h3 className={className}> {children} </h3>;
};

const Content = ({
    children,
    className,
}: {
    children: ReactElement | ReactElement[] | string;
    className?: string;
}) => {
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

//export default function Card() {
//  return (
//    <div className="mx-auto w-[300px]  overflow-hidden rounded-xl bg-primary shadow-layered transition-transform duration-300 hover:-translate-y-2  hover:translate-x-0.5 hover:shadow-layered-xl">
//      <Link className="" href="">
//        <div className="relative h-[200px] w-full">
//          <Image
//            className=""
//            src="https://via.placeholder.com/1000x1000.png"
//            alt=""
//            fill
//          />
//        </div>
//        <div className="my-10 text-center text-2xl font-bold"> Heading </div>
//        <div className="break-all p-5">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
//          erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque
//          habitant morbi tristique senectus et netus et malesuada fames ac
//          turpis egestas.
//        </div>
//      </Link>
//    </div>
//  );
//}

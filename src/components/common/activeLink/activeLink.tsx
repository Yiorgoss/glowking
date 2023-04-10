import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({
    href,
    className,
    activeClassName,
    children,
    scroll = true,
    containLevel = 0
}: {
    href: string;
    className?: string;
    activeClassName: string;
    children: ReactElement | ReactElement[] | string;
    scroll?: boolean;
    containLevel?: number;
}) => {
    const { asPath } = useRouter();
    const pathToContain = href.split('/')[containLevel];

    console.log({
        children: children,
        path: href.split('/'),
        contain: containLevel,
        tf: asPath.includes(pathToContain)
    });
    const active =
        containLevel !== 0 && pathToContain !== ''
            ? asPath.includes(pathToContain)
                ? true
                : false
            : asPath === href;

    //    console.log({
    //        containLevel: containLevel,
    //        children: children,
    //        active: active,
    //        asPath: asPath,
    //        href: href,
    //        hrefArr: href.split('/'),
    //        ActiveClass: activeClassName
    //    });
    return (
        <Link
            href={href}
            className={`${className} ${active && activeClassName}`}
            scroll={scroll}>
            {children}
        </Link>
    );
};

export default ActiveLink;

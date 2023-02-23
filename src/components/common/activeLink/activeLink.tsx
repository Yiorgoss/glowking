import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({
    href,
    className,
    activeClassName,
    children,
}: {
    href: string;
    className?: string;
    activeClassName: string;
    children: ReactElement | ReactElement[] | string;
}) => {
    const { asPath } = useRouter();
    const active = asPath === href;

    return (
        <Link
            href={href}
            className={`${className} ${active && activeClassName}`}
        >
            {children}
        </Link>
    );
};

export default ActiveLink

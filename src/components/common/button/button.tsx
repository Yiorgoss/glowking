import Link from 'next/link';

import { ReactElement } from 'react';
interface buttonProps {
    href: string;
    className?: string;
    children: ReactElement | ReactElement[] | string;
}

export default function Button({
    href,
    className,
    children
}: buttonProps): ReactElement {
    return (
        <div
            className={`${
                className
                    ? className
                    : 'w-fit rounded-lg bg-tertiary px-4 py-2 text-xs font-medium text-primary md:px-8 md:text-lg md:font-semibold '
            }`}>
            <Link href={href}>{children}</Link>
        </div>
    );
}

import Link from "next/link";

import { ReactElement } from "react";
interface buttonProps {
    href: string;
    className?: string;
    children: ReactElement | ReactElement[] | string;
}

export default function Button({  href, className,children }: buttonProps): ReactElement {
    return (
        <div className={`bg-tertiary rounded-lg w-fit text-primary px-4 py-2 text-xs font-medium md:px-8 md:text-lg md:font-semibold ${className}`}>
            <Link href={href}>{children}</Link>
        </div>
    );
}

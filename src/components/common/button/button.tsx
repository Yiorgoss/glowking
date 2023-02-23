import Link from "next/link";

import { ReactElement } from "react";

interface buttonProps {
    href: string;
    className?: string;
    children: ReactElement | ReactElement[] | string;
}

export default function Button({  href, className,children }: buttonProps): ReactElement {
    return (
            <div className={`px-8 bg-tertiary rounded-lg w-fit text-primary text-lg font-semibold py-2 ${className}`}>
                <Link href={href}>{children}</Link>
            </div>
    );
}

import Link from "next/link";

import { ReactElement } from "react";

interface buttonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: buttonProps): ReactElement {
    return (
        <div className="rounded-md shadow-layered transition-transform hover:scale-105 hover:shadow-layered-xl">
            <div className="p-5 px-10 text-xl font-bold">
                <Link href={href}>{text}</Link>
            </div>
        </div>
    );
}

import Link from "next/link";
import { ReactElement } from "react";

import Card from "@components/common/card/card";

import { Trans } from "@lingui/macro";

const CardMain = ({
    href,
    header,
    content,
    image,
}: {
    href: string;
    header?: any;
    content?: string;
    image?: string;
}) => {
    return (
        <Card className="mx-auto h-full w-fit overflow-hidden rounded-xl bg-slate-300 p-4 transition-transform md:min-w-[300px] md:max-w-[450px] lg:min-w-[350px]  md:hover:scale-[1.05]">
            <Link href={href}>
                <Card.Graphic className="min-h-[300px] max-h-[400px] w-full" src={image} />

                <Card.Header className="mt-8 text-center text-2xl font-medium">
                    {header}
                </Card.Header>
                <Card.Content className="overflow-hidden text-ellipsis p-5">
                    {content}
                </Card.Content>
            </Link>
        </Card>
    );
};

export default CardMain;

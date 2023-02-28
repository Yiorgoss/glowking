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
        <Card className="mx-auto h-full w-full overflow-hidden rounded-xl bg-slate-300 p-4 transition-transform md:h-[500px] md:w-[250px] md:hover:scale-[1.05]">
            <Link href={href}>
                <Card.Graphic className="h-[250px] w-full" src={image} />

                <Card.Header className="mt-8 text-center text-2xl font-bold">
                    <Trans>{header}</Trans>
                </Card.Header>
                <Card.Content className="overflow-hidden text-ellipsis break-all p-5">
                    {content}
                </Card.Content>
            </Link>
        </Card>
    );
};

export default CardMain;

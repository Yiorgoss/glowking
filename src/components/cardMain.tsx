import Link from "next/link";
import Card from "@components/common/card/card";

const CardMain = ({
    href,
    header,
    content,
    image,
}: {
    href: string;
    header?: string;
    content?: string;
    image?: string;
}) => {
    return (
        <Card className="mx-auto w-[250px] overflow-hidden rounded-xl bg-primary transition-transform md:hover:scale-[1.05]">
            <Link href={href}>
                <Card.Graphic className="h-[200px] w-full" src={image} />

                <Card.Header className="mt-8 text-center text-2xl font-bold">
                    {header}
                </Card.Header>
                <Card.Content className="break-all p-5">{content}</Card.Content>
            </Link>
        </Card>
    );
};

export default CardMain;

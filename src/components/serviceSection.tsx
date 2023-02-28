import Link from "next/link";
import Image from "next/image";
import { useState, createContext, useContext } from "react";

import { t } from "@lingui/macro";

import Button from "@components/common/button/button";

const ImagePortion = ({
    className,
    image,
}: {
    className: string;
    image: string;
}) => {
    return (
        <div
            className={`relative order-first h-[400px] overflow-hidden rounded-lg ${className}`}
        >
            <Image src={image} alt="" fill />
        </div>
    );
};
const TextPortion = ({
    className,
    title,
    content,
}: {
    className?: string;
    title?: string;
    content?: string;
}) => {
    return (
        <div className={`flex flex-col justify-between ${className}`}>
            <h3 className="mt-6 mb-10 text-center text-2xl font-medium tracking-wider">
                {title}
            </h3>
            <div className="px-10 tracking-wide">{content}</div>
            <Button className="mx-auto my-10" href="/contact">
                {t({ id: "serviceSection.button.text", message: "Book Now" })}
            </Button>
        </div>
    );
};
const ServiceSection = ({
    isLeft,
    title,
    content,
    image,
    className,
}: {
    isLeft: boolean;
    title?: string;
    content?: string;
    image: string;
    className?: string;
}) => {
    return (
        <div className={`py-10 ${className}`}>
            <div className="grid min-h-[400px] grid-cols-1 gap-5 overflow-hidden md:grid-cols-2">
                <TextPortion title={title} content={content} />
                <ImagePortion
                    image={image}
                    className={`object-cover ${
                        isLeft ? "md:order-first" : "md:order-last"
                    }`}
                />
            </div>
        </div>
    );
};

export default ServiceSection;

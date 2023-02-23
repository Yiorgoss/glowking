import Link from "next/link";
import Image from "next/image";
import { useState, createContext, useContext } from "react";

import Button from "@components/common/button/button";

const ImagePortion = ({
    className,
    image,
}: {
    className: string;
    image: string;
}) => {
    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
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
        <div className={className}>
            <h3 className="mt-6 mb-10 text-center text-2xl font-medium tracking-wider">
                {title}
            </h3>
            <div className="px-10 tracking-wide">{content}</div>
            <Button className="mx-auto my-10" href="/contact">
                Book Now
            </Button>
        </div>
    );
};
const ServiceSection = ({
    isLeft,
    title,
    content,
    image,
}: {
    isLeft: boolean;
    title?: string;
    content?: string;
    image: string;
}) => {
    return (
        <div className="py-10">
            <div className="grid grid-cols-2 gap-5 overflow-hidden">
                <TextPortion title={title} content={content} />
                <ImagePortion
                    image={image}
                    className={`${isLeft ? "order-first" : "order-last"}`}
                />
            </div>
        </div>
    );
};

export default ServiceSection;

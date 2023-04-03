import Image from 'next/image';
import { useState, useEffect } from 'react';

const CImage = ({
    url,
    active,
    rotation,
    height,
    width
}: {
    url: string;
    active: boolean;
    rotation: number;
    height?: number;
    width?: number;
}) => {
    return (
        <div
            className={`md:absolute relative h-[50vh] md:h-[80vh] md:w-[60vw] grayscale-0 transition-transform duration-500 ${
                active ? 'z-20 scale-110 ' + rotation : 'z-10 ' + rotation
            }`}
        >
            <Image
                className="mx-auto object-cover md:object-contain"
                src={url}
                alt="alt"
                fill
            />
        </div>
    );
};
const Title = ({
    title,
    index,
    href,
    setRotation,
    setIndex
}: {
    title: string;
    index: number;
    href: string;
    setRotation: (itemIndex: number) => void;
    setIndex: (index: number) => void;
}) => {
    return (
        <div
            className="w-full text-center tracking-wider md:w-fit md:pl-10"
            onMouseEnter={() => setRotation(index)}
            onMouseLeave={() => setIndex(-1)}
        >
            <h1 className="block border-none px-10 py-2 text-[6vw] leading-[1.25] hover:text-secondary ">
                {title}
            </h1>
        </div>
    );
};
const ImageEffect = ({
    effectData,
    mobileUseImage
}: {
    effectData: {
        title: string;
        href: string;
        imageData: { url: string; height?: number; width?: number };
    }[];
    mobileUseImage:boolean;
}) => {
    const rotationArr = [
        'rotate-2',
        '-rotate-2',
        'rotate-4',
        '-rotate-4',
        'rotate-6',
        '-rotate-6',
        'rotate-8',
        '-rotate-8',
        'rotate-10',
        '-rotate-10'
    ];
    const [activeIndex, setActiveIndex] = useState(-1);
    const [rotation, setRotation] = useState(
        new Array(effectData.length).fill('')
    );

    const handleSetRotation = (itemIndex: number) => {
        const newRotation =
            rotationArr[Math.floor(Math.random() * rotationArr.length)];
        //Math.random() * 7 * Math.round(Math.random() ? 1 : -1);
        const tempState = [...rotation];
        tempState[itemIndex] = newRotation;
        setRotation(tempState);
        setActiveIndex(itemIndex);
    };
    return (
        <div className="z-20 pt-[100px] md:grid md:grid-cols-3 ">
            <div className={`${mobileUseImage ? 'hidden md:block' : 'block'} relative z-20 pb-[10vh] text-secondary hover:text-[#bababa]`}>
                {effectData.map(({ title, href }, i) => (
                    <Title
                        title={title}
                        href={href}
                        index={i}
                        setRotation={handleSetRotation}
                        setIndex={setActiveIndex}
                        key={i}
                    />
                ))}

            </div>
            <div className={`${mobileUseImage ? 'grid grid-cols-2 gap-2' : 'hidden'} md:row-span-2 md:sticky md:top-[50px] z-10 mb-auto w-full justify-center bg-transparent `}>
                {effectData.map(({ imageData }, i) => (
                    <CImage
                        url={imageData.url}
                        active={activeIndex == i}
                        rotation={rotation[i]}
                        key={i}
                        height={imageData.height}
                        width={imageData.width}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageEffect;

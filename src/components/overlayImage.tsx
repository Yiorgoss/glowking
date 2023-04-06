import { useState } from 'react';
import Image from 'next/image';

const OverlayImage = ({ src, alt }: { src: string; alt: string }) => {
    const [enlargedImage, setEnlargedImage] = useState(false);

    // check out plaiceholder for blurred photo as a placeholder
    // https://plaiceholder.co/usage#base64

    return (
        <div>
            <div
                className={`${
                    enlargedImage
                        ? 'fixed top-0 right-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-zinc-600/75'
                        : 'hidden'
                }`}
                onClick={() => setEnlargedImage(false)}>
                <div className='relative h-5/6 w-5/6 '>
                    <Image
                        className='object-contain'
                        src={src}
                        alt={alt}
                        fill
                    />
                </div>
            </div>
            <div
                className='relative h-[100px] md:h-[400px]'
                onClick={() => setEnlargedImage(true)}>
                <Image
                    className='object-cover'
                    quality={50}
                    src={src}
                    alt={alt}
                    sizes='(max-width: 768) 100wv,
                30vw'
                    fill
                />
            </div>
        </div>
    );
};

export default OverlayImage;

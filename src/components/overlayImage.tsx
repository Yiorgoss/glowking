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
                        className=' object-contain'
                        src={src}
                        alt={alt}
                        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                        fill
                    />
                </div>
            </div>
            <div
                className='relative h-[400px] overflow-hidden object-cover'
                onClick={() => setEnlargedImage(true)}>
                <Image className='' quality={5} src={src} alt={alt} fill />
            </div>
        </div>
    );
};

export default OverlayImage;

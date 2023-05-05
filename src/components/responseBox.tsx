import { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

const ResponseBox = ({
    status,
    text
}: {
    status: boolean | undefined;
    text?: string;
}) => {
    const [open, setOpen] = useState(true);

    return (
        <div
            className={`top-0 my-5 mt-[100px] mr-0 flex h-[100px] w-full items-center border py-2 px-8 text-center md:right-0 md:mr-20 md:w-fit md:rounded-lg ${
                open ? 'fixed' : 'hidden'
            } ${status ? 'bg-green-300 border-green-700 text-green-700' : 'bg-red-300 border-red-700 text-red-700'}`}
        >
            <div
                className="absolute top-0 right-0 mt-1 mr-1"
                onClick={() => setOpen(false)}
            >
                <AiOutlineClose className={`h-5 w-5 ${status ? 'fill-green-700': 'fill-red-700'}`} />
            </div>
            <div className="text-lg">{text}</div>
        </div>
    );
};

export default ResponseBox;

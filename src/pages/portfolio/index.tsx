
import Image from 'next/image'

import { ReactElement } from "react"

import LandingLayout from "@layouts/landingLayout"
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";


const ImageGallery = [
    {
        src:"https://via.placeholder.com/200x300",
    },
    {
        src:"https://via.placeholder.com/200x300",
    },
    {
        src:"https://via.placeholder.com/200x300",
    },
    {
        src:"https://via.placeholder.com/200x300",
    },
    {
        src:"https://via.placeholder.com/200x300",
    },
    {
        src:"https://via.placeholder.com/200x300",
    },

]

const Portfolio: PageWithHeaderLayout = () => {
    //TODO: if masonry layout wanted height and width must be calculated onload
    //      check for details
    //      https://stackoverflow.com/questions/66353475/how-to-use-image-component-in-next-js-with-unknown-width-and-height

    return (
        <div className=" container mx-auto mt-[100px]">
            <h1 className="text-6xl tracking-wider font-bold text-center">Our <span className="text-tertiary">Portfolio</span></h1>
                <div className='grid gap-6 grid-cols-3 p-8 '>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                    <div className='relative w-full h-[300px] rounded-md overflow-hidden '>
                        <Image src="https://via.placeholder.com/200x300.png" alt="" fill />
                    </div>
                </div>
        </div>
    )
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>
}

export default Portfolio;
/*

 */

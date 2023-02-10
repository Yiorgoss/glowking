
import Image from 'next/image'

import { ReactElement } from "react"

import HeaderLayout from "@layouts/headerLayout"
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";


const Portfolio: PageWithHeaderLayout = () => {
    //TODO: if masonry layout wanted height and width must be calculated onload
    //      check for details
    //      https://stackoverflow.com/questions/66353475/how-to-use-image-component-in-next-js-with-unknown-width-and-height

    return (
        <div className=" container mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center">Portfolio</h1>
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
    return <HeaderLayout>{page}</HeaderLayout>
}

export default Portfolio;
/*

 */

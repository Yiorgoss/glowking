import {GetStaticProps} from "next"
import {ReactElement} from "react"

import {PrismaClient, Category} from '@prisma/client'

import LandingLayout from "@/layouts/landingLayout"

import {loadTranslation} from "@/utils/utils"
import MultiStepForm from "@/components/multiStepForm"

const prisma = new PrismaClient()

export const getStaticProps: GetStaticProps = async(ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === 'production'
    );
    const categoryData = await prisma.category.findMany({})
    return{
        props:{
            translation,
            categoryData
        }
    }
}

const BookOnline = ({categoryData}:{categoryData: Category[]}) => {

    return(
        <div className="mt-[100px] container mx-auto">
            <MultiStepForm categories={categoryData}/>
        </div>
    )
}

BookOnline.getLayout = function getLayout(page:ReactElement){

    return(
        <LandingLayout>{page}</LandingLayout>
    )
}

export default BookOnline

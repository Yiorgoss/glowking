import HeaderLayout from "@layouts/headerLayout"
import {ReactElement} from 'react'

import type { PageWithHeaderLayout } from "@customTypes/layoutTypes"

const AboutUs: PageWithHeaderLayout = () => {
    return (
        <>
        abc</>
    )
}

AboutUs.getLayout = function getLayout(page: ReactElement){
    return (
        <HeaderLayout>{page}</HeaderLayout>
    )
}

export default AboutUs

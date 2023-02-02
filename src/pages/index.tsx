//import { getLayout as getSiteLayout } from "@layouts/headerLayout"
import HeaderLayout from                 "@layouts/headerLayout"
import { ReactElement } from "react"

import type { PageWithHeaderLayout } from "@customTypes/layoutTypes"

const Home: PageWithHeaderLayout = () => {
  return (
    <>
    aorsteaorstei
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>{page}</HeaderLayout>
  )
}

export default Home

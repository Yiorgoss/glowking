import Header from "@components/header"
import { ReactElement } from "react"

interface HeaderLayoutProps {
    children?: ReactElement|ReactElement[]
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

//export const getLayout = (page: ReactElement ) => {
//    <HeaderLayout>{page}</HeaderLayout>
//}

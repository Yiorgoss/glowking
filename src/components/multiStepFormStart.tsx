import Link from 'next/link'
import {useRouter} from 'next/router'
import {Category} from '@prisma/client'

import { DisplayCard } from '@/components/multiStepForm'

interface ISelectWashCategory extends React.HTMLAttributes<HTMLDivElement> {categories:Category[]}

const MultiStepFormStart = ({categories}: ISelectWashCategory) => {
    const { locale } = useRouter();

    if (!categories)
        return (
            <div>
                Failed to load. Try refreshing your browser it this problem
                persists.{' '}
            </div>
        );

    return (
        <div className='container mx-auto absolute z-20 flex h-full w-full  inset-x-0 bottom-0 top-20% h-[70%] max-w-[70%] flex-wrap items-center justify-center gap-0 '>
            {categories.map(({ title, id, description, imageUrl }, index) => (
                    <Link
                        className={`mx-auto hover:scale-110 mt-[3%] flex w-[31%] flex-col invert `}
                        key={index}
                        href={`/book-online?category=${id}`}
                    >
                        <DisplayCard
                            title={title}
                            description={description}
                            imageUrl={imageUrl}
                        />
                    </Link>
                )
            )}
        </div>
    );
};

export default MultiStepFormStart

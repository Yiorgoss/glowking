import Link from "next/link";
import HeaderLayout from "@layouts/headerLayout";

import { ReactElement } from "react";

import Card from "@components/common/card/card";
import Button from "@components/common/button/button";
import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

const Services: PageWithHeaderLayout = () => {
    return (
        <div className="container mx-auto mt-10 ">
            <div className="grid grid-cols-3 gap-y-10">
                <div className="col-span-2 mx-auto">
                    <h2 className="text-lg font-semibold">Book a wash</h2>
                    <div className=" mt-5 w-[600px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vitae erat luctus, venenatis tortor sit amet,
                        aliquam ipsum. Pellentesque
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center">
                    <Button href="" text="Book Now" />
                </div>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

Services.getLayout = function getLayout(page: ReactElement) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default Services;

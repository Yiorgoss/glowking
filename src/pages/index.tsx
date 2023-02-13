//import { getLayout as getSiteLayout } from "@layouts/headerLayout"
import Image from "next/image";
import Link from "next/link"

import { GetStaticProps } from 'next'
import { ReactElement } from "react";

import { Trans } from "@lingui/macro"

import {loadTranslation} from '@/utils/utils'

import HeaderLayout from "@layouts/headerLayout";
import Divider from "@components/divider";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )
  return {
    props: {
      translation
    }
  }
}

const Home: PageWithHeaderLayout = () => {
  return (
    <div className="mx-auto">
      <div className="relative h-screen">
        <Image
          className="object-fill "
          src="https://via.placeholder.com/1920x1080.jpeg?text=landing page image"
          alt="landing page image"
          fill
        />

        <div className=" relative grid place-items-center text-center h-full ">
          <div>
            <div className="font-bold text-4xl"> <Trans id="blah">Love Your Car</Trans></div>
            <div className="mt-3 ml-5 font-medium text-3xl"> At GlowKing</div>
            <div className="mt-3 ml-2 text-3xl">
              <span className=" rounded-sm border-2 border-secondary py-2 px-3 font-medium hover:text-tertiary hover:bg-secondary ">
                See Offers
              </span>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="rounded-full overflow-hidden mx-auto w-[300px] h-[300px] mx-auto relative">
        <Image src="https://via.placeholder.com/400x500.jpeg?text=carwash" alt="carwash image" fill className="object-fit" />
      </div>
      <div className="container mx-auto">
        <div className=" mt-10 p-5 text-center">
          <h3 className=" text-lg mb-5 font-medium">Some Title </h3>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel sapien suscipit felis porttitor aliquet at quis metus. Ut fringilla magna magna, non auctor odio porttitor sit amet. </div>
        </div>
      </div>
      <Divider />
      <div className="w-full h-[400px] overflow-hidden relative">
        <Image className="object-fit" src="https://via.placeholder.com/1000x1000.png" alt="placeholder image" fill />
        <div className="relative grid place-items-center h-full">
          <div className="text-4xl font-medium text-center text-primary">
            Book
            <div className="hover:text-tertiary hover:bg-secondary border-4 py-2 px-4 border-solid mt-3 border-secondary text-secondary">
              <Link className="" href="/bookings" >Here</Link>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div >
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
    //TODO: see other todo about getlayout function
    return <HeaderLayout>{page}</HeaderLayout>;
};



export default Home;

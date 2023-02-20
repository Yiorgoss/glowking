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

import Calendar from "@components/common/calendar/calendar"

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
      <div className="w-fit relative h-screen bg-white text-black container mx-auto">
          <Calendar />

      </div>
    </div >
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
    //TODO: see other todo about getlayout function
    return <HeaderLayout>{page}</HeaderLayout>;
};



export default Home;

import Image from "next/image";
import Link from "next/link";

import { ReactElement } from "react";

export default function Card() {
  return (
    <div className="mx-auto w-[300px]  overflow-hidden rounded-xl bg-primary shadow-layered transition-transform duration-300 hover:-translate-y-2  hover:translate-x-0.5 hover:shadow-layered-xl">
      <Link className="" href="">
        <div className="relative h-[200px] w-full">
          <Image
            className=""
            src="https://via.placeholder.com/1000x1000.png"
            alt=""
            fill
          />
        </div>
        <div className="my-10 text-center text-2xl font-bold"> Heading </div>
        <div className="break-all p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </div>
      </Link>
    </div>
  );
}

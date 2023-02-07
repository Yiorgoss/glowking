import Link from "next/link";
import Image from "next/image";
import { navLinkType } from "@cTypes/inputTypes";

interface footerProps {
  navLinks: navLinkType[];
}

export default function Footer({ navLinks }: footerProps): JSX.Element {
  return (
    <div className="w-full bg-zinc-500 px-10 py-6 text-white ">
      <div className="container mx-auto grid grid-cols-2">
        <div className="self-center justify-self-center p-2 ">
          <h3 className="my-2 pl-2 text-2xl font-medium"> Site Map </h3>
          <ul className=" ">
            {navLinks.map((link, index) => (
              <li className="pt-1" key={index}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" relative h-3/4 w-3/4 self-center justify-self-end md:h-[300px] md:w-[300px]">
          <Image
            className="my-auto h-auto w-auto object-cover "
            src="https://via.placeholder.com/900x600.png"
            alt="random text"
            fill
          />
        </div>
      </div>
    </div>
  );
}

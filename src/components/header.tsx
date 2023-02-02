import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";

const NAV_LINKS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Services",
    path: "/Services",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
export default function Header(): JSX.Element {
  const node = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  //const handleClickOutside = (e: MouseEvent) => {
  //  if (node.current && node.current.contains(e.target as Node)) {
  //    // inside click
  //    return;
  //  }
  //  // outside click
  //  setOpen(false);
  //};

  //useEffect(() => {
  //  if (open) {
  //    document.addEventListener("mousedown", handleClickOutside);
  //  } else {
  //    document.removeEventListener("mousedown", handleClickOutside);
  //  }

  //  return () => {
  //    document.removeEventListener("mousedown", handleClickOutside);
  //  };
  //}, [open]);

  return (
    <div className="w-full">
      <div className=" flex h-[200px] flex-wrap justify-between overflow-hidden bg-black">
        <div className="text-md my-auto mr-auto pl-10 text-white ">
          {" "}
          691 111 1111{" "}
        </div>
        <div className="w-[100px] bg-red-400"> logo </div>
        <div className="m-auto basis-full text-center text-white">
          {" "}
          * Dry * Buff * Vacuum * Valet *{" "}
        </div>
      </div>
      <div className="bg-red-700">
        <div className="py-1" onClick={() => setOpen(!open)}>
          <AiOutlineMenu className="mx-auto text-white" />
        </div>
        <div className={`${open && "hidden"} h-full bg-red-400 text-white`}>
          <ul>
            {NAV_LINKS.map((link, index) => (
              <li className=" ml-14 bg-red-200 pt-2" key={index}>
                {" "}
                <Link href={link.path} onClick={() => setOpen(!open)}>
                  {" "}
                  {link.title}{" "}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

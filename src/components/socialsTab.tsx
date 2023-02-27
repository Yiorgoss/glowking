import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";

const SocialsTab = ({
    isVert,
    className,
}: {
    isVert?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={`flex items-center justify-center gap-5 text-white ${
                isVert ? "flex-col" : ""
            } ${className}`}
        >
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="instagram.com">
                    <FaInstagram className="h-6 w-6 " />
                </Link>
            </div>
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="tiktok.com">
                    <FaTiktok className="h-6 w-6 " />
                </Link>
            </div>
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="youtube.com">
                    <FaYoutube className="h-6 w-6 " />
                </Link>
            </div>
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="facebook.com">
                    <FaFacebookF className="h-6 w-6  " />
                </Link>
            </div>
        </div>
    );
};
export default SocialsTab;

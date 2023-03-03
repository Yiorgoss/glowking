import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

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
                isVert ? "md:flex-col" : ""
            } ${className}`}
        >
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="https://www.instagram.com/glowking.athens/">
                    <FaInstagram className="h-8 w-8 md:h-6 md:w-6" />
                </Link>
            </div>
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="https://www.tiktok.com/@glowkingathens">
                    <FaTiktok className="h-8 w-8 md:h-6 md:w-6" />
                </Link>
            </div>
            <div className="rounded-full bg-black p-2 hover:scale-110">
                <Link href="https://www.facebook.com/profile.php?id=100067022263846">
                    <FaFacebookF className="h-8 w-8 md:h-6 md:w-6" />
                </Link>
            </div>
        </div>
    );
};
export default SocialsTab;

/*
   <div className="rounded-full bg-black p-2 hover:scale-110">
   <Link href="youtube.com">
   <FaYoutube className="h-6 w-6 " />
   </Link>
   </div>
 */

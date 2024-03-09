import Link from "next/link";
import Image from "next/image";
export default function NavLogo(){
    return(
        <div className="flex items-center gap-x-3">
            <Link href="/" >
                <Image src="/DSC_0407.jpg" alt="formal Photo" width={85} height={25} className="rounded-full"/>
            </Link>
            <Link href="/" >
                <span className="font-extrabold text-3xl uppercase">Nick</span>
            </Link>
        </div>
    );
}
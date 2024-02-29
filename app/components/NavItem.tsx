import Link from "next/link";
export default function NavItem(){
    return(
        <div className="justify-start"><Link href="/" className="px-7 font-extrabold text-3xl"><span>Nick</span></Link></div>
    );
}
import Link from "next/link";
import NavItem from "./NavItem";
export default function NavBar(){
    return (
            <div className="pt-5 flex items-center justify-center">
                <NavItem/>
                <ul className="px-8 py-7 hidden text-2xl bg-slate-400 md:inline-flex self-center gap-x-7 border rounded-xl uppercase border-slate-900 ">
                    <Link href="/"><li className="text-slate-200 font-bold">Resume</li></Link>
                    <li>Experience</li>
                    <li>Publications</li>
                    <li>Links</li> 
                </ul>
            </div>
    );
}
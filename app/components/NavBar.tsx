import Link from "next/link";
import NavLogo from "./NavLogo";
import { navList } from "../constants";
import NavListItem from "./NavListItem";
export default function NavBar(){
    return (
            <div className="h-24 px-10 flex items-center justify-between">
                <Link href="/" className="font-extrabold text-3xl"><span>Nick</span></Link>
                {/* <NavLogo/> */}
                <ul className="px-8 py-7 hidden text-2xl bg-slate-400 md:inline-flex self-center gap-x-7 border rounded-xl uppercase border-slate-900 ">
                    {
                        // navList.map({title, href}) =>(
                        //     <NavListItem key={title} title={title} href={href}/>
                        // )
                    }
                    <Link href="/"><li className="text-slate-200 font-bold">Resume</li></Link>
                    <li>Experience</li>
                    <li>Publications</li>
                    <li>Links</li> 
                </ul>
                <div>
                    <h1>Contact Me!</h1>
                </div>
            </div>
    );
}
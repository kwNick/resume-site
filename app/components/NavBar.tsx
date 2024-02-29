import Link from "next/link";
import NavLogo from "./NavLogo";
import { navList } from "../constants";
import NavListItem from "./NavListItem";
export default function NavBar(){
    return (
            <div className="h-24 px-10 flex items-center justify-between">
                <NavLogo/>
                <ul className="px-6 py-4 bg-slate-400 text-xl font-medium md:inline-flex gap-x-7 border border-green-300 rounded-full uppercase border-slate-900 ">
                    {
                        navList.map(({title, href}) =>(
                            <NavListItem key={title} title={title} href={href}/>
                        ))
                    }
                </ul>
                <div className="">
                    <button className="border rounded-xl px-5 py-3 cursor-pointer uppercase text-xl font-medium hover:bg-slate-200 hover:text-green-800 duration-300">Contact Me!</button>
                </div>
            </div>
    );
}
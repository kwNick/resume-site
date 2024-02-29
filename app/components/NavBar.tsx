import Link from "next/link";
export default function NavBar(){
    return (
        <div className="pt-5 flex items-center justify-center">
            <ul className="px-4 py-3 hidden bg-slate-400 md:inline-flex gap-x-5 border rounded-xl uppercase ">
               <Link href="/"><li className="text-slate-200">Resume</li></Link>
               <li>Experience</li>
               <li>Publications</li>
               <li>Links</li> 
            </ul>
        </div>
    );
}
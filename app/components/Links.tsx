import { linkList } from "../constants";
import Link from "next/link";

export default function Links(){
    return (
        <div className="m-auto max-w-2xl flex flex-col items-center justify-center mt-10 gap-y-7 py-10 border rounded-full">
            <h1>Links Page!</h1>
            <ul className="flex flex-col items-center justify-center">
                {linkList.map((link)=>(
                    <li key={link.link} className="font-bold">
                        <Link href={link.href} target="_blank">{link.link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
import Link from "next/link";
// interface Props = {
//     title: string;
    
// };
export default function NavListItem(){
    return (
        <Link href="/"><li className="text-slate-200 font-bold">Resume</li></Link>
    );
}
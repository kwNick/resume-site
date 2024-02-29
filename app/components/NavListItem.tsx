import Link from "next/link";
interface Props {
    title: string;
    href:string;    
};
export default function NavListItem({title, href}: Props){
    return (
        <Link href={href}>
            <li key={title}className="text-slate-200 hover:text-green-300 duration-200">{title}</li>
            </Link>
    );
}
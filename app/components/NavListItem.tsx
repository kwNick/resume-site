import Link from "next/link";
import { MouseEventHandler } from "react";
interface Props {
    title: string;
    href:string;
    onClick: (MouseEventHandler<HTMLAnchorElement>);
};
 const NavListItem =({title, href, onClick}: Props) =>{
    return (
        <Link href={href} onClick={onClick}>
            <li key={title}className="text-slate-200 hover:text-green-300 duration-200">{title}</li>
        </Link>
    );
}
export default NavListItem;
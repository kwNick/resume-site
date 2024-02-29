import Content from "./Content";
import NavBar from "./NavBar";
export default function HomePage(){
    return (
        <div className="w-full min-h-screen">
            <NavBar/>
            <Content/>
        </div>
    );
}
'use client';
import { navList } from "../constants";
import Content from "./Content";
import Links from "./Links";
import NavBar from "./NavBar";
import Publications from "./Publications";
import Resume from "./Resume";
import Experience from "./Experience";
import { useState, useEffect } from "react";

export default function HomePage(){
    const [content, setContent] = useState("Resume");
    return (
        <div className="w-full min-h-screen pb-10 ">
            <NavBar setContent={setContent}/>
            <Content/>
            {content == "Resume" ? (<Resume/> ) : content == "Publications" ? (<Publications/>) : content == "Experience" ? (<Experience/>):(<Links/>)} 
        </div>
        
    );
}
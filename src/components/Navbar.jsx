"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';



const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Inicio",
        },
        {
            id: 2,
            link: "Sobre",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Habilidades",
        },
        {
            id: 5,
            link: "Contato",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-indigo-800 fixed ">
            <div>
                <h1 className="text-3xl  ml-2">GustavoInTech</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="group px-4 cursor-pointer capitalize font-medium
                        text-gray-300 hover:scale-105 duration-200 relative"
                    >
                        <Link href={link}
                            smooth="true"
                            duration={500}>
                            {link}
                        </Link>
                        <div className="absolute bottom-0 left-1/2 
                        transform -translate-x-1/2 w-3/4 border-b-2 
                        border-gray-300 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200"></div>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center 
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
                from-indigo-800 to-indigo-600 text-white ">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className=" group px-4 cursor-pointer capitalize py-6 text-4xl 
                            text-gray-300 hover:scale-105 duration-200 relative"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                href={link}
                                smooth="true"
                                duration={500}
                            >
                                {link}
                            </Link>
                            <div className="absolute  left-1/2 
                        transform -translate-x-1/2 w-3/4 border-b-2 
                        border-gray-300 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200"></div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;

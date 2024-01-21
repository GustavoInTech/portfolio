import React from "react";
import OculosImage from "../assets/oculos.jpg";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-indigo-800 via-indigo-600 to-indigo-500"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2">
                    <h2 className="text-4xl lg:text-7xl font-bold text-white">
                       I am Full Stack Developer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-md">
                        Tenho 3 anos de experiência construindo e projetando software.
                        Atualmente, adoro trabalhar em aplicações web utilizando tecnologias como
                        React, Tailwind, Next JS e Nodejs.
                    </p>

                    <div className="flex my-4 lg:hidden">
                        <Link
                            href="https://www.linkedin.com/in/gustavo-rodrigues-6571b1253/"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 text-white 
                            bg-gradient-to-r from-indigo-500 to-indigo-800 box-content px-2 py-2 rounded-lg 
                            shadow-lg shadow-black/30 hover:shadow-inner 
                            hover:shadow-black/30 duration-300 hover:text-black"
                        >
                            <FaLinkedin size={30} />
                        </Link>
                        <Link
                            href="https://github.com/GustavoInTech"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 text-white 
                            bg-gradient-to-r from-indigo-500 to-indigo-800
                            box-content px-2 py-2 rounded-lg 
                            shadow-lg shadow-black/30 hover:shadow-inner 
                            hover:shadow-black/30 duration-300 hover:text-black"
                        >
                            <FaGithub size={30} />
                        </Link>
                        <Link
                            href="https://instagram.com/seu_perfil"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 text-white 
                            bg-gradient-to-r from-indigo-500 to-indigo-800
                            box-content px-2 py-2 rounded-lg 
                            shadow-lg shadow-black/30 hover:shadow-inner 
                            hover:shadow-black/30 duration-300 hover:text-black"
                        >
                            <FaInstagram size={30} />
                        </Link>
                        <Link
                            href="mailto:prog.gustavo@outlook.com"
                            className="mr-4 text-white 
                            bg-gradient-to-r from-indigo-500 to-indigo-800
                            box-content px-2 py-2 rounded-lg 
                            shadow-lg shadow-black/30 hover:shadow-inner 
                            hover:shadow-black/30 duration-300 hover:text-black"
                        >
                            <HiOutlineMail size={30} />
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="https://wa.me/5521980022571?text=Ol%C3%A1%2C+peguei+seu+contato+no+seu+site+de+portfolio.+Poderia+me+ajudar%3F+"
                            target="_blank"
                            smooth="true"
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 
                            flex items-center rounded-md bg-gradient-to-r 
                            from-cyan-500 to-blue-500 cursor-pointer
                            shadow-lg shadow-black/30 hover:shadow-inner 
                            hover:shadow-black/30 duration-300 hover:text-black 
                            "
                        >
                            Conectar
                            <span className="">
                                <FaWhatsapp size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block md:w-1/2">
                    <Image
                        src={OculosImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

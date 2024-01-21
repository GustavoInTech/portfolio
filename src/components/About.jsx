import React from "react";
import avatar from "../assets/Gustavor.jpg";
import Image from "next/image";

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-screen bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-800 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row justify-center w-full h-full">
                <div className="lg:w-1/2 pb-8">
                    <div className="w-48 h-48 lg:w-full lg:h-full mx-auto lg:mx-0 overflow-hidden rounded-2xl">
                        <Image
                            src={avatar}
                            alt="my profile"
                            className="object-cover object-center w-full h-full rounded-2xl"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 p-4">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                        About Me
                    </p>

                    <p className="text-xl mt-8">
                        Coloque aqui a história sobre você na programação. Destaque suas habilidades, experiências e o que o inspirou a seguir esse caminho.
                    </p>

                    <p className="text-xl mt-4">
                        Você pode compartilhar suas conquistas, projetos notáveis ou qualquer outro aspecto pessoal ou profissional que deseja destacar.
                    </p>

                    <a
                        href="/caminho-para-o-seu-cv.pdf"
                        download
                        className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-400 text-white px-6 py-3 rounded-md inline-block duration-200 hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;

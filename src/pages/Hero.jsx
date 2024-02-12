import Header from "./Header";
import Project from "./Project";
import TypeIt from "typeit-react";

function Hero() {
    return (
        <>
            <section id="home">
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100vh",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: -99
                    }}
                >
                    <source src="/static/assets/galaxy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Header />
                <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                    <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500 font-extrabold leading-tighter tracking-tighter mb-4"> Hi, I am <br/><span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-600">Okan Syahdana</span></h1>
                        <div className="my-2 text-left">
                            <TypeIt
                                options={{
                                    strings:["Saya adalah seorang pengembang frontend","yang juga memiliki minat mendalam dalam desain UI/UX."],
                                    speed: 25,
                                    waitUntilVisible: true,
                                }}
                            />
                        </div>
                        <div className="flex mt-8 md:order-2">
                            <a href="https://github.com/syahdana2?tab=repositories" target="blank" className="transition ease-in-out delay-300 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 ">
                                Github✨
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 animate__animated animate__bounceInRight">
                        <img className="animate-up-down" src="/static/assets/astronot3.png" width={600} height={600} alt="" />
                    </div>
                </div>
            </section>
            <Project />
        </>
    );
}

export default Hero;
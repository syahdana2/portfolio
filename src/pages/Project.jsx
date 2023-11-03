import { useNavigate } from "react-router-dom";

function Project() {
    const Moving = useNavigate();

    return (
        <>
            <div className=" dark:bg-gray-900">
                <section className="max-w-6xl mx-auto px-4 py-4 sm:px-6" id="project">
                    <div className="text-center pb-10">
                        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500 font-extrabold leading-tighter tracking-tighter mb-4" >Project</h1>
                    </div>
                    <div className="flex items-center justify-center container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Form 1</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/formulir2')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Form 2</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/formulir')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To Do List</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/todolist')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immutable State</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/state')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immutable Array</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/array')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Register</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/register')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Voluptatem eum enim necessitatibus laborum nam est.</p>
                                    <div className="flex justify-end">
                                        <a onClick={() => Moving('/register')} type="button" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
export default Project;
import { useNavigate } from "react-router-dom";

function Project() {
    const Moving = useNavigate();

    return (
        <>
            <div className=" dark:bg-gray-900">
                <section className="max-w-6xl mx-auto px-4 py-4 sm:px-6" id="project">
                    <div className="text-center pb-10">
                        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500 font-extrabold leading-tighter tracking-tighter mb-4" >Project & Portfolio</h1>
                    </div>
                    <div className="flex items-center justify-center container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">POS Kasir Toserba</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aplikasi POS Kasir dengan 3 role Super Admin, Admin, Employee Kasir
                                        menggunakan Framework nextJS dan Tailwind Css</p>
                                    <div className="flex justify-end">
                                        <a href="https://pos-lastation.vercel.app/" target="blank" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Let`s Goo🧑‍🚀
                                        </a>
                                        <a href="https://www.figma.com/file/28R221I3RXefRB6SylNrCr/Wireframe-%2B-High-Fidelity-POS-Toserba?type=design&node-id=0%3A1&mode=design&t=5JDbK837B8VXp2AE-1" target="blank" className="transition ease-in-out delay-300 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Figma🎨
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">POS Kasir Toko Bangunan</h5>
                                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Aplikasi POS Kasir toko bangunan dengan 2 role Admin, Employee Kasir
                                        menggunakan Framework Laravel dan template AdminLTE</p>
                                        <span className="mb-2 font-normal text-red-400">*Aplikasi belum dideploy, akses github</span>
                                    <div className="flex justify-end">
                                        <a href="https://github.com/syahdana2/pos-kasirtb.git" target="blank" className="transition ease-in-out delay-300 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Github✨
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aplikasi POS Kasir Toko atau Cafe Sederhana</h5>
                                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Aplikasi POS Kasir sederhana dengan 3 role Manajer, Admin, Kasir
                                        menggunakan PHP Native dan template gratis</p>
                                    <div className="flex justify-end">
                                        <a href="https://oktokomaterial.000webhostapp.com/index.php" target="blank" className="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design Figma Shop CO</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Design halaman transaksi
                                        toko online shop co + prototype</p>
                                    <div className="flex justify-end">
                                        <a href="https://bit.ly/prototype-figma-ecomerce" target="blank" className="transition ease-in-out delay-300 bg-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Prototype🔀
                                        </a>
                                        <a href="https://bit.ly/file-figma-ecommerce" target="blank" className="transition ease-in-out delay-300 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Figma🎨
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Belajar Design Figma #2</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar Design Figma
                                        meredesign landing page bertemakan kesehatan</p>
                                    <div className="flex justify-end">
                                        <a href="https://www.figma.com/file/aXwWrhTlNdoaP5aeaYaW8Q/Medico?type=design&node-id=0%3A1&mode=design&t=ErY90NkJ9WxjOOEE-1" target="blank" className="transition ease-in-out delay-300 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Figma🎨
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Belajar Design Figma #1</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar Design Figma
                                        membuat landing page pendidikan(courses online)</p>
                                    <div className="flex justify-end">
                                        <a href="https://www.figma.com/file/4YK2kGkM9IK4NJ4Udf5rg8/Kursus-Online-Programing?type=design&node-id=0%3A1&mode=design&t=2d4RDTNkKoihjYzW-1" target="blank" className="transition ease-in-out delay-300 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                            Figma🎨
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ring-2 ring-blue-500/50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src="" alt="" />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Form 1 Belajar React #1 </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Membuat Tampilan Form Input 1 sederhana 
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Form 2 Belajar React #2 </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Membuat Tampilan Form Input 2 sederhana 
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To Do List Belajar React #3 </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Membuat To Do List sederhana 
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immutable State Belajar React #4 </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar React JS Immutable State 
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immutable Array Belajar React #5 </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Belajar React JS Immutable Array 
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Register Belajar React #6</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Membuat form input register sederhana
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login Belajar React #7</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Membuat form input login sederhana
                                        menggunakan Framework ReactJS dan Tailwind Css</p>
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
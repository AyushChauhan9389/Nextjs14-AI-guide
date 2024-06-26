import Image from "next/image";
import Link from "next/link";
const Navult = () => {
    return (
        <nav className="bg-white border-gray-200 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo.png" className="h-16" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Travl.AI</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="text-black font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

                        <li>
                            <a className=" cursor-pointer block font-semibold text-gray-900 rounded md:border-0 md:px-3 md:py-1 md:hover:bg-gray-200 md:hover:rounded-2xl duration-200">Community Trips</a>
                        </li>
                        <Link href="/sign-in">
                        <li>
                            <a className="cursor-pointer block font-semibold  text-gray-900 md:border-0 md:px-3 md:py-1  md:hover:bg-black rounded-2xl md:hover:text-white duration-200">Sign In</a>
                        </li>
                        </Link>
                        <Link href="/sign-up">
                        <li className="">
                            <a className="flex flex-row cursor-pointer font-semibold text-white rounded-2xl md:border-0 md:px-3 md:py-2 md:bg-green-900 md:hover:bg-green-700 duration-200"><img className="w-5 mr-3" src="map2.png" alt="Description of image" /> Create a new trip</a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navult;
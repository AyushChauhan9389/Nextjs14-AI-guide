import Image from "next/image";

const Heroults = () => {
    return (
        <div className='mt-10 md:w-full md:h-screen'>
            <div className='w-3/4 m-auto items-center'>
                <h1 className='font-sans text-center md:text-6xl font-extrabold text-[#212121] text-xl'>Your Next Journey, Optimized</h1>
                <p className='text-[#616161] text-center text-xl md:w-3/5 w-full m-auto md:mt-8 mt-3'>Build, personalize, and optimize your itineraries with our free AI trip planner.   Designed for vacations, workations, and everyday adventures.</p>
                <div className='m-auto'>
                    <a className=" mt-4 m-auto md:mt-8 px-3 py-1 w-fit flex flex-row md:w-fit md:h-12 cursor-pointer text-xl  font-semibold text-white rounded-3xl border-0 md:px-4 md:py-3 bg-green-900 hover:bg-green-700 duration-200" href="/sign-up">
                        <img className="md:w-6 md:mr-3 w-0" src="map2.png" alt="Description of image" />
                        Create a new trip
                    </a>
                </div>

                <div className=''>
                    <img className='m-auto md:w-1/2 w-full md:mt-10 mt-4' alt="Description of image" src='https://i.pinimg.com/736x/46/c8/fd/46c8fd9c6b714c293154e146e3982bc0.jpg' />
                </div>

            </div>
        </div>
    )
};

export default Heroults;
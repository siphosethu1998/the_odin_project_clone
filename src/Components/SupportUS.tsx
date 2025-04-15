const SupportUs = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className='text-3xl font-medium text-gray-800'>Support us!</h2>
            <p className='text-gray-400 py-6 sm:w-3/4 md:w-4/6 lg:w-3/5 text-sm'>The Odin Project is funded by the community. Join us in empowering learners around the globe by supporting The Odin Project!</p>
            <div className='flex space-x-4 justify-center'>
                <button className='py-3 px-6 border text-gray-700 border-slate-300 hover:bg-gray-50 rounded-md self-center w-fit bg-white'>Learn more</button>
                <div className="flex cursor-pointer items-center hover:bg-teal-800 font-medium text-sm bg-teal-700 py-3 px-6 rounded-md text-white">
                    <span>Donate now</span>
                    <svg className="text-white w-6 h-6 relative right-0.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SupportUs;
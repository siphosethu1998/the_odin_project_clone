const AllPaths = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col items-center py-16 border-t border-gray-200 gap-8">
      <h1 className="text-gray-800 text-3xl font-semibold font-helvetica">All Paths</h1>
      <div className="bg-white rounded-lg shadow-sm flex flex-col divide-y flex-wrap">
        <div className="flex items-center justify-center p-8 gap-72 self-start">
          <div className="flex items-center gap-8">
            <img src="https://www.theodinproject.com/assets/badge-foundations-fc89cdc6.svg" alt="foundation logo"/>
            <h2 className="text-gray-800 font-medium text-4xl">Foundations</h2>
          </div>
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-12 py-3 rounded-md h-fit"
          >
            Explore
          </button>
        </div>
        <p className="text-gray-500 py-6 px-8 w-1/2">This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do and the foundations you'll need for later courses.</p>
      </div>
      <div className="relative flex gap-3 items-center">
        <span className="h-0.5 w-56 bg-gray-300"></span>
        <h2 className="text-gray-800 text-2xl font-medium">Then choose a learning path:</h2>
        <span className="h-0.5 w-56 bg-gray-300"></span>
      </div>
    </div>
  );
}

export default AllPaths;
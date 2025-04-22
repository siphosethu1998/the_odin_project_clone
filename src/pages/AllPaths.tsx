import { Link } from "react-router";
import SupportUs from "../Components/SupportUS";

const AllPaths = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-50 flex flex-col items-center py-16 border-t border-gray-200 gap-8">
        <h1 className="text-gray-800 text-3xl font-semibold font-helvetica">All Paths</h1>
        <div className="bg-white rounded-lg shadow-sm flex flex-col divide-y flex-wrap w-[900px]">
          <div className="flex items-center p-8 justify-between self-start w-full">
            <div className="flex items-center gap-8">
              <Link to="">
                <img 
                  src="https://www.theodinproject.com/assets/badge-foundations-fc89cdc6.svg" 
                  alt="foundation logo"
                  className="size-24"
                />
              </Link>
              <h2 className="text-gray-800 font-medium text-4xl">Foundations</h2>
            </div>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white px-12 py-3 rounded-md h-fit"
            >
              Explore
            </button>
          </div>
          <p className="text-gray-500 py-8 pl-8 pr-24">This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do and the foundations you'll need for later courses.</p>
        </div>
        {/* Choosing learning paths section  */}
        <div className="flex gap-5 items-center w-[900px]">
          <span className="border-t border-gray-300 w-full"></span>
          <h2 className="text-gray-800 text-2xl font-medium self-center w-full text-nowrap">Then choose a learning path:</h2>
          <span className="border-t border-gray-300 w-full"></span>
        </div>
        <div className="flex justify-between w-[900px]">
          <div className="bg-white text-gray-500 p-8 rounded-lg shadow-md flex flex-col items-center gap-6 w-[400px]">
            <Link to=""
            >
              <img 
                src="https://www.theodinproject.com/assets/badge-ruby-on-rails-e5f98949.svg" 
                alt="Ruby on rails logo"
                className="size-24"
              />
            </Link>
            <div className="text-gray-500 font-medium w-full flex justify-between">
              <span>PATH</span>
              <span>8 Courses</span>
            </div>
            <h3 className="text-gray-800 text-xl font-medium self-start">Full Stack Ruby on Rails</h3>
            <p className="">This path takes you through our entire Ruby on Rails curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using Ruby on Rails.</p>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white self-start px-12 py-3 rounded-md h-fit"
            >
              Explore
            </button>
          </div>
          <div className="bg-white text-gray-500 p-8 rounded-lg shadow-md flex flex-col items-center gap-6 w-[400px]">
            <Link to=""
            >
              <img 
                src="https://www.theodinproject.com/assets/badge-javascript-43bfdf7b.svg" 
                alt="Ruby on rails logo"
                className="size-24"
              />
            </Link>
            <div className="text-gray-500 font-medium w-full flex justify-between">
              <span>PATH</span>
              <span>7 Courses</span>
            </div>
            <h3 className="text-gray-800 text-xl font-medium self-start">Full Stack JavaScript</h3>
            <p className="">This path takes you through our entire JavaScript curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using JavaScript and NodeJS.</p>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white self-start px-12 py-3 rounded-md h-fit"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <SupportUs />
    </div>
  );
}

export default AllPaths;
import { Link } from "react-router";
import SupportUs from "../Components/SupportUS";

const AllPaths = () => {
  return (
    <div className="flex flex-col font-helvetica">
      <div className="bg-gray-50 flex flex-col items-center py-10 border-t border-gray-200 gap-10">
        <h1 className="text-gray-800 text-3xl font-bold font-helvetica">All Paths</h1>
        {/* foundation card */}
        <div className="bg-white px-8 pb-8 pt-10 gap-8 flex-1 rounded-lg shadow-sm flex flex-col items-center flex-wrap xxs:w-11/12 md:divide-y md:w-[880px]">
          <div className="flex pb-4 xxs:justify-center xxs:w-11/12 md:w-full md:items-center md:justify-between self-start">
            <div className="flex xxs:flex-col items-center gap-8">
              <Link 
                to=""
                className="size-24"
              >
                <img 
                  src="https://www.theodinproject.com/assets/badge-foundations-fc89cdc6.svg" 
                  alt="foundation logo"
                />
              </Link>
              <h2 className="text-gray-800 font-semibold xxs:text-3xl">Foundations</h2>
            </div>
            <Link
              to=""
              className="bg-gray-700 hover:bg-gray-800 text-white xxs:hidden md:block px-12 py-3 rounded-md h-fit"
            >
              Explore
            </Link>
          </div>
          <p className="text-gray-500 leading-loose md:pl-8 md:pr-24">This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do and the foundations you'll need for later courses.</p>
          <Link
            to=""
            className="bg-gray-700 hover:bg-gray-800 text-white xxs:text-sm xxs:block md:hidden w-fit xxs:px-10 md:px-12 py-3 rounded-md h-fit"
          >
            Explore
          </Link>
        </div>
        {/* Choosing learning paths section */}
        <div className="flex gap-5 items-center xxs:w-11/12 md:w-[880px]">
          <span className="xxs:hidden sm:block border-t border-gray-300 w-full"></span>
          <h2 className="text-gray-800 text-2xl font-medium mx-auto xxs:w-11/12 sm:w-full sm:text-nowrap">Then choose a learning path:</h2>
          <span className="xxs:hidden sm:block border-t border-gray-300 w-full"></span>
        </div>
        <div className="flex xxs:flex-col xxs:gap-6 xxs:w-full xxs:items-center md:flex-row md:justify-between md:w-[880px]">
          <div className="bg-white text-gray-500 px-8 pt-10 pb-8 rounded-lg shadow-md flex flex-col items-center gap-6 xxs:w-11/12 md:w-[405px]">
            <Link 
              to=""
              className="size-24"
            >
              <img 
                src="https://www.theodinproject.com/assets/badge-ruby-on-rails-e5f98949.svg" 
                alt="Ruby on rails logo"
              />
            </Link>
            <div className="text-gray-500 font-medium w-full flex justify-between mb-2">
              <span>PATH</span>
              <span>8 Courses</span>
            </div>
            <h3 className="text-gray-800 text-xl font-medium self-start">Full Stack Ruby on Rails</h3>
            <p className="leading-loose">This path takes you through our entire Ruby on Rails curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using Ruby on Rails.</p>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white xxs:text-sm xxs:self-center xxs:px-10 md:self-start md:px-12 py-3 rounded-md h-fit"
            >
              Explore
            </button>
          </div>
          <div className="bg-white text-gray-500 px-8 pt-10 pb-8 rounded-lg shadow-md flex flex-col items-center gap-6 xxs:w-11/12 md:w-[405px]">
            <Link 
              to=""
              className="size-24"
            >
              <img 
                src="https://www.theodinproject.com/assets/badge-javascript-43bfdf7b.svg" 
                alt="Ruby on rails logo"
              />
            </Link>
            <div className="text-gray-500 font-medium w-full flex justify-between mb-2">
              <span>PATH</span>
              <span>7 Courses</span>
            </div>
            <h3 className="text-gray-800 text-xl font-medium self-start">Full Stack JavaScript</h3>
            <p className="leading-loose">This path takes you through our entire JavaScript curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using JavaScript and NodeJS.</p>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white xxs:text-sm xxs:self-center md:self-start xxs:px-10 md:px-12 py-3 rounded-md h-fit"
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
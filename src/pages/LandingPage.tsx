import StepCard from '../Components/StepCard';
import TechnologyCard from '../Components/TechnologyCard';
import UserSuccessStory from '../Components/UserSuccessStory';
import SupportUs from '../Components/SupportUS';
import { stepArrayObjects, technologyArrayObjects, userArrayObjects } from "../Data";
import { Link } from "react-router"

function LandingPage() {
  return (
    <div>
      <header className='flex xxs:flex-col'>
        {/* Welcoming section */}
        <section className="flex flex-col items-center text-center xxs:mx-0 xxs:mt-12 md:mx-4 md:mt-24 pb-4 xxs:px-2 md:px-8">
          <h1 className='text-gray-700 xxs:text-4xl md:text-6xl font-medium pb-6 tracking-tighter'>Your <span className='text-yellow-700 '>Career in Web Development</span> <span className='block'>Starts Here</span></h1>
          <p className='text-gray-500 text-xl mb-10 xxs:w-11/12'>Our full stack curriculum is free and supported by a <span className='block'>passionate open source community.</span></p>
          <Link 
            to='/paths'          
            className='py-3 px-6 border text-gray-700 border-slate-300 hover:bg-gray-50 rounded-md w-fit'
          >
            View Full Curriculum
          </Link>
        </section>
        <img className="object-cover" src="/home-isometric.svg" alt="home isometric"/>
      </header>
      <main className='flex flex-col items-center text-center'>
        {/* How it works section */}
        <section className='flex flex-col bg-gray-50 px-8 py-20 w-full items-center text-center'>
          <h2 className='text-3xl font-medium mb-5 text-gray-800'>How it works</h2>
          <p className='text-lg text-gray-500 mb-10 xxs:w-full lg:w-3/4 xl:w-3/6'>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
          <div className='flex xxs:flex-col md:flex-row lg:ml-16 xl:w-3/6 items-center' >
            {/* mapping through the stepArrayObjects passing object as props and returning them */}
            {
              stepArrayObjects.map((step) => {
                return <StepCard image={step.image} title={step.title} description={step.description} />;
              })
            }
          </div>
        </section>
        {/* learning technologies section */}
        <section className='flex flex-col bg-gray-100 w-full md:px-20 py-20 items-center font-medium'>
          <h2 className='text-gray-800 text-3xl xxs:pb-14 sm:text-nowrap md:p-12'>Learn Everything you need to know</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xxs:gap-8 sm:gap-4 md:last:self-center'>
            {/* mapping through the technologyArrayObjects passing object as props and returning them */}
            {
              technologyArrayObjects.map((technology) => {
                return <TechnologyCard title={technology.title} image={technology.image} />;
              })
            }
          </div>
          <Link 
            to='/paths'          
            className='text-gray-700 border-slate-300 hover:bg-gray-50 bg-white py-3 px-6 mt-16 border rounded-md w-fit'
          >
            Explore Curriculum
          </Link>
        </section>
        {/* success stories and support us section */}
        <section className='w-full bg-gradient-to-b from-white to-gray-100 flex flex-col items-center py-20 px-8'>
          <h2 className='text-3xl font-medium text-gray-800'>Success Stories</h2>
          <div className='mt-10 mb-16 grid items-center xxs:gap-10 sm:w-5/6 md:w-4/6 xl:grid-rows-2 xl:grid-cols-2 xl:gap-4 lg:w-3/6'>
            {
              userArrayObjects.map((user) => {
                return <UserSuccessStory image={user.image} name={user.name} testimonial={user.testimonial} />;
              })
            }
          </div>
          <p className='underline cursor-pointer text-gray-500 md:text-lg font-medium'>Read more success stories</p>
          {/* support us section */}
        </section>
        <SupportUs />
      </main>
    </div>
  );
}

export default LandingPage;

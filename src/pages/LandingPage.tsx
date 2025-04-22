import StepCard from '../Components/StepCard';
import TechnologyCard from '../Components/TechnologyCard';
import UserSuccessStory from '../Components/UserSuccessStory';
import SupportUs from '../Components/SupportUS';
import { stepArrayObjects, technologyArrayObjects, userArrayObjects } from "../Data";

function LandingPage() {
  return (
    <div>
      <header className='md:flex md:flex-col md:items-center'>
        {/* Welcoming section */}
        <section className="flex flex-col items-center text-center mx-4 mt-24 pb-4 px-8">
          <h1 className='text-6xl font-medium text-gray-700 pb-6 tracking-tighter'>Your <span className='text-yellow-700 '>Career in Web Development</span> <span className='block'>Starts Here</span></h1>
          <p className='text-gray-500 text-xl mb-10 max-w-xl'>Our full stack curriculum is free and supported by a <span className='block'>passionate open source community.</span></p>
          <button className='py-3 px-6 border text-gray-700 border-slate-300 hover:bg-gray-50 rounded-md w-fit'>View Full Curriculum</button>
        </section>
        <img className="object-cover" src="/home-isometric.svg" alt="home isometric"/>
      </header>
      <main className='flex flex-col items-center text-center'>
        {/* How it works section */}
        <section className='flex flex-col bg-gray-50 px-8 py-20 w-full items-center text-center'>
          <h2 className='text-3xl font-medium mb-5 text-gray-800'>How it works</h2>
          <p className='text-lg text-gray-500 mb-10 lg:w-3/4 xl:w-3/6 '>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
          <div className='flex sm:flex-col md:flex-row lg:ml-16 xl:w-3/6 items-center' >
            {/* mapping through the stepArrayObjects passing object as props and returning them */}
            {
              stepArrayObjects.map((step) => {
                return <StepCard image={step.image} title={step.title} description={step.description} />;
              })
            }
          </div>
        </section>
        {/* learning technologies section */}
        <section className='flex flex-col bg-gray-100 w-full px-20 py-8 items-center font-medium'>
          <h2 className='text-gray-800 text-3xl p-12 sm:text-nowrap'>Learn Everything you need to know</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 md:last:self-center'>
            {/* mapping through the technologyArrayObjects passing object as props and returning them */}
            {
              technologyArrayObjects.map((technology) => {
                return <TechnologyCard title={technology.title} image={technology.image} />;
              })
            }
          </div>
          <button className='py-3 px-6 my-8 border text-gray-700 border-slate-300 rounded-md hover:bg-gray-50 w-fit bg-white'>Explore curriculum</button>
        </section>
        {/* success stories and support us section */}
        <section className='w-full bg-gradient-to-b from-white to-gray-100 flex flex-col items-center pt-20 px-8'>
          <h2 className='text-3xl font-medium text-gray-800'>Success Stories</h2>
          <div className='mt-16 mb-16 grid items-center sm:gap-10 sm:w-5/6 md:gap-10 md:w-4/6 xl:grid-rows-2 xl:grid-cols-2 xl:gap-4 lg:w-3/6'>
            {
              userArrayObjects.map((user) => {
                return <UserSuccessStory image={user.image} name={user.name} testimonial={user.testimonial} />;
              })
            }
          </div>
          <p className='underline mb-20 cursor-pointer text-gray-500 md:text-lg font-medium'>Read more success stories</p>
          {/* support us section */}
        </section>
        <SupportUs />
      </main>
    </div>
  );
}

export default LandingPage;

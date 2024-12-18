import './App.css';
import StepCard from './Components/StepCard';
import TechnologyCard from './Components/TechnologyCard';
import UserSuccessStory from './Components/UserSuccessStory';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SupportUs from './Components/SupportUS';

// array to store step objects
const stepArrayObjects = [
  {
    image: "https://www.theodinproject.com/assets/img-learn-0a725ad1.svg",
    title: "Learn",
    description: "Learn from a curriculum with the best curated online tutorials, blogs, and courses."
  },
  {
    image: "https://www.theodinproject.com/assets/img-build-a02a424b.svg",
    title: "Build",
    description: "Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites."
  },
  {
    image: "https://www.theodinproject.com/assets/img-connect-866e9700.svg",
    title: "Connect",
    description: "You're not alone. Learn and get help from our friendly community of beginner and experienced developers."
  }
];

// array to store technology objects
const technologyArrayObjects = [
  {
    image: "https://www.theodinproject.com/assets/badge-html-css-4d74ba92.svg",
    title: "Intermediate HTML and CSS",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-html-css-4d74ba92.svg",
    title: "Advanced HTML and CSS",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-database-3757c431.svg",
    title: "Databases",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-javascript-43bfdf7b.svg",
    title: "JavaScript",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-react-21ede6f9.svg",
    title: "React",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-nodejs-b8154f54.svg",
    title: "NodeJS",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-ruby-on-rails-e5f98949.svg",
    title: "Ruby on Rails",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-ruby-2e00add1.svg",
    title: "Ruby",
  },
  {
    image: "https://www.theodinproject.com/assets/badge-getting-hired-87e39081.svg",
    title: "Get Hired",
  }
];

// array to store user success story objects
const userArrayObjects = [
  {
    image: "https://www.theodinproject.com/assets/success_stories/rob_pando-2afd55e8.jpg",
    name: "Rob Pando",
    paragraph: "TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me..."
  },
  {
    image: "https://www.theodinproject.com/assets/success_stories/cody_loyd-fb0721ea.jpg",
    name: "Cody Loyd",
    paragraph: "Before I started the Odin Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front..."
  },
  {
    image: "https://www.theodinproject.com/assets/success_stories/andrej_dragojevic-a1bd5d98.jpg",
    name: "Andrej Dragojevic",
    paragraph: "An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer...."

  },
  {
    image: "https://www.theodinproject.com/assets/success_stories/skip-7f368b69.jpg",
    name: "Skip Gibson",
    paragraph: "Before I found The Odin Project I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went. Having this..."
  }
];

function App() {
  return (
    <div>
      <header className='md:flex md:flex-col md:items-center'>
        {/* Navigation bar section */}
        <NavBar />
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
        <section className='flex flex-col bg-gray-50 px-8 py-20 items-center text-center'>
          <h2 className='text-3xl font-medium mb-5 text-gray-800'>How it works</h2>
          <p className='text-lg text-gray-500 mb-10 lg:w-3/4 xl:w-3/5 '>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
          <div className='flex sm:flex-col md:w-full lg:ml-16 xl:ml-16 xl:w-4/5 items-center' >
            {/* mapping through the stepArrayObjects passing object as props and returning them */}
            {
              stepArrayObjects.map((object) => {
                return <StepCard step={object} />;
              })
            }
          </div>
        </section>
        {/* learning technologies section */}
        <section className='flex flex-col bg-gray-100 w-full px-20 py-8 items-center font-medium'>
          <h2 className='text-3xl mb-5 text-gray-800 p-12 sm:text-nowrap'>Learn Everything you need to know</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-8 mb-8 md:last:self-center'>
            {/* mapping through the technologyArrayObjects passing object as props and returning them */}
            {
              technologyArrayObjects.map((object) => {
                return <TechnologyCard technology={object} />;
              })
            }
          </div>
          <button className='py-3 px-6 my-8 border text-gray-700 border-slate-300 rounded-md hover:bg-gray-50 w-fit bg-white'>Explore curriculum</button>
        </section>
        {/* success stories and support us section */}
        <section className='bg-gray-50 flex flex-col items-center py-20 px-8'>
          <h2 className='text-3xl font-medium text-gray-800'>Success Stories</h2>
          <div className='mt-16 mb-16 grid items-center sm:gap-10 sm:w-5/6 md:gap-10 md:w-4/6 xl:grid-rows-2 xl:grid-cols-2 xl:gap-4 lg:w-3/6'>
            {
              userArrayObjects.map((object) => {
                return <UserSuccessStory user = {object} />;
              })
            }
          </div>
          <p className='underline mb-40 cursor-pointer text-gray-500 md:text-lg font-medium'>Read more success stories</p>
          {/* support us section */}
          <SupportUs />
        </section>
      </main>
      <footer className='flex flex-col xl:items-center xl:px-12 xl:py-10 xl:mx-2.5 xl:self-center sm:px-8 sm:py-10'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
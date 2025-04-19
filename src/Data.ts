//export type TechnologyProps = Omit<StepProps, "description">;

export type UserProps = {
  id: number;
  image: string;
  name: string;
  testimonial: string;
}

// array to store step objects
export const stepArrayObjects = [
  {
    id : 1,
    image: "https://www.theodinproject.com/assets/img-learn-0a725ad1.svg",
    title: "Learn",
    description: "Learn from a curriculum with the best curated online tutorials, blogs, and courses."
  },
  {
    id : 2,
    image: "https://www.theodinproject.com/assets/img-build-a02a424b.svg",
    title: "Build",
    description: "Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites."
  },
  {
    id : 3,
    image: "https://www.theodinproject.com/assets/img-connect-866e9700.svg",
    title: "Connect",
    description: "You're not alone. Learn and get help from our friendly community of beginner and experienced developers."
  }
];

// array to store technology objects
export const technologyArrayObjects = [
  {
    id : 1,
    image: "https://www.theodinproject.com/assets/badge-html-css-4d74ba92.svg",
    title: "Intermediate HTML and CSS",
  },
  {
    id : 2,
    image: "https://www.theodinproject.com/assets/badge-html-css-4d74ba92.svg",
    title: "Advanced HTML and CSS",
  },
  {
    id : 3,
    image: "https://www.theodinproject.com/assets/badge-database-3757c431.svg",
    title: "Databases",
  },
  {
    id : 4,
    image: "https://www.theodinproject.com/assets/badge-javascript-43bfdf7b.svg",
    title: "JavaScript",
  },
  {
    id : 5,
    image: "https://www.theodinproject.com/assets/badge-react-21ede6f9.svg",
    title: "React",
  },
  {
    id : 6,
    image: "https://www.theodinproject.com/assets/badge-nodejs-b8154f54.svg",
    title: "NodeJS",
  },
  {
    id : 7,
    image: "https://www.theodinproject.com/assets/badge-ruby-on-rails-e5f98949.svg",
    title: "Ruby on Rails",
  },
  {
    id : 8,
    image: "https://www.theodinproject.com/assets/badge-ruby-2e00add1.svg",
    title: "Ruby",
  },
  {
    id : 9,
    image: "https://www.theodinproject.com/assets/badge-getting-hired-87e39081.svg",
    title: "Getting Hired",
  }
];

// array to store user success story objects
export const userArrayObjects = [
  {
    id : 1,
    image: "https://www.theodinproject.com/assets/success_stories/rob_pando-2afd55e8.jpg",
    name: "Rob Pando",
    testimonial: "TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me..."
  },
  {
    id : 2,
    image: "https://www.theodinproject.com/assets/success_stories/cody_loyd-fb0721ea.jpg",
    name: "Cody Loyd",
    testimonial: "Before I started the Odin Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front..."
  },
  {
    id : 3,
    image: "https://www.theodinproject.com/assets/success_stories/andrej_dragojevic-a1bd5d98.jpg",
    name: "Andrej Dragojevic",
    testimonial: "An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer...."

  },
  {
    id : 4,
    image: "https://www.theodinproject.com/assets/success_stories/skip-7f368b69.jpg",
    name: "Skip Gibson",
    testimonial: "Before I found The Odin Project I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went. Having this..."
  }
];
import './App.css';
import StepCard from './Components/StepCard';
import TechnologyCard from './Components/TechnologyCard';
import UserSuccessStory from './Components/UserSuccessStory';

// shared tailwindcss styles for all the navigation items except for get start and svg icons
const navItemStyling = "relative after:content-[''] hover:after:scale-100 hover:after:bg-gray-300 after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 hover:text-gray-700 cursor-pointer font-medium text-sm text-gray-500 pt-2 px-1 pb-2";

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
      <header className='flex flex-col justify-center'>
        <nav className="flex px-8 py-2 mb-2 justify-center items-center space-x-96">
          {/* svg of the odin project logo />*/}
          <svg class="cursor-pointer hidden lg:block h-12 w-auto text-gray-800 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" width="205" height="59" viewBox="0 0 205 59" fill="none" role="img" aria-labelledby="aimo4pd0sljq7lim19ykocean6u5hy8c" ><title id="aimo4pd0sljq7lim19ykocean6u5hy8c">Odin Logo</title>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 34.7331L13.1482 19.2902H30.9833L35.442 34.7331H8.68945Z" fill="#EED9C3"></path>
            <ellipse cx="27.7849" cy="27.1223" rx="1.26005" ry="1.24284" fill="#353535"></ellipse>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.446 25.7092C19.446 25.2752 19.0891 24.9233 18.6493 24.9233C17.638 24.9233 15.9034 24.9233 14.8922 24.9233C14.4523 24.9233 14.0955 25.2752 14.0955 25.7092C14.0955 26.3856 14.0955 27.3716 14.0955 28.1426C14.0955 28.7935 14.6305 29.3212 15.2902 29.3212C15.6995 29.3212 16.1763 29.3212 16.6578 29.3212C17.3973 29.3212 18.1062 29.0314 18.6295 28.5155C19.1522 28.0001 19.446 27.3004 19.446 26.5712C19.446 26.2585 19.446 25.9621 19.446 25.7092Z" fill="#A78347"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0004 4.5308L43.8517 0L39.0002 18L35.0002 22L35.0004 4.5308Z" fill="#E3B261"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.8514 4.5308L0.000132561 0L4.85156 18L8.85156 22L8.8514 4.5308Z" fill="#E3B261"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.442 12.7438C35.442 12.7438 28.7539 8.34589 22.0657 8.34589C15.3776 8.34589 8.68945 12.7438 8.68945 12.7438V25.9373L10.473 29.4556C11.7527 24.5929 17.5445 22.5672 21.576 25.5723L22.0657 25.9373L22.5554 25.5723C26.587 22.5672 32.3788 24.5929 33.6585 29.4556L35.442 25.9373V12.7438Z" fill="#E3B261"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6068 32.5341L14.0398 53.2041L9.12134 49.6858L13.148 34.7331L17.6068 32.5341Z" fill="#D4D4D4"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5243 32.5341L30.0913 53.2041L35.0098 49.6858L30.9831 34.7331L26.5243 32.5341Z" fill="#D5D5D5"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68933 25.9373L5.12231 39.1309L9.58108 47.9267L13.1481 34.7331L8.68933 25.9373Z" fill="#E6E6E6"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4418 25.9373L39.0088 39.1309L34.55 47.9267L30.983 34.7331L35.4418 25.9373Z" fill="#E6E6E6"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6069 32.5341L13.594 54.0837L22.0656 58.4815L30.5373 54.0837L26.5244 32.5341L22.3983 30.4992L22.0656 30.3352L17.6069 32.5341Z" fill="#E6E6E6"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6636 33.4137H20.5425C20.5425 33.4137 20.5425 33.9348 20.5425 34.514C20.5425 34.9222 20.707 35.3131 20.9995 35.6016C21.292 35.8901 21.6884 36.0524 22.1022 36.0524C22.1026 36.0524 22.1035 36.0524 22.1039 36.0524C22.5177 36.0524 22.9141 35.8901 23.2066 35.6016C23.4991 35.3131 23.6636 34.9222 23.6636 34.514C23.6636 33.9348 23.6636 33.4137 23.6636 33.4137Z" fill="#353535"></path>
            <path d="M68.808 20.384L67.704 20.456C67.368 20.456 67.056 20.456 66.696 20.432C66.504 20.432 66.288 20.6 66.144 20.6L65.688 20.408L63.36 20.288L63.288 22.256L63.576 22.544L65.04 22.496C65.112 22.496 65.256 22.472 65.424 22.424L65.544 22.304L66.072 22.376L66.216 23.36L66.12 24.896L66.264 26.024L66.144 30.92L66.024 34.304L66.24 34.544L65.88 36.056V37.904L67.152 38.096L67.824 37.976L68.52 37.592L68.328 35.888V31.376L68.04 30.92L68.064 30.896L68.28 29.456L68.256 27.608V27.2C68.256 27.032 68.232 26.816 68.232 26.624C68.208 26.48 68.208 25.88 68.208 25.664L68.256 23.888L68.16 23.36L68.304 22.352H69.048L69.768 22.4L70.008 22.472H71.088L71.16 21.344L71.016 20.336L68.808 20.384ZM73.2638 33.992L73.3118 35.504L73.6478 35.864L73.2638 36.32L73.1918 37.928L74.7038 38.072L75.6878 38.024L75.7118 37.136L75.6398 36.056L75.4958 34.784L75.5198 34.712L75.6398 30.536L77.5118 29.744H77.5358L78.9278 29.432L78.9038 29.864L78.9758 30.2L78.9278 33.896L79.2878 34.28L79.0478 34.496L78.8798 37.184L79.1918 38.024H80.5838L81.4718 37.976L81.4238 36.656L81.2558 36.056L81.2078 32.984L81.1598 28.688L81.1118 28.208L81.0398 27.128L81.1598 24.872L80.9438 24.176L81.1838 23.864L81.2078 22.952V22.976L81.3518 21.608L81.4238 20.408L80.0558 20.36L79.1678 20.336L78.8078 21.032L78.9278 21.992L78.9758 24.152L79.0478 26.336L78.9518 26.984L78.6878 27.104L78.2318 27.32L77.2478 27.752L77.0318 28.016L76.6478 27.872L75.6398 28.232L75.5918 28.256L75.3758 25.928L75.4718 24.344L75.2078 24.128L75.4958 23.672L75.6158 22.208L75.7118 20.48L73.6478 20.216L73.0718 20.6L73.2398 22.088L73.1678 22.568L73.2398 24.152L73.4078 25.64L73.3118 27.992L73.4798 30.704L73.2638 33.992ZM90.8258 22.616L90.8738 21.272L90.8498 20.336L88.4738 20.36L87.5378 20.552L87.2018 20.36H85.8338L84.7058 20.504L84.8258 22.208L85.0898 22.52L84.8258 22.928L84.8498 24.152L84.8258 26.024V27.8L84.7538 28.688L84.9458 31.064L84.8498 31.256L84.8738 32.552V33.104L85.0898 33.392L84.8018 34.016L84.7778 35.12L84.8018 35.384L84.6578 37.016L84.7778 38L86.5778 38.024L86.7698 37.904H87.6098L88.9778 38.048L90.5618 38.072L91.1138 37.832L91.2098 36.944L91.2578 35.744L90.0578 35.72L89.4578 35.912L87.5378 35.936L87.3458 35.888L87.1298 35.84L87.0818 33.512L87.0578 33.464L87.1298 33.248L86.9858 32.552L87.0818 30.08H87.4658L88.9778 30.128L90.1538 30.176L90.2018 29.192L90.3458 28.472L90.0338 27.872L88.8098 27.992L87.8738 28.04L86.9858 27.992L86.9378 27.056L86.6978 26.864L86.9618 26.432L87.0818 25.712V23.336L87.1298 22.736V22.472H87.3458L88.6658 22.52L89.0498 22.448L89.1218 22.424L89.6978 22.616H90.8258ZM102.331 20.312L102.115 20.336H101.227L101.179 20.504L101.035 21.224L100.939 21.368L99.6429 24.608L99.7629 24.872L99.3309 25.184L98.0349 28.328L97.8429 28.448L97.8909 29.96L98.4669 31.184L99.3309 33.224L100.051 34.712H100.315L100.243 35.12L101.083 37.208L101.107 38L103.291 38.024L103.339 37.76L103.627 36.992L104.923 33.92L105.475 32.768L105.499 32.384L105.691 32.144L106.867 29.768L106.939 28.448L106.123 26.672L105.475 25.232H105.235L105.115 24.584L103.891 21.584L103.411 20.264L102.331 20.312ZM102.379 34.952L101.323 32.192L100.843 31.208L100.363 30.872L100.603 30.584L100.387 29.888L100.075 29.096L100.051 28.808L100.843 26.744L100.675 26.36L101.011 26.264L102.331 22.784L102.475 23.24L103.027 24.704L103.459 24.968L103.243 25.256L104.179 27.68L104.467 28.496L104.659 29.096L103.483 31.976L103.507 32.408H103.531L103.243 32.696L102.475 35.216L102.379 34.952ZM113.227 35.72L114.067 34.016L116.539 30.224L116.971 29.504L116.947 27.752L116.515 27.2L116.539 27.248L114.715 24.824L114.091 23.72L113.251 22.88L112.987 22.088L111.499 20.048L110.227 20.432L109.195 20.744L109.219 21.632L109.291 22.88L109.531 23.192L109.291 23.648L109.315 29.936L109.459 30.872L109.315 36.248V36.224L109.267 37.832L110.827 38.048L111.619 38.264L113.227 35.72ZM111.451 26.744L111.379 23.264L111.523 23.432L113.899 27.248L114.379 27.632L114.475 28.208L114.907 28.856L114.475 29.552L113.683 30.872L112.675 32.816L112.867 33.032L112.435 33.248L111.379 34.952L111.355 35L111.379 33.704L111.475 28.952L111.091 27.824L111.451 26.744ZM119.431 27.56L119.359 28.88L119.287 29.624V34.112V34.976L119.575 35.384L119.287 35.864L118.951 38L120.055 38.024L120.559 38.048L121.615 37.712L121.639 36.824L121.591 36.368L121.543 36.008V29.36L121.279 29.192L121.495 28.688L121.447 28.088L121.351 27.152L121.423 25.928L121.495 22.784L121.615 22.184L121.735 20.432L120.175 20.336L119.047 20.408L119.167 21.608L119.383 21.728L119.191 22.16L119.263 26.96L119.431 27.56ZM133.115 35.888V35.12L132.947 29.864L132.683 29.072L132.875 28.064L133.115 22.16L133.163 20.528L132.179 20.36L130.787 20.384V22.304L131.027 22.64L130.787 23.384V25.448L129.995 24.152L129.803 24.056L129.203 23.096L127.043 20.12L125.147 20.648V21.896L125.243 24.392L125.339 25.76L125.243 30.752L125.459 31.232L125.267 31.928L125.123 35.336V35.744L125.195 35.96L125.027 37.88L126.059 38.072L127.475 38.024L127.523 36.488L127.451 36.152L127.475 33.656L127.259 32.744L127.379 31.88L127.427 26.408L127.139 26.096L127.115 26.048L127.451 25.184V23.888L128.075 24.752L129.059 26.12L129.755 26.96L130.091 27.488L130.427 27.848L130.811 28.496L130.835 30.992L130.907 31.448L130.835 31.568L130.811 33.872L130.835 36.152L130.811 38.024L131.627 38.072L132.947 38.048L133.259 37.232L133.115 35.888ZM147.393 28.76L148.161 28.016L148.905 27.104L148.953 25.448L146.457 22.808L145.953 22.64L145.857 22.232L143.697 20L142.929 20.288L141.777 20.792L141.825 22.4L141.945 23.384V27.32L141.897 27.44L141.873 33.44L142.161 33.752L141.945 34.496L141.681 37.928L143.073 38.072L144.273 38L144.129 35.024L143.745 34.688L144.129 34.112L144.081 32.456L144.297 32.216L145.905 30.392L147.393 28.76ZM144.105 27.128L143.841 26.648L144.081 25.904L144.057 24.752L144.081 23.048L145.473 24.608L145.689 24.752L145.857 25.088L146.889 26.24L146.505 26.792L146.265 27.392L146.001 27.32L144.801 28.736L144.105 29.48V27.128ZM153.466 30.608L154.426 32.552L154.642 33.104L155.53 34.784L155.818 34.928L155.794 35.336L156.634 37.256L157.21 38.192L159.154 37.112L159.178 36.416L158.386 35.576L157.954 34.664V34.688L157.618 33.992L157.474 33.92V33.608L156.514 31.976C156.346 31.736 156.202 31.616 156.01 31.4V30.992C155.866 30.704 155.578 30.296 155.41 29.96L156.082 29.048L156.49 28.544L157.258 27.632L158.362 26.288L158.53 24.848L157.378 23.792C157.354 23.792 156.97 23.912 156.946 23.888L156.802 23.288L152.986 19.976L151.09 20.744L151.186 22.808L151.306 27.392L151.114 27.872L151.162 29.12L151.258 31.928V32.864L151.474 33.176L151.114 34.112L150.97 37.928L152.554 38.072L153.514 37.688L153.49 35.696L153.418 35.48L153.346 33.08L153.322 30.464L153.466 30.608ZM153.37 28.352L153.274 26.216L153.226 25.952L153.178 25.808L153.082 25.376L153.274 24.92V24.68L153.322 22.832L155.53 25.016L155.698 25.136L156.178 25.736L155.914 26.072C155.602 26.504 155.026 27.248 154.69 27.656L153.49 29.144L153.322 29.24L153.37 28.352ZM164.323 20.312L164.107 20.336H163.219L163.171 20.504L163.027 21.224L162.931 21.368L161.635 24.608L161.755 24.872L161.323 25.184L160.027 28.328L159.835 28.448L159.883 29.96L160.459 31.184L161.323 33.224L162.043 34.712H162.307L162.235 35.12L163.075 37.208L163.099 38L165.283 38.024L165.331 37.76L165.619 36.992L166.915 33.92L167.467 32.768L167.491 32.384L167.683 32.144L168.859 29.768L168.931 28.448L168.115 26.672L167.467 25.232H167.227L167.107 24.584L165.883 21.584L165.403 20.264L164.323 20.312ZM164.371 34.952L163.315 32.192L162.835 31.208L162.355 30.872L162.595 30.584L162.379 29.888L162.067 29.096L162.043 28.808L162.835 26.744L162.667 26.36L163.003 26.264L164.323 22.784L164.467 23.24L165.019 24.704L165.451 24.968L165.235 25.256L166.171 27.68L166.459 28.496L166.651 29.096L165.475 31.976L165.499 32.408H165.523L165.235 32.696L164.467 35.216L164.371 34.952ZM171.71 27.608L171.59 28.928L171.614 30.416L171.638 30.752V31.688L171.542 34.304L171.59 34.52L171.23 35.024L170.174 35.72L169.118 36.152V37.4L170.438 38.384L172.214 36.944L172.19 36.464L172.838 36.368L173.606 35.696L173.99 35.024L173.702 30.896L173.51 30.176L173.774 29.984L173.678 23.288L173.966 21.176L173.654 20.336L171.374 20.384V21.728L171.806 21.968L171.494 22.352L171.566 26.408L171.71 27.608ZM183.502 22.616L183.55 21.272L183.526 20.336L181.15 20.36L180.214 20.552L179.878 20.36H178.51L177.382 20.504L177.502 22.208L177.766 22.52L177.502 22.928L177.526 24.152L177.502 26.024V27.8L177.43 28.688L177.622 31.064L177.526 31.256L177.55 32.552V33.104L177.766 33.392L177.478 34.016L177.454 35.12L177.478 35.384L177.334 37.016L177.454 38L179.254 38.024L179.446 37.904H180.286L181.654 38.048L183.238 38.072L183.79 37.832L183.886 36.944L183.934 35.744L182.734 35.72L182.134 35.912L180.214 35.936L180.022 35.888L179.806 35.84L179.758 33.512L179.734 33.464L179.806 33.248L179.662 32.552L179.758 30.08H180.142L181.654 30.128L182.83 30.176L182.878 29.192L183.022 28.472L182.71 27.872L181.486 27.992L180.55 28.04L179.662 27.992L179.614 27.056L179.374 26.864L179.638 26.432L179.758 25.712V23.336L179.806 22.736V22.472H180.022L181.342 22.52L181.726 22.448L181.798 22.424L182.374 22.616H183.502ZM185.362 30.896L186.226 32.456L187.33 33.488L187.138 33.92L188.962 36.752L189.01 37.04L189.826 38.312L190.642 37.784L191.89 36.752L191.338 35.864L190.09 34.232L188.986 32.36L188.098 30.992L187.882 30.512L187.546 30.176L187.306 29.72L186.946 29.024L187.258 28.448L187.714 27.632L188.506 26.384L189.946 24.248L190.066 23.6L190.474 23.336L191.146 22.4L191.818 21.2L190.018 20L189.178 20.984L189.154 21.176L187.81 23.384V23.48L187.21 24.44V25.016L186.346 25.856L184.786 28.496L184.81 30.032L185.362 30.896ZM198.12 20.384L197.016 20.456C196.68 20.456 196.368 20.456 196.008 20.432C195.816 20.432 195.6 20.6 195.456 20.6L195 20.408L192.672 20.288L192.6 22.256L192.888 22.544L194.352 22.496C194.424 22.496 194.568 22.472 194.736 22.424L194.856 22.304L195.384 22.376L195.528 23.36L195.432 24.896L195.576 26.024L195.456 30.92L195.336 34.304L195.552 34.544L195.192 36.056V37.904L196.464 38.096L197.136 37.976L197.832 37.592L197.64 35.888V31.376L197.352 30.92L197.376 30.896L197.592 29.456L197.568 27.608V27.2C197.568 27.032 197.544 26.816 197.544 26.624C197.52 26.48 197.52 25.88 197.52 25.664L197.568 23.888L197.472 23.36L197.616 22.352H198.36L199.08 22.4L199.32 22.472H200.4L200.472 21.344L200.328 20.336L198.12 20.384Z" fill="currentColor"></path>
          </svg>
          <ul className="flex items-center justify-center ml-6">
            <li className={`${navItemStyling} ml-4`}>All Paths</li>
            <li className={`${navItemStyling} ml-8`}>About</li>
            <li className={`${navItemStyling} ml-8`}>Community</li>
            <li className={`${navItemStyling} ml-8`}>Support us</li>
            <li className={`${navItemStyling} ml-8`}>Sign in</li>
            <li className="cursor-pointer px-3 py-2">
              {/* svg image of light and dark mode icon  */}
              <svg className="ml-4 w-6 h-6 h-5 w-5 text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-300 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  role="img" aria-labelledby="atgc20zy8r5lhob3jd0ef2y9g9zptgd5"><title id="atgc20zy8r5lhob3jd0ef2y9g9zptgd5">theme icon</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
              </svg>
            </li>
            <li className="cursor-pointer hover:bg-teal-800 font-medium text-sm ml-8 bg-teal-700 px-4 py-2 rounded-md text-white">Get Started</li>
          </ul>
        </nav>
        {/* Welcoming section */}
        <section className="flex flex-col text-center justify-center mx-4 mt-24 pb-4 px-8">
          <h1 className='text-6xl font-medium text-gray-700 pb-6 tracking-tighter mx-auto'>Your <span className='text-yellow-700 '>Career in Web Development</span> <span className='block'>Starts Here</span></h1>
          <p className='text-gray-500 text-xl mx-auto mb-10 max-w-xl'>Our full stack curriculum is free and supported by a <span className='block'>passionate open source community.</span></p>
          <button className='py-3 px-6 border border-slate-300 hover:bg-gray-50 rounded-md w-fit self-center'>View Full Curriculum</button>
        </section>
        <img className="object-cover" src="/home-isometric.svg" alt="home isometric"/>
      </header>
      <main className='flex flex-col'>
        {/* How it works section */}
        <section className='flex flex-col w-1/2 px-8 py-20 self-center text-center'>
          <h2 className='text-3xl font-medium mb-5 text-gray-800'>How it works</h2>
          <p className='text-lg text-gray-500 mx-auto w-3/4 mb-10'>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
          <div className='flex'>
            {/* mapping through the stepArrayObjects passing object as props and returning them */}
            {
              stepArrayObjects.map((object) => {
                return <StepCard step={object} />;
              })
            }
          </div>
        </section>
        {/* learning technologies section */}
        <section className='flex flex-col bg-gray-100 px-20 py-8 text-center'>
          <h2 className='text-3xl font-medium mb-5 text-gray-800 p-12'>Learn Everything you need to know</h2>
          <div className='grid grid-cols-3 grid-rows-3 gap-8 self-center mb-8'>
            {/* mapping through the technologyArrayObjects passing object as props and returning them */}
            {
              technologyArrayObjects.map((object) => {
                return <TechnologyCard technology={object} />;
              })
            }
          </div>
          <button className='py-3 px-6 my-8 border border-slate-300 rounded-md hover:bg-gray-50 self-center w-fit bg-white'>Explore curriculum</button>
        </section>
        {/* success stories and support us section */}
        <section className='bg-gray-50 flex flex-col text-center py-20 px-8'>
          <h2 className='text-3xl font-medium text-gray-800'>Success Stories</h2>
          <div className='mt-16 mb-16 grid grid-rows-2 grid-cols-2 mx-auto gap-4'>
            {
              userArrayObjects.map((object) => {
                return <UserSuccessStory user = {object} />;
              })
            }
          </div>
          <p className='underline mb-40 cursor-pointer text-gray-500 font-medium'>Read more success stories</p>
          <div>
            <h2 className='text-3xl font-medium  text-gray-800'>Support us!</h2>
            <p className='text-gray-600 py-6 w-1/4 mx-auto text-sm'>The Odin Project is funded by the community. Join us in empowering learners around the globe by supporting The Odin Project!</p>
            <div className='flex space-x-4 justify-center'>
              <button className='py-3 px-6 border border-slate-300 hover:bg-gray-50 rounded-md self-center w-fit bg-white'>Learn more</button>
              <div className="flex cursor-pointer items-center hover:bg-teal-800 font-medium text-sm bg-teal-700 py-3 px-6 rounded-md text-white">
                <span>Donate now</span>
                <svg className="text-white w-6 h-6 relative right-0.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex justify-center px-12 py-8 mx-2.5'>
        <div className='border-t-2 border-gray-200'>
          <p>© 2024 The Odin Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import youtubeImg from './assets/Project/YouTube.jpg'
import WeatherImg from './assets/Project/weather.jpg'
import Edtech from './assets/Project/EdTech.jpg'
import feedbackImg from './assets/Project/Feedback.jpg'

export const projects = [
    {
      "title": "Anonymous Messaging (True Feedback)",
      "description": "A web application for collecting anonymous user feedback, and shareable links to ensure user privacy and data security.",
      "technologies": ["Next Js", "Node js", "MongoDB"],
      "img": feedbackImg,
      "live":"https://true-feedback-byvishal.vercel.app/",
      "code":"https://github.com/VishalMSahani/anonymous-review-app"
      
    },                        
    {
      "title": "YouTube-Backend Clone",
      "description": "A backend project inspired by YouTube, providing core user functionalities for managing videos, Like, Comment, Subscriber, and User Profile.",
      "technologies": ["JavaScript", "Express.js", "MongoDB"],
      "img": youtubeImg,
      "code":"https://github.com/VishalMSahani/YouTube-Backend"
      
    },
    {
      "title": "Weather Website",
      "description": "Weather website that shows you the current weather where you are and lets you check the weather in other cities too. ",
      "technologies": ["HTML", "JavaScript", "CSS"],
      "img": WeatherImg,
      "live":"https://vishalmsahani.github.io/Weather_Site/",
      "code":"https://github.com/VishalMSahani/Weather_Site"
      
    },
    {
      "title": "EdTEch Web Application",
      "description": "User-friendly interface that supports easy navigation and course management, ensuring a smooth and intuitive learning experience",
      "technologies": ["React.js", "Express.js", "MongoDB"],
      "img": Edtech,
      "code":"project/edtech",
      "type":"Ongoing"
    },
    // {
    //   "title": "YouTube-Backend Clone",
    //   "description": "A backend project inspired by YouTube, providing core user functionalities for managing and interacting with videos.",
    //   "technologies": ["Node.js", "Express.js", "MongoDB"],
    //   "img": ProjcetImg,
    //   "live":" ",
    //   "code":" "
    // },
  ]

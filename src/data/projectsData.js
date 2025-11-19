import eight from '../assets/svg/projects/est.jpg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import ten from '../assets/svg/projects/finPay.png'
import nine from '../assets/svg/projects/rekindle.png'


export const projectsData = [
  {
    id: 1,
    projectName: 'A FinTech Platform',
    projectDesc:
      'FinPay is a comprehensive, modern financial technology platform built with a full-stack architecture. It provides users with powerful tools for digital wallet management, invoice creation, virtual card services, and seamless transaction handling. The platform combines a robust Node.js backend with a sleek Vue.js frontend to deliver a professional banking experience.',
    tags: ['VueJS,ExpressJS,MongoDB'],
    code: 'https://github.com/Noibisjunior/GenzPay-FinTech-Project',
    demo: 'https://genzpay-w86e.onrender.com/',
    image: ten,
  },
  {
    id: 2,
    projectName: 'Rekindle',
    projectDesc:
      'Rekindle is a robust TypeScript-based backend API for managing professional connections, built with Express.js, MongoDB, and Redis (BullMQ). It provides secure authentication, dynamic QR code generation, comprehensive user profile management with image uploads, and a sophisticated reminder system to foster meaningful professional relationships.',
    tags: ['ReactJS,TypeScript,Express,MongoDB'],
    code: 'https://github.com/Noibisjunior/Rekindle',
    demo: 'https://frontend-service-8sxa.onrender.com',
    image: nine,
  },
  {
    id: 3,
    projectName: 'A Real Estate Web Application',
    projectDesc:
      'A real estate web application is an online platform designed to facilitate the buying, selling, renting, and management of real estate properties. Such a platform typically provides a variety of features and tools that help users find the properties they are looking for, compare prices and features, and connect with real estate agents or property owners.',
    tags: ['ReactJS,Firebase,TailwindCSS'],
    code: 'https://github.com/Noibisjunior/Estate-React-web-app',
    demo: 'https://estate-react-web-app.vercel.app/',
    image: eight,
  },
  {
    id: 4,
    projectName: 'NoibisDev',
    projectDesc:
      'This project is a blogging site built with Nextjs and Boostrap .',
    tags: ['Mdx', 'NextJs', 'BootStrap'],
    code: 'https://github.com/Noibisjunior/Noibisblog',
    demo: 'https://noibisdev.vercel.app/',
    image: six,
  },
  {
    id: 5,
    projectName: 'Online Coding Bootcamp',
    projectDesc:
      'This project is an online Coding Bootcamp built with the MVC Architecture.',
    tags: ['Nodejs', 'Express', 'HandleBars', 'MongoDB', 'BootStrap'],
    code: 'https://github.com/Noibisjunior/FULLSTACK-WEB-APPLICATION',
    demo: 'https://noibis-dev.cyclic.app/',
    image: seven,
  },
];


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, */